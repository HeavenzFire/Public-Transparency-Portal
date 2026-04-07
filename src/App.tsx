import { EconomicImpact } from './components/EconomicImpact';
import { AuditTrail } from './components/AuditTrail';
import { ForensicVault } from './components/ForensicVault';
import { LegalPrecedent } from './components/LegalPrecedent';
import { MediaKit } from './components/MediaKit';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, ShieldAlert, FileText, BarChart3, Scale, Mail } from 'lucide-react';
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
            Active Regulatory Breach
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight"
          >
            Establishing the <span className="text-primary italic">Public Record</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            A sovereign evidence repository documenting the $202M economic impact of §300.701 on veteran-owned businesses. We transition from filing reports to establishing the record.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg gap-2">
              <BarChart3 className="w-5 h-5" />
              View the Ledger
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2">
              <FileText className="w-5 h-5" />
              Read the Complaint
            </Button>
          </motion.div>
        </section>

        <Separator />

        {/* Content Sections */}
        <EconomicImpact />
        <Separator />
        <AuditTrail />
        <Separator />
        <ForensicVault />
        <Separator />
        <LegalPrecedent />
        <Separator />
        <MediaKit />

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
