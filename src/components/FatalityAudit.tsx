import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ShieldCheck, Search, FileText } from 'lucide-react';

const auditData = [
  {
    point: 'Date/Time of Death',
    dfps: '2026-03-15 14:00',
    me: '2026-03-14 02:00',
    le: 'Dispatch: 2026-03-15 14:15',
    flag: 'Significant Discrepancy (>24h)',
    severity: 'high',
  },
  {
    point: 'Cause of Death',
    dfps: 'Natural Causes',
    me: 'Blunt Force Trauma',
    le: 'Signs of struggle at scene',
    flag: 'Medical Contradiction',
    severity: 'critical',
  },
  {
    point: 'Manner of Death',
    dfps: 'Accidental',
    me: 'Homicide',
    le: 'Initial assessment: Suspicious',
    flag: 'Classification Breach',
    severity: 'critical',
  },
  {
    point: 'Risk Factors',
    dfps: 'None identified',
    me: 'Signs of chronic malnutrition',
    le: 'Prior domestic calls (3)',
    flag: 'Omission of Verifiable Risk',
    severity: 'high',
  },
  {
    point: 'Previous History',
    dfps: 'No prior contact',
    me: 'Old healing fractures',
    le: 'Address flagged for drug use',
    flag: 'Case History Erasure',
    severity: 'high',
  },
];

export function FatalityAudit() {
  return (
    <section id="fatality-audit" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Forensic Fatality Audit</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Deconstructing the official narrative: A multi-source triangulation of DFPS, Medical Examiner, and Law Enforcement records.
        </p>
      </div>

      <Card className="border-2 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Data Integrity Rubric
          </CardTitle>
          <CardDescription>Cross-referencing primary, secondary, and tertiary evidence sources</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[150px]">Data Point</TableHead>
                <TableHead>Primary (DFPS)</TableHead>
                <TableHead>Secondary (ME)</TableHead>
                <TableHead>Tertiary (Law Enf.)</TableHead>
                <TableHead className="text-right">Audit Flag</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-bold text-sm">{row.point}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{row.dfps}</TableCell>
                  <TableCell className="text-sm font-medium">{row.me}</TableCell>
                  <TableCell className="text-sm italic">{row.le}</TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      variant={row.severity === 'critical' ? 'destructive' : 'outline'}
                      className={row.severity === 'high' ? 'border-orange-500 text-orange-500' : ''}
                    >
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {row.flag}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border-2 border-dashed flex flex-col items-center text-center space-y-3">
          <FileText className="w-8 h-8 text-muted-foreground" />
          <h3 className="font-bold">ME Corroboration</h3>
          <p className="text-sm text-muted-foreground">Independent scientific determination of cause/manner.</p>
        </div>
        <div className="p-6 rounded-xl border-2 border-dashed flex flex-col items-center text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-muted-foreground" />
          <h3 className="font-bold">LE Incident Logs</h3>
          <p className="text-sm text-muted-foreground">External validation of timelines and scene conditions.</p>
        </div>
        <div className="p-6 rounded-xl border-2 border-dashed flex flex-col items-center text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-muted-foreground" />
          <h3 className="font-bold">Audit Flagging</h3>
          <p className="text-sm text-muted-foreground">Systematic identification of systemic data manipulation.</p>
        </div>
      </div>
    </section>
  );
}
