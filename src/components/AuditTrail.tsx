import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { FileText, Mail, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

const events = [
  {
    date: '2026-04-07',
    title: 'OAG Complaint Filed',
    description: 'Formal complaint submitted to the Office of the Attorney General regarding TDLR non-compliance.',
    status: 'active',
    icon: AlertTriangle,
    ref: 'R049827-040726',
  },
  {
    date: '2026-04-01',
    title: 'TDLR Non-Response Deadline',
    description: 'Statutory 10-day period for Public Information Act request expired without production of fee-setting logic.',
    status: 'breach',
    icon: Clock,
  },
  {
    date: '2026-03-18',
    title: 'PIA Request: Fee-Setting Logic',
    description: 'Formal request for the "Public Benefit-Cost Note" analysis required by Texas Government Code §2001.024.',
    status: 'sent',
    icon: FileText,
  },
  {
    date: '2026-03-10',
    title: 'DSHS Email Bounce',
    description: 'Attempted communication with DSHS regarding §300.701 impact resulted in a permanent failure (550 User Unknown).',
    status: 'failed',
    icon: Mail,
  },
  {
    date: '2026-02-24',
    title: 'Initial Inquiry: TVC',
    description: 'Request for veteran impact assessment from the Texas Veterans Commission.',
    status: 'completed',
    icon: CheckCircle2,
  },
];

export function AuditTrail() {
  return (
    <section id="audit-trail" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The Audit Trail</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A public timeline of every PIA request, every bounced email, and every agency non-response (DSHS, TDLR, TVC).
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Timeline of Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-muted">
              {events.map((event, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-background border-2 border-muted flex items-center justify-center z-10 group-hover:border-primary transition-colors">
                    <event.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-primary">{event.date}</span>
                      {event.status === 'active' && <Badge variant="destructive" className="animate-pulse">Active</Badge>}
                      {event.status === 'breach' && <Badge variant="outline" className="border-red-500 text-red-500">Breach</Badge>}
                    </div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    {event.ref && (
                      <div className="text-xs font-mono bg-muted p-2 rounded inline-block">
                        REF: {event.ref}
                      </div>
                    )}
                  </div>
                  {index < events.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}
