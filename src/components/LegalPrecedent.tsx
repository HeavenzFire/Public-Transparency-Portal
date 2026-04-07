import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scale, Gavel, ShieldAlert, Landmark } from 'lucide-react';

const precedents = [
  {
    title: 'Patel v. TDLR (2015)',
    description: 'The Texas Supreme Court ruling that established the "Economic Liberty" precedent.',
    content: 'The court held that the Texas Constitution protects the right to earn a living without being subject to "oppressive" regulations. A 3,233% fee increase on veteran-owned businesses, implemented without a fiscal impact analysis, is a direct violation of this precedent.',
    icon: Gavel,
  },
  {
    title: 'Texas Gov Code §2001.024',
    description: 'The statutory requirement for a "Public Benefit-Cost Note".',
    content: 'Agencies MUST provide a detailed analysis of the costs and benefits of a proposed rule. TDLR failed to produce this analysis for §300.701, rendering the fee hike legally invalid and procedurally non-compliant.',
    icon: Landmark,
  },
  {
    title: 'Texas Gov Code §2006.002',
    description: 'The "Small Business Regulatory Flexibility Act".',
    content: 'Requires agencies to conduct a regulatory flexibility analysis for rules that have an adverse economic effect on small businesses. The $202M impact on veteran-owned micro-businesses was never assessed.',
    icon: ShieldAlert,
  },
];

export function LegalPrecedent() {
  return (
    <section id="legal-precedent" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The "Patel" Precedent</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A legal breakdown of how these fee hikes violate the *Patel v. TDLR* ruling regarding economic liberty and statutory transparency.
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            Legal Framework & Violations
          </CardTitle>
          <CardDescription>Documenting the breach of the Texas Constitution and Government Code.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {precedents.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{item.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 text-muted-foreground leading-relaxed text-base">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
