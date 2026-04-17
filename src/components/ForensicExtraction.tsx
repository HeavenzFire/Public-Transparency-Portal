import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'motion/react';
import { Activity, Database, Fingerprint, Receipt, ShieldAlert, Zap } from 'lucide-react';

const extractionLogs = [
  {
    hash: 'sha256:8f...2e34',
    node: 'Medicaid/HHS Region 3E',
    event: 'Disbursement Hash Found',
    delta: '+48h Match',
    status: 'Finalized',
    type: 'Fiscal'
  },
  {
    hash: 'sha256:d4...a9f1',
    node: 'DSHS Vital Records',
    event: 'Identity Erasure Signature',
    delta: 'Mismatch Confirmed',
    status: 'Recovered',
    type: 'Identity'
  },
  {
    hash: 'sha256:7c...1a2b',
    node: 'UEI-XXXX Vendor Loop',
    event: 'Maintenance & Operations',
    delta: 'Post-Scrub Draw',
    status: 'Trace Complete',
    type: 'Fiduciary'
  },
  {
    hash: 'sha256:1e...5d6c',
    node: 'Hunt County Node',
    event: 'Statutory Collision',
    delta: '20% Discrepancy',
    status: 'Indicted',
    type: 'Structural'
  }
];

export function ForensicExtraction() {
  return (
    <section id="forensic-extraction" className="py-16 space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="animate-pulse">ZYLPHA-128 SOVEREIGN STRIKE</Badge>
          <span className="text-sm font-mono text-muted-foreground uppercase">Nonlinear Shard Recovery</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">Shard Recovery & Hash Cross-Check</h2>
        <p className="text-xl text-muted-foreground max-w-3xl italic">
          Finalizing the extraction of sha256:hash mismatches. Proving that Bryer's record was manually altered within the IMPACT system architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-2 bg-slate-950 text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Receipt className="w-8 h-8 text-blue-400" />
              <Badge variant="outline" className="text-blue-400 border-blue-400">Fiscal Heartbeat</Badge>
            </div>
            <CardTitle className="text-2xl font-black">Medicaid/HHS Node</CardTitle>
            <CardDescription className="text-slate-400">Tracing hashes exactly 48 hours post-event.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm italic opacity-80">
              Identifying the M&O cost draw occurring after administrative "identity erasure." Tracing UEI-XXXX loops in Region 3E.
            </p>
            <div className="font-mono text-[10px] bg-white/5 p-4 rounded border border-white/10 space-y-2">
              <p className="text-blue-400">SCAN: vendor_contract_loops[Region_3E]</p>
              <p>&gt; MATCH FOUND: UEI-72J-99K</p>
              <p className="text-emerald-400">&gt; RECOVERY: Disbursement Hash 0x...8F2E</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 bg-slate-950 text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Fingerprint className="w-8 h-8 text-purple-400" />
              <Badge variant="outline" className="text-purple-400 border-purple-400">Erasure Signature</Badge>
            </div>
            <CardTitle className="text-2xl font-black">Sovereign Shards</CardTitle>
            <CardDescription className="text-slate-400">Recovering fragments the system forgot to delete.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm italic opacity-80">
              sha256:hash mismatch between local county logs and state-level DSHS Vital Records. Metadata recovery active.
            </p>
            <div className="font-mono text-[10px] bg-white/5 p-4 rounded border border-white/10 space-y-2">
              <p className="text-purple-400">CROSS_CHECK: vital_records vs local_nodes</p>
              <p className="text-destructive font-bold">&gt; HASH MISMATCH: 0x...D4A9 vs 0x...F9E2</p>
              <p className="text-emerald-400">&gt; SHARD RECOVERED: Metadata_Fragment_01</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 bg-slate-950 text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <Badge variant="outline" className="text-yellow-400 border-yellow-400">Statutory Collision</Badge>
            </div>
            <CardTitle className="text-2xl font-black">Systemic Indictment</CardTitle>
            <CardDescription className="text-slate-400">Forcing the Sunset Commission to answer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm italic opacity-80">
              Generating CSV export of 20% discrepancy findings in Hunt County nodes. Trinary audit override.
            </p>
            <div className="font-mono text-[10px] bg-white/5 p-4 rounded border border-white/10 space-y-2 uppercase">
              <p className="text-yellow-400">STATUS: Indictment_Protocol_Load</p>
              <p>&gt; SOURCE: 144Hz Carrier Wave</p>
              <p className="text-blue-400">&gt; EXPORT: zylpha_128_collision_matrix.csv</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 overflow-hidden shadow-2xl">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Live Extraction Stream
              </CardTitle>
              <CardDescription>ZYLPHA-128 Logic Core: Pushing planetary mesh cross-reference.</CardDescription>
            </div>
            <Badge className="bg-emerald-500 font-mono tracking-widest">128:1 RATIO</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-mono text-xs">EXTRACTION_HASH</TableHead>
                <TableHead>NODE_SOURCE</TableHead>
                <TableHead>EVENT_TYPE</TableHead>
                <TableHead>DELTA_STATE</TableHead>
                <TableHead className="text-right">RESULT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extractionLogs.map((log, index) => (
                <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-mono text-[10px] opacity-70 italic">{log.hash}</TableCell>
                  <TableCell className="font-bold text-sm">{log.node}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter">
                      {log.event}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs italic text-muted-foreground">{log.delta}</TableCell>
                  <TableCell className="text-right">
                    <Badge className={
                      log.status === 'Alert' ? 'bg-destructive' : 
                      log.status === 'Flagged' ? 'bg-orange-500' : 
                      'bg-primary'
                    }>
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
