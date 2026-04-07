import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Download, FileDown, Share2, Mail, Newspaper } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mediaAssets = [
  {
    title: 'Full Forensic Dataset (CSV/XLSX)',
    description: 'The complete data behind the $202M impact analysis.',
    icon: FileDown,
    size: '4.8 MB',
  },
  {
    title: 'OAG Complaint Summary (PDF)',
    description: 'A one-page executive summary of the legal breach.',
    icon: Newspaper,
    size: '1.2 MB',
  },
  {
    title: 'High-Res Impact Charts (PNG/SVG)',
    description: 'Visualizations for use in investigative reporting.',
    icon: Download,
    size: '12.4 MB',
  },
];

export function MediaKit() {
  return (
    <section id="media-kit" className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Investigative Media Kit</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Everything journalists and investigative newsrooms need to report on the §300.701 regulatory breach.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-primary" />
              Data Launch Notification
            </CardTitle>
            <CardDescription>Copy-paste this template for investigative desk submissions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background border rounded-lg p-4 font-mono text-sm space-y-2 overflow-x-auto">
              <p className="text-primary font-bold">To: Investigative Desk</p>
              <p className="text-primary font-bold">Subject: DATA RELEASE: Forensic Audit of §300.701 and the $202M Veteran Tax</p>
              <Separator className="my-2" />
              <p>The full dataset, including the fee-setting logic gaps and the documented economic harm to veteran-owned micro-businesses, has been moved to a public-facing transparency portal.</p>
              <p className="text-primary underline">Portal Link: [Your GitHub Pages URL]</p>
              <p>Key Finding: 3,233% fee increase implemented without the required fiscal impact analysis.</p>
            </div>
            <Button className="w-full" variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Copy Template
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mediaAssets.map((asset, index) => (
            <Card key={index} className="border-2 group hover:border-primary transition-all">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <asset.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">{asset.title}</h3>
                    <p className="text-sm text-muted-foreground">{asset.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{asset.size}</Badge>
                  <Button size="icon" variant="ghost">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
