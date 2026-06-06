
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Contactez-nous</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Vous avez des questions sur nos programmes ou souhaitez devenir partenaire ? Notre équipe basée à Yaoundé vous répondra dans les plus brefs délais.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/5 border border-primary/10">
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-accent font-bold">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" className="border-primary/20 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-accent font-bold">Adresse email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" className="border-primary/20 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-accent font-bold">Votre message</Label>
                  <Textarea id="message" rows={5} placeholder="Comment pouvons-nous vous aider ?" className="border-primary/20 focus:border-primary resize-none" />
                </div>

                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold">
                  Envoyer le message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="bg-accent p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-headline font-bold mb-8">Informations de Contact</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Notre Siège</h3>
                    <p className="text-white/70">BP : 2816 Yaoundé, Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphones</h3>
                    <p className="text-white/70">(+237) 670 115 367</p>
                    <p className="text-white/70">(+237) 670 665 990</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-white/70">afciiorg@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4 uppercase tracking-widest font-bold">Suivez-nous</p>
                <div className="flex space-x-6">
                  <span className="hover:text-primary transition-colors cursor-pointer text-sm font-bold">LinkedIn</span>
                  <span className="hover:text-primary transition-colors cursor-pointer text-sm font-bold">Twitter</span>
                  <span className="hover:text-primary transition-colors cursor-pointer text-sm font-bold">Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
