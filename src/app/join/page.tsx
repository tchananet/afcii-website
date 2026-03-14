
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function JoinPage() {
  const { t } = useLanguage();

  const plans = [
    {
      name: "Membre Individuel",
      price: "Gratuit",
      description: "Pour les étudiants et les passionnés d'innovation.",
      features: ["Accès à la newsletter", "Invitation aux webinaires publics", "Accès à la bibliothèque de ressources"],
    },
    {
      name: "Professionnel",
      price: "50,000 FCFA/an",
      description: "Pour les experts et chercheurs actifs.",
      features: ["Tous les avantages individuels", "Réseautage exclusif", "Accès prioritaire aux sommets", "Certification AFCII"],
    },
    {
      name: "Organisation",
      price: "Sur Devis",
      description: "Pour les entreprises et institutions.",
      features: ["Tous les avantages pro", "Partenariats stratégiques", "Support R&D dédié", "Visibilité de marque"],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Rejoignez le Mouvement</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Choisissez le niveau d'adhésion qui vous convient et commencez à impacter l'avenir de l'Afrique dès aujourd'hui.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Card key={idx} className={`flex flex-col border-none shadow-xl ${idx === 1 ? 'ring-2 ring-primary scale-105 z-10' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-accent">{plan.name}</CardTitle>
                  <CardDescription className="text-lg font-bold text-primary">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-accent">
                        <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${idx === 1 ? 'bg-primary' : 'bg-accent'} text-white`}>
                    Choisir ce plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
