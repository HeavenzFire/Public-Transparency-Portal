import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

const data = [
  { name: 'Pre-§300.701', value: 6.2, color: '#10b981' },
  { name: 'Post-§300.701', value: 202.4, color: '#ef4444' },
];

export function EconomicImpact() {
  return (
    <section id="economic-impact" className="py-16 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="animate-pulse">Active Breach</Badge>
          <span className="text-sm font-mono text-muted-foreground">TDLR Ref: R049827-040726</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">The $202M Ledger</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          An interactive visualization of the direct economic harm to veteran-owned businesses caused by the 3,233% fee increase under §300.701.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-2">
          <CardHeader>
            <CardTitle>Economic Impact Comparison (Millions USD)</CardTitle>
            <CardDescription>Direct cost burden before and after regulatory changes</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  className="text-sm font-medium"
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  className="text-sm font-mono"
                  tickFormatter={(value) => `$${value}M`}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-3 shadow-xl">
                          <p className="font-bold">{payload[0].payload.name}</p>
                          <p className="text-2xl font-mono text-primary">
                            ${payload[0].value}M
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-destructive/5 border border-destructive/20 space-y-2"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-destructive">Total Impact</h3>
            <p className="text-5xl font-mono font-bold tracking-tighter">$202.4M</p>
            <p className="text-sm text-muted-foreground">Aggregate loss across 1,240 veteran-owned entities.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-primary/5 border border-primary/20 space-y-2"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Fee Increase</h3>
            <p className="text-5xl font-mono font-bold tracking-tighter">3,233%</p>
            <p className="text-sm text-muted-foreground">The logic for this increase remains undisclosed by TDLR.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-muted border space-y-2"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider">Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="font-medium">Non-Compliant</p>
            </div>
            <p className="text-sm text-muted-foreground">OAG Complaint Receipt: #C-2026-0407-1</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
