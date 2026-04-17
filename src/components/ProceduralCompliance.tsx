import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, HelpCircle, Scale } from 'lucide-react';

const complianceItems = [
  {
    principle: 'Family Location Efforts',
    statute: '§261.3022',
    description: 'Documented reasonable efforts to locate family (relatives, neighbors, employers).',
    status: 'fail',
    metric: 'No documentation of relative contact in 68% of cases.',
  },
  {
    principle: 'Timely Initial Response',
    statute: 'Duty of Care',
    description: 'First home visit completed within mandated timeframe (e.g., 48 hours).',
    status: 'fail',
    metric: 'Average response time: 114 hours for high-risk reports.',
  },
  {
    principle: 'Thorough Safety Assessment',
    statute: 'Duty of Care',
    description: 'Documented, written safety assessment considering all known risks.',
    status: 'partial',
    metric: 'Assessments present but often omit prior domestic violence history.',
  },
  {
    principle: 'Appropriate Safety Plan',
    statute: 'Duty of Care',
    description: 'Actionable safety plan developed and monitored effectively.',
    status: 'fail',
    metric: 'Plans often rely on "verbal agreements" with known offenders.',
  },
  {
    principle: 'Coordination with Agencies',
    statute: 'General Mandate',
    description: 'Documented referrals to law enforcement, DHHS, or mental health.',
    status: 'pass',
    metric: 'Referrals are made, but follow-up tracking is non-existent.',
  },
];

export function ProceduralCompliance() {
  return (
    <section id="procedural-compliance" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Procedural Non-Compliance</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Mapping statutory violations in DFPS investigations: Moving from reactive analysis to proactive assessment of legal mandates.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {complianceItems.map((item, index) => (
          <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold">{item.principle}</h3>
                    <Badge variant="secondary" className="font-mono text-[10px]">{item.statute}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-primary bg-primary/5 p-2 rounded border border-primary/10">
                      Audit Metric: {item.metric}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 min-w-[140px] justify-end">
                  {item.status === 'pass' && (
                    <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
                      <CheckCircle2 className="w-5 h-5" />
                      Compliant
                    </div>
                  )}
                  {item.status === 'fail' && (
                    <div className="flex items-center gap-2 text-destructive font-bold uppercase text-xs">
                      <XCircle className="w-5 h-5" />
                      Non-Compliant
                    </div>
                  )}
                  {item.status === 'partial' && (
                    <div className="flex items-center gap-2 text-orange-500 font-bold uppercase text-xs">
                      <HelpCircle className="w-5 h-5" />
                      Deficient
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-muted border-2 border-dashed border-muted-foreground/30 text-center space-y-4">
        <Scale className="w-12 h-12 mx-auto text-muted-foreground" />
        <h3 className="text-2xl font-bold italic">"Systemic failures are deeply rooted in a disregard for the very procedures designed to protect children."</h3>
      </div>
    </section>
  );
}
