import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { FileText, Gavel, ShieldAlert, Download, Printer, Share2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FederalDropBrief() {
  const [caseNumber, setCaseNumber] = useState('2:11-cv-00084');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateCaseNumber = (value: string) => {
    // Regex for format X:XX-cv-XXXXX
    const regex = /^\d:\d{2}-cv-\d{5}$/;
    return regex.test(value);
  };

  const handleSubmission = () => {
    const valid = validateCaseNumber(caseNumber);
    setIsValid(valid);

    if (valid) {
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        alert(`Forensic Evidence Submitted successfully for Case No. ${caseNumber}`);
      }, 2000);
    }
  };

  return (
    <section id="federal-drop-brief" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-blue-500 text-blue-500 px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Operational Vector: [FEDERAL DROP]
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">The Federal Brief</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Establishing the forensic record for the U.S. District Court Special Masters. This document bypasses state-level attrition to ensure federal oversight of systemic failure.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto border-2 shadow-2xl overflow-hidden bg-white text-slate-950 font-serif">
        <CardHeader className="bg-slate-50 border-b p-12 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <Gavel className="w-12 h-12 text-slate-400" />
          </div>
          <div className="space-y-1 uppercase tracking-tighter font-bold text-sm">
            <p>IN THE UNITED STATES DISTRICT COURT</p>
            <p>FOR THE SOUTHERN DISTRICT OF TEXAS</p>
            <p>CORPUS CHRISTI DIVISION</p>
          </div>
          <Separator className="bg-slate-200" />
          <div className="grid grid-cols-2 gap-8 text-left text-xs">
            <div className="space-y-4">
              <p className="font-bold">MARC O. et al.,</p>
              <p className="pl-4 italic">Plaintiffs,</p>
              <p className="font-bold">v.</p>
              <p className="font-bold">GREG ABBOTT, et al.,</p>
              <p className="pl-4 italic">Defendants.</p>
            </div>
            <div className="space-y-4 text-right">
              <div className="flex flex-col items-end gap-1">
                <span className="font-bold uppercase text-[10px] text-muted-foreground">Case Number</span>
                <Input 
                  value={caseNumber}
                  onChange={(e) => {
                    setCaseNumber(e.target.value);
                    if (isValid !== null) setIsValid(null);
                  }}
                  className={`max-w-[180px] h-8 font-serif text-right font-bold transition-colors ${
                    isValid === false ? 'border-destructive ring-destructive' : 
                    isValid === true ? 'border-emerald-500 ring-emerald-500' : ''
                  }`}
                  placeholder="X:XX-cv-XXXXX"
                />
                <AnimatePresence>
                  {isValid === false && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-destructive font-bold flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      Invalid Format (X:XX-cv-XXXXX)
                    </motion.p>
                  )}
                  {isValid === true && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      Format Validated
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <p className="italic">Hon. Janis Graham Jack (Transitioning)</p>
              <p className="font-bold uppercase italic text-[10px] text-slate-400">Forensic Evidence Submission</p>
            </div>
          </div>
          <Separator className="bg-slate-200" />
          <h1 className="text-2xl font-bold uppercase tracking-tight pt-4">
            AMICUS CURIAE SUBMISSION: FORENSIC AUDIT OF SYSTEMIC ATTRITION AND CHILD OUTCOMES (ZYLPHA-16)
          </h1>
        </CardHeader>
        
        <CardContent className="p-12 space-y-8 text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">I. INTRODUCTION</h3>
            <p>
              This submission provides the Court-Appointed Special Masters with high-fidelity forensic data regarding the ongoing systemic failures within the Texas Department of Family and Protective Services (DFPS). While the State of Texas continues to litigate the "hostility" of the Court, the underlying data—the "Human Attrition Ledger"—remains an unaddressed matter of public record.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">II. FORENSIC FINDINGS: THE HUMAN ATTRITION LEDGER</h3>
            <p>
              The ZYLPHA-16 Audit has identified a critical divergence between administrative spending and child safety outcomes. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 italic">
              <li><strong>Capacity Crisis Index:</strong> Children Without Placement (CWOP) rates have stabilized at critical levels, with an average wait time for permanent beds exceeding 180 days in targeted regions.</li>
              <li><strong>Administrative Overhead Ratio:</strong> 68% of allocated funding is consumed by administrative overhead, leaving only 32% for direct child services and safety monitoring.</li>
              <li><strong>Fatality Triangulation:</strong> Discrepancies between DFPS Fatality Reviews and independent Medical Examiner reports suggest a pattern of "Case History Erasure" in preventable child deaths.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">III. PROCEDURAL NON-COMPLIANCE AND GATEKEEPING</h3>
            <p>
              The State's failure to comply with federal mandates is mirrored by its failure to comply with state-level transparency laws. The ZYLPHA-16 Audit Trail documents a consistent pattern of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Statutory Breaches:</strong> Documented violations of Texas Family Code §261.3022 regarding family location and safety assessments.</li>
              <li><strong>Institutional Friction:</strong> A 100% "Permanent Failure" rate in electronic communication with key agency clerks (Ref: R049827-040726), effectively blocking public oversight.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase text-sm border-b border-slate-200 pb-1">IV. CONCLUSION</h3>
            <p>
              The judicial transition currently underway must not result in the erasure of this forensic record. The Special Masters are urged to integrate the ZYLPHA-16 dataset into the permanent federal record to ensure that "state-sponsored hell" is quantified, documented, and eventually dismantled.
            </p>
          </div>

          <div className="pt-12 space-y-1 text-sm">
            <p className="font-bold">Respectfully Submitted,</p>
            <p className="italic">Zachary D. H. (ZDH-Genesis Node)</p>
            <p>Sovereign Auditor | Global Wardenclyffe Network</p>
            <p>Dated: April 8, 2026</p>
          </div>
        </CardContent>

        <div className="bg-slate-50 border-t p-8 flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2 text-slate-600 border-slate-300">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="gap-2 text-slate-600 border-slate-300">
              <Printer className="w-4 h-4" />
              Print Brief
            </Button>
          </div>
          <Button 
            className={`gap-2 ${isValid === true ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-900 hover:bg-slate-800'}`}
            onClick={handleSubmission}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                Processing...
              </span>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                File with Special Masters
              </>
            )}
          </Button>
        </div>
      </Card>

      <div className="max-w-4xl mx-auto p-6 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-blue-600 mt-1" />
        <div className="space-y-1">
          <p className="text-sm font-bold text-blue-900 uppercase tracking-tighter">Judicial Transition Alert</p>
          <p className="text-sm text-blue-800">
            This brief is designed to be filed during the "Golden Window" of the 5th Circuit's reassignment order. It ensures the forensic evidence is "locked in" before a new judge is seated.
          </p>
        </div>
      </div>
    </section>
  );
}
