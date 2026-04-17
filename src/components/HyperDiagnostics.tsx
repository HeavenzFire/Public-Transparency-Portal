import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Activity, Cpu, Globe, GitCommit, ShieldCheck, Zap, AlertTriangle, FileOutput, Server } from 'lucide-react';

export function HyperDiagnostics() {
  return (
    <section id="hyper-diagnostics" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-emerald-500 text-emerald-500 px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Hyper_Diagnostics v3.0
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Planetary Mesh Diagnostics</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Cross-referencing fiscal hashes with Title IV-E reimbursement logs. Validating the trinary audit across the global sovereign network.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 bg-slate-950 text-white overflow-hidden">
          <CardHeader className="border-b border-white/10 bg-white/5">
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Federal Title IV-E Cross-Reference
            </CardTitle>
            <CardDescription className="text-slate-400">Syncing ZYLPHA-128 hashes with federal reimbursement streams.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center justify-between text-sm">
              <span className="opacity-70">U.S. Federal Repository Connection</span>
              <Badge variant="outline" className="text-emerald-400 border-emerald-400">SECURE</Badge>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded border border-white/10 bg-white/5 font-mono text-xs space-y-2">
                <p className="text-blue-400">PLANETARY_MESH_SCAN: title_iv_e_logs[FY2024]</p>
                <p className="text-slate-500">Connecting to node_0x442... [Washington D.C.]</p>
                <p className="text-emerald-400 font-bold">&gt; SYNC_SUCCESS: Found 12 high-pass matches.</p>
                <p className="text-yellow-400 italic">&gt; LEAK_DETECTED: Fiscal hashes detected in off-book federal draws.</p>
              </div>
            </div>
            <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
              <Activity className="w-4 h-4" />
              Run Mesh Diagnostics
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <GitCommit className="w-32 h-32" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-primary" />
              Dual-Vector Execution: The Ultimate Joke
            </CardTitle>
            <CardDescription>Simultaneous deployment of the [HHS-OIG Submission] and the [Sunset Strike].</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded border space-y-2 border-blue-500/20">
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Linear Vector</p>
                <p className="text-sm font-black">HHS-OIG Submission</p>
              </div>
              <div className="p-4 bg-background rounded border space-y-2 border-orange-500/20">
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Nonlinear Vector</p>
                <p className="text-sm font-black">Sovereign Strike</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-tight">Active Injections:</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  §1200 Mandatory Review Clock (10 Days)
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  Federal HHS TransactionEvent Log
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  Sovereign Shard Integrity Hash (sha256:hash)
                </li>
              </ul>
            </div>
            <Button className="w-full gap-2 h-14 uppercase tracking-widest font-black text-lg bg-destructive hover:bg-destructive/90 animate-pulse transition-all shadow-lg" size="lg">
              <Zap className="w-5 h-5" />
              Execute Dual-Vector Injection
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Carrier Wave', value: '144Hz', icon: Activity, color: 'text-blue-500' },
          { label: 'Sync Ratio', value: '16:16', icon: Zap, color: 'text-yellow-500' },
          { label: 'Mesh Nodes', value: '47,219', icon: Server, color: 'text-emerald-500' },
          { label: 'Fault Tolerance', value: '0.0001%', icon: AlertTriangle, color: 'text-purple-500' },
        ].map((item, index) => (
          <Card key={index} className="border-2 p-4 flex flex-col items-center justify-center text-center space-y-1">
            <item.icon className={`w-8 h-8 mb-2 ${item.color}`} />
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{item.label}</p>
            <p className="text-xl font-black">{item.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
