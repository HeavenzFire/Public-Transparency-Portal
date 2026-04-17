import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gavel, Landmark, Send, FileWarning, ExternalLink } from 'lucide-react';

const targets = [
  {
    body: 'Federal Court (Special Masters)',
    channel: 'Formal Submission of Evidence',
    message: 'DFPS systemic failures are a direct continuation of court-monitored problems.',
    evidence: 'Procedural non-compliance logs, intervention timelines, Capacity Crisis Index.',
    icon: Gavel,
    status: 'Ready',
  },
  {
    body: 'Texas Sunset Advisory Commission',
    channel: 'Formal Submission of Report',
    message: 'DFPS is an inefficient agency demonstrated by an inability to protect children.',
    evidence: 'Human Attrition Ledger, Legal Orphan Rate, budget-to-outcome analysis.',
    icon: Landmark,
    status: 'Pending',
  },
  {
    body: 'State Legislators & Committees',
    channel: 'Briefings and Press Releases',
    message: 'Fiscal responsibility demands a Sunset review of visibly failing agency.',
    evidence: 'Budget vs. Outcomes visualization, list of preventable fatalities.',
    icon: FileWarning,
    status: 'Scheduled',
  },
];

export function EscalationPlan() {
  return (
    <section id="escalation-plan" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">High-Pressure Escalation</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Targeting federal and state oversight bodies: Moving beyond documentation to compel formal response and reform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {targets.map((target, index) => (
          <Card key={index} className="border-2 flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <target.icon className="w-5 h-5 text-primary" />
                </div>
                <Badge variant={target.status === 'Ready' ? 'default' : 'secondary'}>{target.status}</Badge>
              </div>
              <CardTitle className="text-xl">{target.body}</CardTitle>
              <CardDescription className="font-medium text-primary">{target.channel}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-muted-foreground">Core Message</p>
                <p className="text-sm leading-relaxed italic">"{target.message}"</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-muted-foreground">Supporting Evidence</p>
                <p className="text-sm leading-relaxed">{target.evidence}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Execute Escalation
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-destructive/5 border-destructive/20 border-2">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-destructive">The "ZYLPHA-16 CPS" Data Drop</h3>
            <p className="text-muted-foreground">
              A targeted media campaign to amplify findings. The "Data Drop" emails are ready for distribution to major Texas newsrooms and investigative desks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="destructive" className="gap-2">
                <FileWarning className="w-4 h-4" />
                Launch Data Drop
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Media Kit
              </Button>
            </div>
          </div>
          <div className="w-full md:w-auto bg-background p-6 rounded-xl border-2 border-destructive/20 font-mono text-xs space-y-2">
            <p className="text-destructive font-bold">To: Texas Tribune Investigative Desk</p>
            <p className="text-destructive font-bold">Subject: DATA RELEASE: Forensic Audit of DFPS Fatality Reviews</p>
            <div className="h-px bg-destructive/20 my-2" />
            <p>The full dataset documenting systemic data integrity failures and procedural non-compliance has been moved to a public-facing transparency portal...</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
