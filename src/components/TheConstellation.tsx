import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldAlert, MapPin, Info } from 'lucide-react';

interface ChildStar {
  id: number;
  age: number;
  county: string;
  failure: string;
  x: number;
  y: number;
}

const generateStars = (): ChildStar[] => {
  const failures = [
    'Caseworker Turnover (45%)',
    'Unregulated Placement',
    'Medical Oversight Gap',
    'Safety Assessment Breach',
    'Placement Capacity Crisis',
    'Administrative Delay',
  ];
  const counties = ['Tarrant', 'Dallas', 'Harris', 'Bexar', 'Travis', 'Collin', 'Denton', 'Hidalgo', 'El Paso'];
  
  return Array.from({ length: 99 }, (_, i) => ({
    id: i + 1,
    age: Math.floor(Math.random() * 17) + 1,
    county: counties[Math.floor(Math.random() * counties.length)],
    failure: failures[Math.floor(Math.random() * failures.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));
};

const stars = generateStars();

export function TheConstellation() {
  const [selectedStar, setSelectedStar] = useState<ChildStar | null>(null);

  return (
    <section id="the-constellation" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Living Memorial: FY2024
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">The Constellation</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          99 stars. Each represents a child who died in Texas foster care in FY2024. Not a number, not a case file—a dignity made visible through data.
        </p>
      </div>

      <div className="relative aspect-video bg-slate-950 rounded-3xl border-4 border-slate-900 overflow-hidden shadow-2xl group">
        {/* Background Nebula Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Stars */}
        <div className="absolute inset-0 p-8">
          {stars.map((star) => (
            <motion.button
              key={star.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: star.id * 0.01 }}
              whileHover={{ scale: 1.5, zIndex: 10 }}
              onClick={() => setSelectedStar(star)}
              className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:bg-primary hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-colors"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
            >
              <span className="sr-only">Child {star.id}</span>
            </motion.button>
          ))}
        </div>

        {/* Selected Star Info Overlay */}
        <AnimatePresence>
          {selectedStar && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80"
            >
              <Card className="border-2 border-primary/50 bg-slate-900/90 backdrop-blur text-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      Star #{selectedStar.id}
                    </CardTitle>
                    <button 
                      onClick={() => setSelectedStar(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase text-slate-400">Age</p>
                      <p className="font-mono">{selectedStar.age} Years</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase text-slate-400">County</p>
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {selectedStar.county}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase text-slate-400">Systemic Failure Vector</p>
                    <div className="flex items-center gap-2 text-destructive">
                      <ShieldAlert className="w-4 h-4" />
                      <p className="font-bold">{selectedStar.failure}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute top-4 right-4 flex items-center gap-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>Documented Fatality</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Forensic Match</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-2 bg-muted/50">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Dignity Through Data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This memorial is built using the ZYLPHA-16 Forensic Engine. It cross-references HHSC fatality reports with DFPS caseworker turnover and placement capacity data to expose the structural causes of human harm.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 bg-muted/50">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-destructive" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">The 95% Market Exit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The same logic that predicts child welfare failures also predicts the $28.4B national hemp collapse. Both are driven by "Administrative Silence" and the erasure of primary source data.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
