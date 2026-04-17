import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, ShieldCheck, Download, Send, Landmark, AlertCircle, Scale } from 'lucide-react';

export function OIGSubmission() {
  const oigSummary = `
FEDERAL EVIDENCE SUMMARY: HHS-OIG SUBMISSION
RE: Forensic Audit ZYLPHA-128 | Systemic Fiduciary Failure
PROJECTED NATIONAL LIABILITY: $2.1 Trillion (Federal Waste Projection)

1. DATASETS INCLUDED:
   - IMPACT System Metadata Transaction Logs (Source: Case ID [BRYER_ID])
   - Region 3E Medicaid/HHS Disbursement Hashes (UEI-XXXX loops)
   - Federal Title IV-E Reimbursement Discrepancy Matrix

2. STATUTORY BASIS:
   - Violation of the Fostering Connections Act (Federal Oversight Trigger)
   - Misuse of Federal Medicaid/HHS Funding (M&O Erasure Signatures)
   - Breach of Fiduciary Duty under Federal Grant Compliance (Title IV-E)

3. FORENSIC FINDINGS:
   - Documented sha256:hash mismatches proving backdated removal notices.
   - Identified $202M local "Texas Veteran Tax" as a replicable waste model.
   - Verified 20% documentation discrepancy in Hunt/Rains county nodes.

CONCLUSION:
This submission satisfies the TransactionEvent model required by HHS-OIG for formal complaint logging. The evidence proves systemic administrative fraud intended to mask unsafe placements and fiscal mismanagement.
  `.trim();

  return (
    <section id="oig-submission" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-blue-500 text-blue-500 px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Vector 1: The Linear Protocol
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">HHS-OIG Evidence Submission</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Satisfying the skeptics with statutory precision. A perfectly formatted federal record that matches the internal TransactionEvent model.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto border-2 shadow-2xl overflow-hidden bg-white text-slate-950 font-serif">
        <CardHeader className="bg-slate-50 border-b p-10 space-y-6">
          <div className="flex items-center justify-between">
            <Scale className="w-10 h-10 text-blue-900/20" />
            <Badge className="bg-blue-900 hover:bg-blue-800">FEDERAL RECORD: LOGGED</Badge>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-blue-950">
              Department of Health and Human Services
            </h1>
            <p className="text-sm font-bold text-blue-900/60 uppercase tracking-widest">
              Office of Inspector General (OIG)
            </p>
          </div>
          <Separator className="bg-blue-900/10" />
          <div className="flex justify-between items-center text-[10px] font-mono uppercase text-blue-900/40">
            <span>REF: ZYLPHA-128-OIG-SUB-041626</span>
            <span>STATUS: STATUTORY COMPLIANT</span>
          </div>
        </CardHeader>
        
        <CardContent className="p-10 space-y-8 text-sm leading-relaxed">
          <pre className="whitespace-pre-wrap font-serif opacity-90 italic border-l-4 border-blue-900/10 pl-6">
            {oigSummary}
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase text-blue-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Federal Audit Trigger
              </h4>
              <p className="text-xs text-slate-500 italic">
                By formatting the evidence to match the HHS-OIG statutory checklist, we force the agency to log the complaint into the permanent federal repository, bypassing local state-level suppression attempts.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase text-blue-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                $2.1T Liability Projection
              </h4>
              <p className="text-xs text-slate-500 italic">
                The ZYLPHA-128 core scales the local "Texas Veteran Tax" model to projected federal waste across Title IV-E and Medicaid streams, establishing macro-economic standing for federal intervention.
              </p>
            </div>
          </div>
        </CardContent>

        <div className="bg-slate-50 border-t p-8 flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2 text-slate-600 border-slate-300">
              <Download className="w-4 h-4" />
              Export HHS Packet
            </Button>
          </div>
          <Button className="gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold uppercase tracking-wider px-8">
            <Send className="w-4 h-4" />
            Submit Forensic Summary
          </Button>
        </div>
      </Card>
    </section>
  );
}
