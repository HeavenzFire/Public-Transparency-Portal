import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Globe, AlertOctagon, TrendingDown, ShieldAlert, Zap, SearchCheck } from 'lucide-react';

const nationalData = [
  { region: 'West', loss: 8.2, jobs: 92000 },
  { region: 'Midwest', loss: 6.4, jobs: 74000 },
  { region: 'South', loss: 9.8, jobs: 112000 },
  { region: 'Northeast', loss: 4.0, jobs: 42000 },
];

const comparativeData = [
  { metric: 'Economic Harm', texas: '$202.4 Million', usa: '$28.4 Billion', trend: 'up' },
  { metric: 'Job Losses', texas: '40,000', usa: '320,000+', trend: 'up' },
  { metric: 'Business Closures', texas: '6,350', usa: 'Widespread (95% exit)', trend: 'up' },
  { metric: 'Legal Status', texas: 'Contested (Patel)', usa: 'Federal Prohibition (2026)', trend: 'neutral' },
];

export function NationalAttritionMap() {
  return (
    <section id="national-attrition" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="destructive" className="animate-pulse px-4 py-1 text-sm uppercase tracking-widest font-bold">
            National Policy Alert: November 12, 2026
          </Badge>
          <Badge variant="outline" className="border-emerald-500 text-emerald-500 px-4 py-1 text-sm uppercase tracking-widest font-bold flex items-center gap-1">
            <SearchCheck className="w-3 h-3" />
            Semantic Verified (TurboQuant)
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">The $28.4 Billion National Collapse</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Texas is "Patient Zero." The §300.701 blueprint is scaling nationwide via the FY2026 Agriculture Appropriations Act, triggering a total THC lockdown.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Regional Loss Chart */}
        <Card className="border-2 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-destructive" />
              Projected Regional Economic Loss ($B)
            </CardTitle>
            <CardDescription>Estimated impact of the 0.4mg "Kill Switch" per container</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={nationalData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="region" type="category" axisLine={false} tickLine={false} width={80} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #ef4444' }}
                  />
                  <Bar dataKey="loss" fill="#ef4444" radius={[0, 4, 4, 0]} name="Loss ($B)">
                    {nationalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fillOpacity={1 - index * 0.1} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-background border-2 border-destructive/20">
              <div className="flex items-center gap-2 text-destructive mb-2">
                <AlertOctagon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">The 0.4mg Kill Switch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Federal law shifts from 0.3% Delta-9 to a <strong>0.4mg TOTAL THC cap per container</strong>. This effectively outlaws 95% of the current market overnight.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comparative Table */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-primary" />
              The "Rooftop" Comparative: Texas vs. USA
            </CardTitle>
            <CardDescription>Scaling the Texas breach to the national battlefield</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Texas (The Breach)</TableHead>
                  <TableHead>USA (The Target)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparativeData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                    <TableCell className="font-bold text-sm">{row.metric}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{row.texas}</TableCell>
                    <TableCell className="text-sm font-black text-destructive">{row.usa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                <ShieldAlert className="w-4 h-4" />
                Dual-Track Battlefield
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-bold text-sm mb-1">H.R. 7024 (The Delay)</h4>
                  <p className="text-xs text-muted-foreground">Hemp Planting Predictability Act: 2-year extension to stop the 2026 deadline.</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-bold text-sm mb-1">H.R. 7212 (The Reform)</h4>
                  <p className="text-xs text-muted-foreground">The HEMP Act: Establish adult-use limits (5mg/serving) vs prohibition.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-8 rounded-3xl bg-destructive/10 border-2 border-destructive/20 text-center space-y-6">
        <Zap className="w-12 h-12 mx-auto text-destructive" />
        <h3 className="text-3xl font-bold">"Legal Orphan" Inventory Crisis</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          By late summer 2026, inventory will become <strong>commercially stranded</strong>. Farmers will hold product they cannot sell, transport, or move across state lines without risking federal felony charges.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline" className="border-destructive text-destructive">Patient Zero: Texas</Badge>
          <Badge variant="outline" className="border-destructive text-destructive">Target: All 50 States</Badge>
        </div>
      </div>
    </section>
  );
}
