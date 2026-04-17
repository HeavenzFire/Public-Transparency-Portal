import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Send, AlertCircle, FileText, Landmark } from 'lucide-react';

export function PolicyViolationNotice() {
  const noticeLanguage = `
NOTICE OF POLICY VIOLATION: CPS HANDBOOK §1200
TO: Regional Director, DFPS Region 03 (Arlington/Hunt/Rains)
CC: Office of Consumer Affairs (OCA) | CPS Internal Audit Division

This is a formal NOTICE OF POLICY VIOLATION, not a general complaint. Pursuant to CPS Handbook §1200, the Office of Consumer Affairs is REQUIRED to investigate documented violations of agency policy.

VIOLATION SUMMARY:
1. Breach of §261.3022 (Statutory Time-Limits for Safety Assessments)
2. Breach of §1200 (Failure to Maintain Accurate Case Records)
3. Documented Institutional Friction (Bounced Emails/Gatekeeping)

EVIDENCE ATTACHED:
- ZYLPHA-16 Forensic Gap Log (Timestamped)
- IMPACT System Metadata Demand (Ref: [BRYER_ID])
- OAG Open Records Complaint (Ref: R049827-040726)

DEMAND FOR ACTION:
A formal internal review must be initiated within 10 business days. Failure to respond will be documented as a further breach of fiduciary duty and submitted to the Texas Sunset Advisory Commission and the U.S. District Court Special Masters as evidence of systemic non-compliance.
  `.trim();

  return (
    <section id="policy-violation-notice" className="py-16 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="bg-orange-600 hover:bg-orange-700 animate-pulse border-none">Vector 2: [SUNSET STRIKE]</Badge>
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">CPS Handbook §1200 Strike</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Bypassing the Gatekeepers</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Target the Regional Director and the CPS Internal Audit Division directly. By framing the log as a Policy Violation Report, you trigger a mandatory internal review clock.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 shadow-xl overflow-hidden bg-white text-slate-950 font-serif">
          <CardHeader className="bg-slate-50 border-b p-8 space-y-4">
            <div className="flex items-center justify-between">
              <Landmark className="w-8 h-8 text-slate-400" />
              <Badge variant="outline" className="text-slate-500 border-slate-300">Official Notice</Badge>
            </div>
            <CardTitle className="text-2xl font-bold uppercase tracking-tight">
              Notice of Policy Violation
            </CardTitle>
            <CardDescription className="text-slate-500 font-sans">
              Pursuant to DFPS CPS Handbook Section 1200
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6 text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap font-serif opacity-90">
              {noticeLanguage}
            </pre>
          </CardContent>
          <div className="p-6 bg-slate-50 border-t flex justify-end gap-4">
            <Button variant="outline" className="text-slate-600 border-slate-300">
              <FileText className="w-4 h-4 mr-2" />
              Preview PDF
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800 gap-2">
              <Send className="w-4 h-4" />
              Send to Regional Director
            </Button>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                The "Administrative Bypass"
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Standard complaints are often buried in bureaucracy. A <strong>Notice of Policy Violation</strong> citing specific handbook sections (like §1200) creates a mandatory obligation for the agency to respond. It moves the issue from "customer service" to "regulatory compliance."
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                The 10-Day Clock
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Once received, the Regional Director has a statutory obligation to address the policy breach. Every day without a response is a documented failure of oversight.
              </p>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg border">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase">Current Status</p>
                  <p className="text-sm font-bold text-destructive">Awaiting Deployment</p>
                </div>
                <div className="h-10 w-10 rounded-full border-4 border-destructive/20 border-t-destructive animate-spin" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
