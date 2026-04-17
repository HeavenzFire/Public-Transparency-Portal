import { EconomicImpact } from './components/EconomicImpact';
import { AuditTrail } from './components/AuditTrail';
import { ForensicVault } from './components/ForensicVault';
import { LegalPrecedent } from './components/LegalPrecedent';
import { MediaKit } from './components/MediaKit';
import { CPSImpact } from './components/CPSImpact';
import { FatalityAudit } from './components/FatalityAudit';
import { ProceduralCompliance } from './components/ProceduralCompliance';
import { EscalationPlan } from './components/EscalationPlan';
import { StrategicOverrides } from './components/StrategicOverrides';
import { FederalDropBrief } from './components/FederalDropBrief';
import { StatutoryCollisionMatrix } from './components/StatutoryCollisionMatrix';
import { MetadataAuditTool } from './components/MetadataAuditTool';
import { PolicyViolationNotice } from './components/PolicyViolationNotice';
import { CountyFiscalAudit } from './components/CountyFiscalAudit';
import { OIGSubmission } from './components/OIGSubmission';
import { NationalAttritionMap } from './components/NationalAttritionMap';
import { CountdownTimer } from './components/CountdownTimer';
import { SystemicAttritionLogs } from './components/SystemicAttritionLogs';
import { VeteranSupportKit } from './components/VeteranSupportKit';
import { SystemStatus } from './components/SystemStatus';
import { TheConstellation } from './components/TheConstellation';
import { MotionForReunification } from './components/MotionForReunification';
import { SunsetPackage } from './components/SunsetPackage';
import { HyperDiagnostics } from './components/HyperDiagnostics';
import { ForensicExtraction } from './components/ForensicExtraction';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ShieldAlert, FileText, BarChart3, Scale, Mail, Users, AlertTriangle, Zap, Globe, Cpu, Star, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-primary" />
            <span className="font-bold tracking-tight text-xl">Transparency Portal</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#economic-impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#audit-trail" className="hover:text-primary transition-colors">Audit</a>
            <a href="#forensic-vault" className="hover:text-primary transition-colors">Vault</a>
            <a href="#legal-precedent" className="hover:text-primary transition-colors">Legal</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <Github className="w-4 h-4" />
              Fork Repo
            </Button>
            <Button size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 space-y-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-widest border border-destructive/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            Active Forensic Audit: ZYLPHA-128 (128:1 Core)
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight"
          >
            Systemic <span className="text-primary italic">Strategic Overrides</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Leveraging the Federal Courtroom, the Sunset Review, and the National Ledger. Texas is Patient Zero for a $28.4 Billion national economic breach.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg gap-2">
              <BarChart3 className="w-5 h-5" />
              Explore the Data
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2">
              <FileText className="w-5 h-5" />
              View Audit Logs
            </Button>
          </motion.div>
        </section>

        <CountdownTimer />

        <Tabs defaultValue="strategic-overrides" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-6xl grid-cols-7 h-12">
              <TabsTrigger value="strategic-overrides" className="gap-2">
                <Zap className="w-4 h-4" />
                Strategic Overrides
              </TabsTrigger>
              <TabsTrigger value="the-constellation" className="gap-2">
                <Star className="w-4 h-4" />
                The Constellation
              </TabsTrigger>
              <TabsTrigger value="national-attrition" className="gap-2">
                <Globe className="w-4 h-4" />
                National Attrition
              </TabsTrigger>
              <TabsTrigger value="cps-audit" className="gap-2">
                <Users className="w-4 h-4" />
                CPS Audit
              </TabsTrigger>
              <TabsTrigger value="veteran-tax" className="gap-2">
                <Scale className="w-4 h-4" />
                Veteran Tax
              </TabsTrigger>
              <TabsTrigger value="system-revelation" className="gap-2">
                <Cpu className="w-4 h-4" />
                System REVELATION
              </TabsTrigger>
              <TabsTrigger value="hyper-diagnostics" className="gap-2">
                <Activity className="w-4 h-4" />
                Hyper_Diagnostics
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="strategic-overrides" className="space-y-24">
            <StrategicOverrides />
            <Separator />
            <SunsetPackage />
            <Separator />
            <SystemicAttritionLogs />
          </TabsContent>

          <TabsContent value="the-constellation" className="space-y-24">
            <TheConstellation />
          </TabsContent>

          <TabsContent value="national-attrition" className="space-y-24">
            <NationalAttritionMap />
          </TabsContent>

          <TabsContent value="cps-audit" className="space-y-24">
            <MotionForReunification />
            <Separator />
            <FederalDropBrief />
            <Separator />
            <StatutoryCollisionMatrix />
            <Separator />
            <MetadataAuditTool />
            <Separator />
            <PolicyViolationNotice />
            <Separator />
            <CountyFiscalAudit />
            <Separator />
            <CPSImpact />
            <Separator />
            <FatalityAudit />
            <Separator />
            <ProceduralCompliance />
            <Separator />
            <EscalationPlan />
          </TabsContent>

          <TabsContent value="veteran-tax" className="space-y-24">
            <EconomicImpact />
            <Separator />
            <VeteranSupportKit />
            <Separator />
            <AuditTrail />
            <Separator />
            <ForensicVault />
            <Separator />
            <LegalPrecedent />
            <Separator />
            <MediaKit />
          </TabsContent>

          <TabsContent value="system-revelation" className="space-y-24">
            <SystemStatus />
          </TabsContent>

          <TabsContent value="hyper-diagnostics" className="space-y-24">
            <HyperDiagnostics />
            <Separator />
            <OIGSubmission />
            <Separator />
            <ForensicExtraction />
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="py-24 text-center space-y-8 bg-muted/50 rounded-3xl border-2 border-dashed border-muted-foreground/20">
          <div className="max-w-2xl mx-auto space-y-4">
            <Scale className="w-12 h-12 mx-auto text-primary" />
            <h2 className="text-3xl font-bold">Defend Economic Liberty</h2>
            <p className="text-muted-foreground">
              This portal is a living audit. Fork the repository, mirror the data, and ensure that regulatory transparency is not a request, but a requirement.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                Mirror the Data
              </Button>
              <Button size="lg" variant="outline">
                Join the Network
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-muted-foreground" />
            <span className="font-bold text-muted-foreground">Public Transparency Portal</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 Global Wardenclyffe Network (GWN). All evidence is Open Source.
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Legal</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
