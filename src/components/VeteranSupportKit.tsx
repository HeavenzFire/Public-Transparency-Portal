import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ShieldCheck, Scale, Mail, Copy } from 'lucide-react';

const templates = [
  {
    title: 'Know Your Rights: Veteran Edition',
    description: 'A comprehensive guide to constitutional protections against oppressive regulatory fees.',
    icon: ShieldCheck,
    type: 'Legal Guide',
  },
  {
    title: 'OAG Complaint Template (Ref: R049827)',
    description: 'Pre-formatted complaint for the Texas Attorney General regarding §300.701 breaches.',
    icon: Scale,
    type: 'Complaint',
  },
  {
    title: 'Emergency Justification Demand',
    description: 'Formal demand letter for the production of the "Emergency Justification Memo."',
    icon: Mail,
    type: 'Demand Letter',
  },
];

export function VeteranSupportKit() {
  return (
    <section id="veteran-support-kit" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Veteran Support Kit</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Deploying metadata for sovereign defense. Access the "Know Your Rights" and OAG Complaint templates to join the audit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-all group">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <template.icon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <Badge variant="secondary">{template.type}</Badge>
              </div>
              <CardTitle className="text-xl">{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full gap-2" variant="default">
                <Download className="w-4 h-4" />
                Download Template
              </Button>
              <Button className="w-full gap-2" variant="outline">
                <Copy className="w-4 h-4" />
                Copy to Clipboard
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-2 border-primary/20">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Sovereign Audit Starter Kit</h3>
            <p className="text-muted-foreground">
              Bypass the email bounces and push the audit to your own local node. This kit includes the tools to find your own "missing" records and document institutional friction.
            </p>
            <Button size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              Initialize Starter Kit
            </Button>
          </div>
          <div className="w-full md:w-64 aspect-square bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border-4 border-primary/40 rounded-full animate-reverse-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
