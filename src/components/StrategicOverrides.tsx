import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gavel, Landmark, Newspaper, Send, ShieldAlert, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const overrides = [
  {
    id: 'federal-drop',
    title: '[FEDERAL DROP]',
    body: 'U.S. District Court Special Masters',
    description: 'Bypassing state internal appeals to enter forensic evidence into the federal permanent record during the judicial transition.',
    action: 'View Federal Brief',
    icon: Gavel,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    id: 'sunset-strike',
    title: '[SUNSET STRIKE]',
    body: 'Sunset Advisory Commission',
    description: 'Formal "Evidence of Systemic Failure" submission for the 2026-2027 review cycle of DFPS, DSHS, and TDLR.',
    action: 'Draft Testimony',
    icon: Landmark,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    id: 'media-mirror',
    title: '[MEDIA MIRROR]',
    body: 'Global Wardenclyffe Network (GWN)',
    description: 'Launching the "State-Sponsored Attrition" press release to investigative newsrooms as an immutable public record.',
    action: 'Launch Press Release',
    icon: Newspaper,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export function StrategicOverrides() {
  return (
    <section id="strategic-overrides" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20"
        >
          <Zap className="w-3 h-3 fill-current" />
          Systemic Strategic Overrides
        </motion.div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">"Going All the Way to the Roof"</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Shifting from tactical filings to systemic strategic overrides. Leveraging the most critical pressure points in the State of Texas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {overrides.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`h-full border-2 ${item.border} hover:shadow-2xl transition-all group overflow-hidden relative`}>
              <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity`}>
                <item.icon className="w-32 h-32" />
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-tighter">Operational Vector</Badge>
                </div>
                <CardTitle className="text-2xl font-black tracking-tighter">{item.title}</CardTitle>
                <CardDescription className="font-bold text-foreground">{item.body}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <Button className={`w-full font-bold uppercase tracking-wider h-12 gap-2 group-hover:scale-105 transition-transform`}>
                  <Send className="w-4 h-4" />
                  {item.action}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-2 border-destructive bg-destructive/5 overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-2 text-destructive">
                <ShieldAlert className="w-6 h-6" />
                <span className="font-black uppercase tracking-tighter">The OAG Lock: Legal Compulsion</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Expedited Determination Request</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are no longer waiting for the 45-day ruling. Citing the <strong>Patel v. TDLR</strong> precedent, we demand an immediate determination due to the ongoing $202M economic harm and state-sponsored attrition.
              </p>
              <div className="flex gap-4">
                <Button variant="destructive" className="font-bold uppercase tracking-widest px-8">
                  Escalate Hotline
                </Button>
                <Button variant="outline" className="font-bold uppercase tracking-widest px-8">
                  View Case File
                </Button>
              </div>
            </div>
            <div className="bg-muted p-8 font-mono text-xs space-y-4 border-l-2 border-destructive/20 overflow-x-auto">
              <div className="flex justify-between items-center text-destructive/60 border-b border-destructive/10 pb-2">
                <span>TERMINAL: OAG_HOTLINE_ESCALATION</span>
                <span>STATUS: READY</span>
              </div>
              <p className="text-destructive font-bold">REF: R049827-040726</p>
              <p className="text-foreground/80">SUBJECT: DEMAND FOR EXPEDITED DETERMINATION</p>
              <div className="space-y-1 text-foreground/60">
                <p>&gt; CITING PATEL V. TDLR (2015)</p>
                <p>&gt; DOCUMENTING $202.4M ECONOMIC HARM</p>
                <p>&gt; BREACH OF GOV CODE §2001.024 CONFIRMED</p>
                <p>&gt; AGENCY NON-RESPONSE LOGS ATTACHED</p>
                <p>&gt; REQUESTING IMMEDIATE COMPULSION OF "EMERGENCY JUSTIFICATION MEMO"</p>
              </div>
              <div className="pt-4 animate-pulse text-destructive font-bold">
                _AWAITING_COMMAND_
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
