
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Cpu, Sprout, GraduationCap, Palette, CheckCircle2 } from 'lucide-react';

const poles = [
  {
    title: "Pôle Ingénierie et sciences",
    description: "Ce pôle travaille sur les innovations technologiques et scientifiques adaptées aux contextes africains.",
    icon: Cpu,
    detailsLabel: "Domaines :",
    items: ["Génie civil", "Technologies appropriées", "Innovations industrielles"],
  },
  {
    title: "Pôle Agro-pastoral",
    description: "Ce pôle développe des solutions innovantes pour relever les défis de la sécurité alimentaire et de la durabilité.",
    icon: Sprout,
    detailsLabel: "Objectifs :",
    items: ["L’agriculture durable", "La valorisation des ressources locales", "L’expérimentation agricole"],
  },
  {
    title: "Pôle Sciences de l’éducation",
    description: "Ce pôle s’intéresse à la transmission des savoirs et au renforcement des capacités.",
    icon: GraduationCap,
    detailsLabel: "Focus :",
    items: ["La formation", "Les méthodes pédagogiques", "La diffusion des connaissances"],
  },
  {
    title: "Pôle Arts, culture et innovation",
    description: "Ce pôle explore les liens entre créativité artistique et transformation sociale.",
    icon: Palette,
    detailsLabel: "Explorations :",
    items: ["Culture", "Créativité", "Innovation sociale"],
  }
];

export default function PolesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">Nos Pôles d'Expertise</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              L'AFCII s'organise autour de quatre pôles majeurs pour impulser une innovation multisectorielle et durable à travers le continent.
            </p>
          </div>
        </section>

        {/* Poles Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {poles.map((pole, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 bg-primary/10 flex items-center justify-center p-8 group-hover:bg-primary/20 transition-colors">
                      <pole.icon className="h-20 w-20 text-primary" />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-headline text-accent font-bold">
                          {pole.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {pole.description}
                        </p>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-bold text-primary uppercase tracking-wider">
                            {pole.detailsLabel}
                          </p>
                          <ul className="grid grid-cols-1 gap-2">
                            {pole.items.map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-accent">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-accent mb-6">Une approche transversale de l'innovation</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Chaque pôle collabore étroitement avec les autres pour créer des synergies uniques et des solutions complètes adaptées aux réalités locales.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
