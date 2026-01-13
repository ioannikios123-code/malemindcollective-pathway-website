import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormNotificationRequest {
  formType: "consultation" | "newsletter" | "contact" | "survey";
  name: string;
  email: string;
  phone?: string;
  goals?: string;
  challenges?: string;
  additionalInfo?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: FormNotificationRequest = await req.json();
    console.log("Received form notification request:", data.formType);

    const ownerEmail = "malemindcollective@gmail.com";
    
    // Email to owner
    let ownerSubject = "";
    let ownerHtml = "";

    switch (data.formType) {
      case "consultation":
        ownerSubject = `🎯 New Discovery Call Request from ${data.name}`;
        ownerHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #D4AF37;">New Discovery Call Request</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Goals & Challenges</h3>
              <p><strong>Goals:</strong></p>
              <p>${data.goals || 'Not provided'}</p>
              <p><strong>Challenges:</strong></p>
              <p>${data.challenges || 'Not provided'}</p>
              ${data.additionalInfo ? `<p><strong>Previous Experience:</strong></p><p>${data.additionalInfo}</p>` : ''}
            </div>
            <p style="margin-top: 30px;">
              <a href="mailto:${data.email}" style="background: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Reply to ${data.name}
              </a>
            </p>
          </div>
        `;
        break;

      case "newsletter":
        ownerSubject = `📧 New Newsletter Subscriber: ${data.email}`;
        ownerHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #D4AF37;">New Newsletter Subscriber</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
          </div>
        `;
        break;

      case "contact":
        ownerSubject = `💬 New Contact Message from ${data.name}`;
        ownerHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #D4AF37;">New Contact Message</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Message:</strong></p>
              <p>${data.message || 'No message provided'}</p>
            </div>
            <p style="margin-top: 30px;">
              <a href="mailto:${data.email}" style="background: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Reply to ${data.name}
              </a>
            </p>
          </div>
        `;
        break;

      case "survey":
        ownerSubject = `📋 New Lead Survey from ${data.name}`;
        ownerHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #D4AF37;">New Lead Survey Submission</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Survey Responses</h3>
              <p><strong>Goals:</strong> ${data.goals || 'Not provided'}</p>
              <p><strong>Challenges:</strong> ${data.challenges || 'Not provided'}</p>
              ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ''}
            </div>
            <p style="margin-top: 30px;">
              <a href="mailto:${data.email}" style="background: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Reply to ${data.name}
              </a>
            </p>
          </div>
        `;
        break;
    }

    // Send notification to owner
    const ownerEmailResult = await resend.emails.send({
      from: "MaleMindCollective <onboarding@resend.dev>",
      to: [ownerEmail],
      subject: ownerSubject,
      html: ownerHtml,
    });

    console.log("Owner email sent:", ownerEmailResult);

    // Send confirmation email to user (except for newsletter which has its own)
    if (data.formType === "consultation" || data.formType === "contact" || data.formType === "survey") {
      const userSubject = data.formType === "consultation" 
        ? "Your Discovery Call Request - MaleMindCollective"
        : "Thanks for reaching out - MaleMindCollective";
      
      const userHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #D4AF37;">Thank You, ${data.name}!</h1>
          <p>We've received your ${data.formType === "consultation" ? "discovery call request" : "message"} and will get back to you within 24 hours.</p>
          ${data.formType === "consultation" ? `
            <p>In the meantime, here's what you can do:</p>
            <ul>
              <li>Check out our <a href="https://malemindcollective-pathway-website.lovable.app/courses">programs and courses</a></li>
              <li>Follow us on social media for daily tips</li>
              <li>Review your goals and be ready to discuss them on our call</li>
            </ul>
          ` : ''}
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The MaleMindCollective Team</strong>
          </p>
        </div>
      `;

      const userEmailResult = await resend.emails.send({
        from: "MaleMindCollective <onboarding@resend.dev>",
        to: [data.email],
        subject: userSubject,
        html: userHtml,
      });

      console.log("User confirmation email sent:", userEmailResult);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error sending form notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
