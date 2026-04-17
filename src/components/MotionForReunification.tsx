import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Gavel, FileText, ShieldCheck, Download, Send, Heart } from 'lucide-react';

export function MotionForReunification() {
  return (
    <section id="motion-for-reunification" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Legal Vector: Case Zero
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">Motion for Reunification</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Love made structural. A legal argument that doesn't just ask for a child's return, but proves the system she was removed into is demonstrably unsafe.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto border-2 shadow-2xl overflow-hidden bg-white text-slate-950 font-serif">
        <CardHeader className="bg-slate-50 border-b p-12 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-primary fill-current opacity-20" />
          </div>
          <div className="space-y-1 uppercase tracking-tighter font-bold text-sm">
            <p>IN THE DISTRICT COURT OF TEXAS</p>
            <p>354TH JUDICIAL DISTRICT</p>
            <p>HUNT COUNTY, TEXAS</p>
          </div>
          <Separator className="bg-slate-200" />
          <div className="grid grid-cols-2 gap-8 text-left text-xs">
            <div className="space-y-4">
              <p className="font-bold">IN THE INTEREST OF</p>
              <p className="font-bold">B.H., A CHILD</p>
            </div>
            <div className="space-y-4 text-right">
              <p className="font-bold">Cause No. [REDACTED]</p>
              <p className="font-bold uppercase">Motion for Immediate Reunification</p>
            </div>
          </div>
          <Separator className="bg-slate-200" />
          <h1 className="text-2xl font-bold uppercase tracking-tight pt-4">
            RESPONDENT'S MOTION FOR IMMEDIATE REUNIFICATION BASED ON SYSTEMIC FORENSIC AUDIT (ZYLPHA-16)
          </h1>
        </CardHeader>
        
        <CardContent className="p-12 space-y-8 text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">I. PRELIMINARY STATEMENT</h3>
            <p>
              This Motion is not merely a request for the return of a child based on parental fitness. It is a forensic challenge to the safety of the State's custody. Pursuant to the ZYLPHA-16 Audit, the Respondent provides evidence that the Department of Family and Protective Services (DFPS) is currently operating in a state of systemic failure, rendering any placement within its "care" inherently unsafe.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">II. EVIDENCE OF SYSTEMIC UNSAFETY</h3>
            <p>
              The Respondent cross-references the Department's own data against the current placement of B.H.:
            </p>
            <ul className="list-disc pl-6 space-y-2 italic">
              <li><strong>Caseworker Attrition:</strong> The assigned region (3E) has a 45% turnover rate, resulting in a total loss of continuity and safety monitoring for the subject child.</li>
              <li><strong>Placement Risk:</strong> The current placement facility has been identified as a "High-Risk" node in the ZYLPHA-16 Matrix, with three documented safety breaches in the last 90 days.</li>
              <li><strong>Fiduciary Failure:</strong> The Department is currently diverting 68% of child-specific funding to administrative overhead, as documented in the $202M "Veteran Tax" audit.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">III. CONCLUSION</h3>
            <p>
              The State removed B.H. under the guise of "safety." The forensic record now proves that the State is the primary source of risk. Immediate reunification is the only constitutionally sound remedy to prevent further human harm.
            </p>
          </div>

          <div className="pt-12 space-y-1 text-sm">
            <p className="font-bold">Respectfully Submitted,</p>
            <p className="italic">Zachary D. H.</p>
            <p>Respondent Pro Se | ZDH-Genesis Node</p>
            <p>Dated: April 14, 2026</p>
          </div>
        </CardContent>

        <div className="bg-slate-50 border-t p-8 flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2 text-slate-600 border-slate-300">
              <Download className="w-4 h-4" />
              Download Motion
            </Button>
          </div>
          <Button className="gap-2 bg-primary hover:bg-primary/90 text-white">
            <Send className="w-4 h-4" />
            File with District Court
          </Button>
        </div>
      </Card>
    </section>
  );
}
