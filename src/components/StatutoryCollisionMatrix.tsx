import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Gavel, FileSearch, AlertTriangle, Clock } from 'lucide-react';

const matrixData = [
  {
    tool: 'Metadata Audit',
    frequency: '16:1 Compression',
    target: 'IMPACT System Logs',
    outcome: 'Proving backdated entries / Administrative Fraud',
    status: 'Ready',
    icon: FileSearch,
  },
  {
    tool: 'Federal Sync',
    frequency: '144Hz',
    target: 'Federal Court Monitors',
    outcome: 'Linking case to $202M systemic failure',
    status: 'Active',
    icon: Gavel,
  },
  {
    tool: 'OCA Strike',
    frequency: 'Statutory Precision',
    target: 'Regional Director (Region 03)',
    outcome: 'Mandatory internal review (10-day clock)',
    status: 'Pending',
    icon: ShieldCheck,
  },
];

export function StatutoryCollisionMatrix() {
  return (
    <section id="statutory-collision-matrix" className="py-16 space-y-8">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="destructive" className="animate-pulse px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Operational Vector: Guardian Upgrade
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">Statutory Collision Matrix</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Upgrading the Gap Log to a high-fidelity forensic audit engine. We don't just ask for records; we demand the metadata of institutional failure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {matrixData.map((item, index) => (
          <motion.div
            key={item.tool}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-2 hover:border-primary transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-24 h-24" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>{item.status}</Badge>
                </div>
                <CardTitle className="text-2xl font-black tracking-tighter">{item.tool}</CardTitle>
                <CardDescription className="font-mono text-xs text-primary">{item.frequency}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Target Node</p>
                  <p className="text-sm font-semibold">{item.target}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Target Outcome</p>
                  <p className="text-sm italic">"{item.outcome}"</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            The "Case Zero" Forensic Hammer
          </CardTitle>
          <CardDescription>Bypassing standard §552.101 requests for deep-system metadata logs.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">The Logic: Administrative Fraud</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DFPS workers often backdate entries to meet statutory deadlines (like the 24-hour notice). By demanding the <strong>Metadata Transaction Logs</strong>, we expose the gap between the "event date" and the "created date."
            </p>
            <div className="p-4 rounded-lg bg-background border border-primary/10 font-mono text-xs space-y-2">
              <p className="text-primary">SELECT created_at, updated_at, event_date</p>
              <p className="text-primary">FROM impact_system_logs</p>
              <p className="text-primary">WHERE case_id = 'BRYER_ID' AND event_type = 'NOTICE_24H';</p>
              <p className="text-destructive font-bold">IF created_at &gt; event_date + 24h THEN FRAUD_DETECTED</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">The Pressure: OCA Strike</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Targeting the Regional Director via <strong>CPS Handbook §1200</strong>. Framing the log as a "Policy Violation Report" triggers a mandatory internal review clock that cannot be ignored.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Mandatory 10-day review cycle
              </li>
              <li className="flex items-center gap-2 text-xs">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Direct escalation to Regional Director
              </li>
              <li className="flex items-center gap-2 text-xs">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Audit Trail preservation required
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
