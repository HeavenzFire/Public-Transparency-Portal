import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, AlertCircle, Home, TrendingUp } from 'lucide-react';

const attritionData = [
  { year: '2021', fatalities: 182, preventable: 45 },
  { year: '2022', fatalities: 194, preventable: 58 },
  { year: '2023', fatalities: 212, preventable: 72 },
  { year: '2024', fatalities: 205, preventable: 84 },
  { year: '2025', fatalities: 228, preventable: 102 },
];

const capacityData = [
  { month: 'Jan', cwop: 450, waitTime: 12 },
  { month: 'Feb', cwop: 480, waitTime: 14 },
  { month: 'Mar', cwop: 520, waitTime: 18 },
  { month: 'Apr', cwop: 610, waitTime: 22 },
  { month: 'May', cwop: 580, waitTime: 20 },
  { month: 'Jun', cwop: 650, waitTime: 25 },
];

export function CPSImpact() {
  return (
    <section id="cps-impact" className="py-16 space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="animate-pulse">Systemic Crisis</Badge>
          <span className="text-sm font-mono text-muted-foreground">ZYLPHA-16 CPS Audit Edition</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Quantifying Systemic Failure</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Translating abstract neglect into tangible metrics: The Human Attrition Ledger and the Capacity Crisis Index.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Human Attrition Ledger */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-destructive" />
              Human Attrition Ledger
            </CardTitle>
            <CardDescription>Estimated societal cost of preventable child fatalities (2021-2025)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attritionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Bar dataKey="fatalities" fill="#94a3b8" name="Total Fatalities" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="preventable" fill="#ef4444" name="Preventable (Audit Flagged)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <p className="text-xs font-bold uppercase text-muted-foreground">Legal Orphan Rate</p>
                <p className="text-2xl font-mono font-bold">14.2%</p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <p className="text-xs font-bold uppercase text-destructive">Preventable Rate</p>
                <p className="text-2xl font-mono font-bold text-destructive">44.7%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capacity Crisis Index */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              Capacity Crisis Index
            </CardTitle>
            <CardDescription>Tracking Children Without Placement (CWOP) and wait times</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={capacityData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Line type="monotone" dataKey="cwop" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} name="CWOP Cases" />
                  <Line type="monotone" dataKey="waitTime" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" name="Wait Time (Days)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase text-primary">Admin vs Service Ratio</p>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-mono font-bold">68:32</p>
              <p className="text-xs text-muted-foreground mt-1">For every $100, $68 is spent on administrative overhead.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
