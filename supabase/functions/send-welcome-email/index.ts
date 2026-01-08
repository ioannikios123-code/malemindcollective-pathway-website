import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  name: string;
  email: string;
  type: "applicant" | "newsletter";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, type }: WelcomeEmailRequest = await req.json();

    let subject: string;
    let html: string;

    if (type === "applicant") {
      subject = "Your Transformation Journey Begins Now 🚀";
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 40px; border-radius: 0 0 10px 10px; }
            .cta-button { display: inline-block; background: #c9a227; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #c9a227; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Welcome to Your Transformation, ${name}!</h1>
            </div>
            <div class="content">
              <p>Thank you for taking the first step toward becoming the best version of yourself.</p>
              
              <div class="highlight">
                <strong>What happens next?</strong>
                <p style="margin-bottom: 0;">Our team will review your application within 24-48 hours and reach out to schedule your FREE strategy call.</p>
              </div>

              <h3>While you wait, here's what you can do:</h3>
              <ul>
                <li>📚 Check out our free resources and blog posts</li>
                <li>🎥 Watch our transformation stories</li>
                <li>📱 Follow us on social media for daily motivation</li>
              </ul>

              <p>This is the beginning of something powerful. We're excited to have you here.</p>

              <p style="margin-top: 30px;">
                <strong>To your success,</strong><br>
                The Elite Men's Coaching Team
              </p>
            </div>
            <div class="footer">
              <p>© 2024 Elite Men's Coaching. All rights reserved.</p>
              <p>You're receiving this because you applied for our coaching program.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      subject = "Welcome to the Elite Men's Community! 💪";
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 40px; border-radius: 0 0 10px 10px; }
            .cta-button { display: inline-block; background: #c9a227; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Welcome, ${name}!</h1>
            </div>
            <div class="content">
              <p>You've just joined a community of men committed to excellence.</p>
              
              <h3>Here's what you'll receive:</h3>
              <ul>
                <li>🎯 Weekly actionable tips for personal growth</li>
                <li>📖 Exclusive content and resources</li>
                <li>🔥 Early access to new programs and offers</li>
                <li>💡 Insights from successful transformations</li>
              </ul>

              <p>Stay tuned for your first exclusive content coming soon!</p>

              <p style="margin-top: 30px;">
                <strong>To your growth,</strong><br>
                The Elite Men's Coaching Team
              </p>
            </div>
            <div class="footer">
              <p>© 2024 Elite Men's Coaching. All rights reserved.</p>
              <p>You're receiving this because you subscribed to our newsletter.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Elite Men's Coaching <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      html: html,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
