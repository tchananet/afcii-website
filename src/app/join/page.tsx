
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function JoinPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow flex items-center justify-center bg-secondary/30 py-20">
          <Card className="max-w-md w-full mx-4 border-none shadow-2xl p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-headline font-bold text-accent mb-4">C'est envoyé !</h2>
            <p className="text-muted-foreground mb-8">
              Merci pour votre demande d'adhésion. L'équipe de l'AFCII examinera votre profil et vous contactera très prochainement par email.
            </p>
            <Button onClick={() => window.location.href = '/'} className="w-full bg-primary text-white">
              Retour à l'accueil
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Devenir Membre</h1>
            <p className="text-muted-foreground text-lg">
              Rejoignez gratuitement l'AFCII et contribuez au développement endogène de l'Afrique. 
              Votre adhésion vous donne accès à notre réseau d'experts et à nos projets pilotes.
            </p>
          </div>

          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-primary h-2 w-full" />
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-headline text-accent">Formulaire d'adhésion</CardTitle>
              <CardDescription>Veuillez remplir les informations ci-dessous. L'adhésion est gratuite.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-accent font-bold">Nom Complet</Label>
                    <Input id="name" placeholder="Ex: Jean Dupont" required className="border-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-accent font-bold">Adresse Email</Label>
                    <Input id="email" type="email" placeholder="jean@example.com" required className="border-primary/20 focus:border-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-accent font-bold">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+237 6XX XX XX XX" required className="border-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pole" className="text-accent font-bold">Pôle d'intérêt principal</Label>
                    <Select required>
                      <SelectTrigger className="border-primary/20 focus:border-primary">
                        <SelectValue placeholder="Sélectionnez un pôle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ingenierie">Ingénierie et Sciences</SelectItem>
                        <SelectItem value="agropastoral">Agro-pastoral</SelectItem>
                        <SelectItem value="arts">Arts, Culture et Lettres</SelectItem>
                        <SelectItem value="education">Sciences de l’Éducation</SelectItem>
                        <SelectItem value="economie">Économie Sociale</SelectItem>
                        <SelectItem value="juridique">Juridique</SelectItem>
                        <SelectItem value="documentation">Documentation et Archivage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-primary/20">
                    Soumettre ma demande d'adhésion
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground italic">
                  En soumettant ce formulaire, vous acceptez d'être contacté par l'AFCII dans le cadre de nos activités.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
