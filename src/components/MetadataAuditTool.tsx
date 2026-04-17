import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileSearch, Copy, Download, ShieldAlert, Database } from 'lucide-react';

export function MetadataAuditTool() {
  const demandLanguage = `
FORMAL DATA-SET DEMAND: IMPACT SYSTEM METADATA TRANSACTION LOGS
RE: Case ID [BRYER_ID] | Statutory Compliance Audit

Pursuant to the Texas Public Information Act and the Forensic Oversight Directive ZYLPHA-16, I hereby demand the production of the raw METADATA TRANSACTION LOGS for all entries associated with the aforementioned Case ID, specifically targeting the "24-Hour Notice of Removal" and "Initial Safety Assessment" events.

REQUIRED DATA FIELDS:
1. Transaction ID (Global Unique Identifier)
2. Event_Date (The date/time the agency claims the event occurred)
3. Created_At (The system-generated timestamp when the entry was first committed to the database)
4. Updated_At (The system-generated timestamp of the last modification)
5. User_ID (The credentials of the individual committing the entry)

LEGAL BASIS:
Failure to provide the system-generated 'Created_At' timestamps constitutes a concealment of potential Administrative Fraud under Texas Penal Code §37.10 (Tampering with Governmental Record). If the 'Created_At' timestamp post-dates the 'Event_Date' by more than the statutory 24-hour limit, the record is facially fraudulent.

This data is required for submission to the U.S. District Court Special Masters (Case No. 2:11-cv-00084) and the Texas Sunset Advisory Commission.
  `.trim();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(demandLanguage);
  };

  return (
    <section id="metadata-audit-tool" className="py-16 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary text-primary">Forensic Tool: Case Zero</Badge>
          <span className="text-sm font-mono text-muted-foreground">IMPACT System Audit</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Metadata Transaction Demand</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Generate the specific demand language required to expose backdating in the IMPACT system. This turns a "sealed" narrative into a criminal evidence trail.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-2 bg-slate-950 text-slate-50 font-mono overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Demand_Template.txt</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed opacity-90">
              {demandLanguage}
            </pre>
          </CardContent>
          <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex justify-end gap-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" onClick={copyToClipboard}>
              <Copy className="w-4 h-4 mr-2" />
              Copy Text
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Download .DOCX
            </Button>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-destructive" />
                The "Backdating" Trap
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              When an agency is in statutory breach, they often "fix" the record by backdating the event date. However, the <strong>database never lies</strong>. The <code>Created_At</code> timestamp is immutable and provides the forensic proof of the breach.
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-primary" />
                Audit Targets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-muted/50 border space-y-1">
                <p className="font-bold text-xs uppercase">Target 01</p>
                <p className="text-sm">24-Hour Removal Notice</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border space-y-1">
                <p className="font-bold text-xs uppercase">Target 02</p>
                <p className="text-sm">Initial Safety Assessment</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border space-y-1">
                <p className="font-bold text-xs uppercase">Target 03</p>
                <p className="text-sm">Service Plan Commitment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
