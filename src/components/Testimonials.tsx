import { Button } from '@/components/ui/button';
import { Target, HeartHandshake, Compass } from 'lucide-react';

export default function Testimonials() {
  const focuses = [
    { icon: Compass, title: 'Clarity and direction', detail: 'Explore your values, identify your priorities and choose practical next steps.' },
    { icon: Target, title: 'Habits and accountability', detail: 'Build routines you can maintain, review what works and adjust without chasing perfection.' },
    { icon: HeartHandshake, title: 'Confidence and connection', detail: 'Practice honest communication, responsibility and a healthier relationship with yourself and others.' },
  ];
  return <section id="testimonials" className="py-20 bg-gradient-subtle"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-4xl text-center mb-4">Growth built around your life</h2><p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">These are the areas we work on together—not promised outcomes or invented client stories.</p><div className="grid md:grid-cols-3 gap-8">{focuses.map(item => <div key={item.title}><item.icon className="text-primary mb-4" size={28} /><h3 className="text-xl mb-3">{item.title}</h3><p className="text-muted-foreground">{item.detail}</p></div>)}</div><div className="text-center mt-10"><Button variant="hero" asChild><a href="/coaching#booking">Discuss your goals</a></Button></div></div></section>;
}