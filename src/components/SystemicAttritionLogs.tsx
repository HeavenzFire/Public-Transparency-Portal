import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MailX, AlertTriangle, Clock, ShieldX, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const attritionLogs = [
  {
    timestamp: '2026-04-07 14:02:48',
    target: 'Margaux Fox (Clerk)',
    agency: 'DSHS',
    event: 'Permanent Failure (550 User Unknown)',
    type: 'Bounced Email',
    severity: 'critical',
  },
  {
    timestamp: '2026-04-06 09:15:22',
    target: 'Kennedy Calvo (Public Info)',
    agency: 'TDLR',
    event: 'Non-Response (10-Day Breach)',
    type: 'Statutory Violation',
    severity: 'high',
  },
  {
    timestamp: '2026-04-05 16:44:10',
    target: 'General Counsel',
    agency: 'TVC',
    event: 'Connection Timed Out',
    type: 'Network Attrition',
    severity: 'medium',
  },
  {
    timestamp: '2026-04-04 11:30:00',
    target: 'Records Division',
    agency: 'DFPS',
    event: 'Access Denied (Insufficient Permissions)',
    type: 'Gatekeeping',
    severity: 'high',
  },
];

export function SystemicAttritionLogs() {
  return (
    <section id="attrition-logs" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Systemic Attrition Logs</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Documenting the evidence of institutional friction: Every bounced email, timed-out connection, and silent denial is a matter of public record.
        </p>
      </div>

      <Card className="border-2 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle className="flex items-center gap-2">
            <MailX className="w-5 h-5 text-destructive" />
            Institutional Friction Log
          </CardTitle>
          <CardDescription>Timestamped record of agency non-responses and communication failures</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[200px]">Timestamp</TableHead>
                <TableHead>Target / Agency</TableHead>
                <TableHead>Event Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attritionLogs.map((log, index) => (
                <TableRow key={index} className="hover:bg-muted/20 transition-colors group">
                  <TableCell className="font-mono text-xs">{log.timestamp}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-bold">{log.target}</span>
                      <span className="text-xs text-muted-foreground">{log.agency}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm italic">"{log.event}"</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px] uppercase">{log.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      variant={log.severity === 'critical' ? 'destructive' : 'secondary'}
                      className={log.severity === 'high' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : ''}
                    >
                      {log.severity.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-dashed bg-muted/50">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <ShieldX className="w-6 h-6 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Evidence of Gatekeeping</h3>
              <p className="text-sm text-muted-foreground">These logs serve as the primary evidence for the OAG Expedited Determination request.</p>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Headers
            </Button>
          </CardContent>
        </Card>
        <Card className="border-2 border-dashed bg-muted/50">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Statutory Clock</h3>
              <p className="text-sm text-muted-foreground">Every non-response after the 10-day PIA limit is a documented violation of Texas Law.</p>
            </div>
            <Button variant="outline" size="sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Breach
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
