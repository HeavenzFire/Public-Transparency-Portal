import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { MapPin, TrendingUp, AlertCircle, DollarSign, Clock, Users } from 'lucide-react';

const fiscalData = [
  {
    county: 'Collin',
    standardRate: 145,
    emergencyRate: 850,
    delta: 705,
    cwopCases: 42,
    monthlyLeak: 888300, // 705 * 42 * 30
  },
  {
    county: 'Tarrant',
    standardRate: 145,
    emergencyRate: 1200,
    delta: 1055,
    cwopCases: 128,
    monthlyLeak: 4051200, // 1055 * 128 * 30
  },
  {
    county: 'Dallas',
    standardRate: 145,
    emergencyRate: 1100,
    delta: 955,
    cwopCases: 156,
    monthlyLeak: 4469400, // 955 * 156 * 30
  },
  {
    county: 'Rains (Rural)',
    standardRate: 145,
    emergencyRate: 650,
    delta: 505,
    cwopCases: 8,
    monthlyLeak: 121200, // 505 * 8 * 30
  },
];

export function CountyFiscalAudit() {
  return (
    <section id="county-fiscal-audit" className="py-16 space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary text-primary">Region 3E Analysis</Badge>
          <span className="text-sm font-mono text-muted-foreground">ZYLPHA-16 Fiscal Directive</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">County-Specific Fiduciary Failure</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Mapping the "Placement Delta" and CWOP metrics in Region 3E. Documenting how standard DFPS rates are bypassed by emergency "off-book" spending due to statutory time-limit violations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Placement Delta Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              The Placement Delta: Standard vs. Emergency
            </CardTitle>
            <CardDescription>Daily cost per child (USD) - Highlighting the fiscal leak in Tarrant and Collin.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fiscalData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                  <XAxis dataKey="county" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend />
                  <Bar dataKey="standardRate" fill="#94a3b8" name="Standard Rate" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="emergencyRate" fill="#3b82f6" name="Emergency/CWOP Rate" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* CWOP Cases Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              CWOP Volume: Children Without Placement
            </CardTitle>
            <CardDescription>Active cases requiring emergency placement (Region 3E)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fiscalData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                  <XAxis dataKey="county" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(249, 115, 22, 0.1)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Bar dataKey="cwopCases" fill="#f97316" name="CWOP Cases" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fiscal Leak Table */}
      <Card className="border-2 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-destructive" />
            Systemic Fiscal Leak Analysis
          </CardTitle>
          <CardDescription>Quantifying the "Hidden Administrative Overhead" and Monthly Economic Impact.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>County</TableHead>
                <TableHead>CWOP Cases</TableHead>
                <TableHead>Daily Delta</TableHead>
                <TableHead className="text-right">Est. Monthly Leak</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fiscalData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-bold flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    {row.county}
                  </TableCell>
                  <TableCell className="font-mono">{row.cwopCases}</TableCell>
                  <TableCell className="text-sm font-mono text-destructive">+${row.delta}/day</TableCell>
                  <TableCell className="text-right font-mono font-bold text-destructive">
                    ${row.monthlyLeak.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-destructive/5 border-destructive/20 border-2">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs">Statutory Breach</h3>
            </div>
            <p className="text-2xl font-mono font-bold">§2001.024</p>
            <p className="text-sm text-muted-foreground">Pervasive discrepancies in fiscal impact analysis across Region 3E.</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20 border-2">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs">Time-Limit Violations</h3>
            </div>
            <p className="text-2xl font-mono font-bold">Region 3E</p>
            <p className="text-sm text-muted-foreground">Systemic failure to meet reunification timelines, driving emergency costs.</p>
          </CardContent>
        </Card>
        <Card className="bg-muted border-2 border-dashed border-muted-foreground/30">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs">Off-Book Spending</h3>
            </div>
            <p className="text-2xl font-mono font-bold">Tarrant/Collin</p>
            <p className="text-sm text-muted-foreground">High-wealth masking of extreme fiscal deltas in emergency placements.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
