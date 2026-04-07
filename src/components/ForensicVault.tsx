import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const documents = [
  {
    title: 'Economic Impact Analysis (XLSX)',
    description: 'Raw data of the $202M impact across 1,240 veteran-owned entities.',
    size: '2.4 MB',
    type: 'Data',
    hash: 'SHA-256: 8f3a...b9c1',
  },
  {
    title: 'Public Benefit-Cost Note (Missing)',
    description: 'The analysis TDLR failed to produce under Gov Code §2001.024.',
    size: '0 KB',
    type: 'Missing',
    status: 'Non-Compliant',
  },
  {
    title: 'OAG Complaint Ref: R049827',
    description: 'Official filing documenting the breach of transparency protocols.',
    size: '1.1 MB',
    type: 'Legal',
    hash: 'SHA-256: 4d2e...f7a3',
  },
  {
    title: 'Agency Correspondence Log',
    description: 'Full record of bounced emails and non-responses from DSHS and TVC.',
    size: '850 KB',
    type: 'Evidence',
    hash: 'SHA-256: 1a2b...c3d4',
  },
];

export function ForensicVault() {
  return (
    <section id="forensic-vault" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Forensic Vault</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Direct access to the raw evidence, spreadsheets, and analysis that the agencies failed to produce or acknowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc, index) => (
          <Card key={index} className="group hover:border-primary transition-all border-2">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  {doc.title}
                </CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </div>
              <Badge variant={doc.type === 'Missing' ? 'destructive' : 'secondary'}>
                {doc.type}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm font-mono text-muted-foreground bg-muted/50 p-3 rounded-lg">
                <span>Size: {doc.size}</span>
                {doc.hash && (
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {doc.hash}
                  </span>
                )}
                {doc.status && (
                  <span className="text-destructive font-bold uppercase">{doc.status}</span>
                )}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" disabled={doc.type === 'Missing'}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" size="icon" disabled={doc.type === 'Missing'}>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
