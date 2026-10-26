import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Calendar, Video, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingInquiryForm from '@/components/BookingInquiryForm';
import coachingImage from '@/assets/service-coaching.jpg';
import { coachingOffer, coachingMinimumTotal } from '@/lib/coaching-offer';

const stages = [
  { title: 'Month 1 · Find your foundation', details: 'Map your current routines, clarify your values and choose a realistic focus. Start with a manageable weekly action plan across the five pillars.' },
  { title: 'Month 2 · Practice and adjust', details: 'Review what you actually did, explore barriers and refine your habits. Sessions can focus on confidence, relationships, movement or responsible money decisions.' },
  { title: 'Month 3 · Build your next chapter', details: 'Reflect on your progress, identify what you want to maintain and create a plan for the next phase. Growth is individual, not a promised result.' },
];

export default function CoachingPage() {
  return <div className="min-h-screen bg-background pt-16 lg:pt-[72px]">
    <Header />
    <main>
      <section className="relative isolate overflow-hidden">
        <img src={coachingImage} alt="A focused one-on-one coaching conversation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative mx-auto px-4 py-20 md:py-24 max-w-5xl">
          <p className="text-primary text-sm uppercase mb-5">MaleMindCollective</p>
          <h1 className="text-4xl md:text-6xl max-w-3xl mb-6">Personal coaching.<br />A practical path forward.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">For men who feel stuck or disconnected and want to build confidence, direction and healthier habits—with someone to talk to and a plan to act on.</p>
          <div className="flex flex-col sm:flex-row gap-3"><Button variant="hero" size="lg" asChild><a href="#booking">Request a free discovery call <ArrowRight className="ml-2" size={18} /></a></Button><Button variant="outline" size="lg" asChild><a href="#packages">View coaching options</a></Button></div>
        </div>
      </section>
      <section id="packages" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl mb-3">Choose your starting point</h2>
          <p className="text-muted-foreground mb-8">Start with a conversation, or inquire about ongoing personal support.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-lg flex flex-col"><CardHeader><Calendar className="text-primary mb-3" /><CardTitle className="text-2xl">Free Discovery Call</CardTitle><p className="text-4xl text-primary pt-3">$0</p></CardHeader><CardContent className="flex flex-col flex-1 gap-5"><p className="text-muted-foreground">Talk about what’s happening in your life, the changes you want and whether coaching is a good fit. There is no obligation to join.</p><ul className="space-y-3 text-sm"><li>Discuss your priorities and current challenges</li><li>Ask questions about the coaching approach</li><li>Agree on a next step that suits you</li></ul><Button variant="outline" asChild className="mt-auto"><a href="#booking">Request a discovery call</a></Button></CardContent></Card>
            <Card className="rounded-lg border-primary/40 flex flex-col"><CardHeader><Video className="text-primary mb-3" /><CardTitle className="text-2xl">1-on-1 Coaching</CardTitle><p className="text-4xl text-primary pt-3">${coachingOffer.monthlyPrice}<span className="text-base text-muted-foreground"> / month</span></p></CardHeader><CardContent className="space-y-5"><p className="text-muted-foreground">Personal guidance built around your goals, with weekly conversations and practical actions between sessions.</p><ul className="space-y-3 text-sm">{[`Weekly ${coachingOffer.weeklySessionMinutes}-minute one-on-one sessions`, 'Personal action plans and weekly progress reviews', 'Focus on mindset, spirituality, physical wellbeing, wealth habits and responsible masculinity'].map(text => <li key={text} className="flex gap-2"><Check size={18} className="text-primary shrink-0" />{text}</li>)}</ul><p className="text-sm text-muted-foreground">{coachingOffer.minimumMonths}-month minimum commitment (${coachingMinimumTotal} total). Cancel anytime after the initial commitment. Final scheduling and payment arrangements are confirmed before you join.</p><Button variant="hero" asChild className="w-full"><a href="/coaching/one-on-one#booking">Inquire about 1-on-1 coaching</a></Button></CardContent></Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/30"><div className="container mx-auto px-4 max-w-5xl"><Target className="text-primary mb-4" /><h2 className="text-3xl md:text-4xl mb-8">Your three-month pathway</h2><div className="grid md:grid-cols-3 gap-8">{stages.map(stage => <div key={stage.title}><h3 className="text-xl mb-3">{stage.title}</h3><p className="text-muted-foreground leading-relaxed">{stage.details}</p></div>)}</div><p className="text-sm text-muted-foreground border-t border-border mt-10 pt-6">This is a sample pathway, adapted together to your needs. Coaching is not therapy, medical care or regulated financial advice. No income, fitness or personal outcome is guaranteed.</p></div></section>
      <section id="booking" className="py-16 scroll-mt-24"><div className="container mx-auto px-4 max-w-3xl"><h2 className="text-3xl md:text-4xl mb-4">Let’s talk about your next step</h2><p className="text-muted-foreground mb-8">Share what you need support with and when you’re available. We’ll agree on a time before your call is confirmed.</p><BookingInquiryForm initialProgram={window.location.pathname.endsWith('one-on-one') ? 'one-on-one' : 'discovery'} /></div></section>
    </main><Footer />
  </div>;
}