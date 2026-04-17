import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, AlertCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export function CountdownTimer() {
  const targetDate = new Date('2026-04-21T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section id="accountability-clock" className="py-12">
      <Card className="border-4 border-destructive bg-destructive/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldAlert className="w-24 h-24 text-destructive" />
        </div>
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <Badge variant="destructive" className="animate-pulse px-4 py-1 text-sm uppercase tracking-widest font-bold">
              Statutory Clock Running
            </Badge>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-black tracking-tighter uppercase">OAG Determination Deadline</CardTitle>
          <CardDescription className="text-destructive font-bold">
            Ref: R049827-040726 | Agency Silence is a Public Liability
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8">
          <div className="grid grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { label: 'Days', value: days },
              { label: 'Hours', value: hours },
              { label: 'Min', value: minutes },
              { label: 'Sec', value: seconds },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-7xl font-mono font-black tracking-tighter text-destructive bg-background border-2 border-destructive/20 rounded-xl p-4 min-w-[80px] md:min-w-[120px] shadow-xl">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs uppercase font-bold mt-2 text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm font-mono bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/20">
            <Timer className="w-4 h-4" />
            <span>Deadline: April 21, 2026 at 23:59:59 CST</span>
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-xl leading-relaxed">
            The Office of the Attorney General has until this deadline to legally compel TDLR/DSHS to produce the "Emergency Justification Memo" regarding the 3,233% fee increase.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
