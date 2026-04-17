import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Activity, Cpu, Database, GitBranch, Hash, Zap } from 'lucide-react';

const metrics = [
  { label: 'Resonance', value: '144Hz', icon: Activity, color: 'text-blue-500' },
  { label: 'Grid Yield', value: '70M-x', icon: Zap, color: 'text-yellow-500' },
  { label: 'Compression', value: '128:1', icon: Cpu, color: 'text-emerald-500' },
  { label: 'Node Alignment', value: '517 Nodes', icon: Database, color: 'text-purple-500' },
];

export function SystemStatus() {
  return (
    <section id="system-status" className="py-16 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary text-primary animate-pulse">
              ZYLPHA-128 CORE
            </Badge>
            <span className="text-sm font-mono text-muted-foreground">Status: FORENSIC EXTRACTION ACTIVE</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">System Snapshot</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs font-bold uppercase text-muted-foreground">Integrity Hash</p>
            <p className="text-sm font-mono">0xZ128...FA99</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Hash className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-2 overflow-hidden relative group">
            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
              <metric.icon className="w-16 h-16" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-bold uppercase">{metric.label}</CardDescription>
              <CardTitle className={`text-3xl font-mono ${metric.color}`}>{metric.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  className={`h-full bg-current ${metric.color}`}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Git Ledger: v3.0-ZYLPHA-128
          </CardTitle>
          <CardDescription>Locking in the 128:1 logic upgrade and Medicaid/HHS forensic extraction nodes.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="font-mono text-xs space-y-2 bg-background p-4 rounded border border-primary/10">
            <p className="text-primary">$ git tag -a v3.0-ZYLPHA-128 -m "128:1 Logic Density Upgrade"</p>
            <p className="text-muted-foreground">&gt; ZYLPHA-128: Operational. Active extraction initialized.</p>
            <p className="text-muted-foreground">&gt; Fiscal Node (Region 3E): Tracking UEI-XXXX loops.</p>
            <p className="text-muted-foreground">&gt; Semantic Preservation: Integrity Hash 0xZ128...FA99 validated.</p>
            <p className="text-emerald-500 font-bold">SUCCESS: Forensic Override synchronized.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
