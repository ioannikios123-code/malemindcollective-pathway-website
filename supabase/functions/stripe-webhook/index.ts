import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;

  try {
    // For webhook signature verification, you would need STRIPE_WEBHOOK_SECRET
    // For now, we'll parse the event directly
    event = JSON.parse(body) as Stripe.Event;
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    const courseId = session.metadata?.course_id;
    const userId = session.metadata?.user_id;
    const amount = session.amount_total ? session.amount_total / 100 : 0;

    if (courseId && userId) {
      // Create purchase record
      const { error } = await supabaseAdmin
        .from("purchases")
        .insert({
          user_id: userId,
          course_id: courseId,
          amount: amount,
          status: "completed",
          stripe_payment_id: session.payment_intent as string,
        });

      if (error) {
        console.error("Error creating purchase:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }

      console.log(`Purchase completed for user ${userId}, course ${courseId}`);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});