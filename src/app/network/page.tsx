
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, MapPin, Users, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NetworkPage() {
  const { t } = useLanguage();

  const branches = [
    { country: "Sénégal", city: "Dakar (Siège)", type: "Hub Principal" },
    { country: "France", city: "Paris", type: "AFCII France - Diaspora" },
    { country: "Canada", city: "Montréal", type: "AFCII Canada - Partenariats" },
    { country: "Côte d'Ivoire", city: "Abidjan", type: "Antenne Régionale" },
    { country: "Cameroun", city: "Yaoundé", type: "Pôle Agro-pastoral" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-24 bg-accent text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-7xl font-headline font-bold mb-6">Réseau International</h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              L'AFCII rayonne à travers le monde grâce à sa diaspora et ses démembrements internationaux, unissant les talents africains où qu'ils soient.
            </p>
          </div>
          <Globe className="absolute -right-20 -bottom-20 h-96 w-96 text-primary/10" />
        </section>

        {/* Global Presence */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-headline font-bold text-accent mb-8">Nos Démembrements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {branches.map((branch, i) => (
                    <div key={i} className="p-8 bg-secondary/30 rounded-3xl border border-secondary hover:border-primary/20 transition-all flex items-start gap-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-accent">{branch.country}</h4>
                        <p className="text-primary font-bold text-sm">{branch.city}</p>
                        <p className="text-muted-foreground text-xs mt-2">{branch.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent p-12 rounded-3xl text-white flex flex-col justify-center">
                <Users className="h-12 w-12 text-primary mb-8" />
                <h3 className="text-3xl font-headline font-bold mb-6">Force de la Diaspora</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  La diaspora est au cœur de notre stratégie. Nos membres à l'étranger apportent une expertise technologique, des transferts de compétences et des opportunités de financement pour les projets locaux.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  Rejoindre une antenne
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <Share2 className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-3xl font-headline font-bold text-accent mb-8">Partenariats Stratégiques</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Nous collaborons avec des universités, des centres de recherche internationaux et des organisations de développement pour assurer une visibilité mondiale à nos innovations locales.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
