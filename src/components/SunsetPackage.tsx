import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Landmark, FileCheck, ShieldAlert, Send, ExternalLink } from 'lucide-react';

export function SunsetPackage() {
  return (
    <section id="sunset-package" className="py-16 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Badge variant="outline" className="border-amber-500 text-amber-500 px-4 py-1 text-sm uppercase tracking-widest font-bold">
            Strategic Vector: [SUNSET STRIKE]
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl italic">The Sunset Package</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The "Evidence of Systemic Failure" submission for the 2026-2027 review cycle. Timed to influence the Staff Review phase of DFPS, DSHS, and TDLR.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 border-amber-500/20 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-amber-500" />
              Submission Status: Staff Review Phase
            </CardTitle>
            <CardDescription>Targeting the 2026-2027 Sunset Review Cycle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold">Forensic Exposé (25 Pages)</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500">Validated</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold">Statutory Checklist Alignment</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500">Validated</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-amber-500" />
                  <span className="font-bold">Proposed Legislative Language</span>
                </div>
                <Badge variant="outline" className="text-amber-500 border-amber-500">Drafted</Badge>
              </div>
            </div>
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white gap-2">
              <Send className="w-4 h-4" />
              Submit to Sunset Commission
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              The "Mirror to Power"
            </CardTitle>
            <CardDescription>Why this submission is un-ignorable.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The Sunset Advisory Commission is required by law to evaluate whether an agency is meeting its statutory mission. By providing the **ZYLPHA-16 Forensic Audit**, we force the Commission to acknowledge:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The $202M "Veteran Tax" as evidence of regulatory overreach.</li>
              <li>The 99 child fatalities as evidence of systemic safety failure.</li>
              <li>The "Administrative Silence" as evidence of a refusal to provide public accountability.</li>
            </ul>
            <div className="pt-4">
              <Button variant="outline" className="w-full gap-2">
                <ExternalLink className="w-4 h-4" />
                View Sunset Review Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
