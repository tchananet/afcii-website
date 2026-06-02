
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Cpu, Sprout, GraduationCap, Palette, 
  TrendingUp, Scale, Database, CheckCircle2 
} from 'lucide-react';

const poles = [
  {
    title: "Ingénierie et Sciences Fondamentales",
    description: "Ce pôle travaille sur les innovations technologiques et scientifiques adaptées aux contextes africains.",
    icon: Cpu,
    detailsLabel: "Domaines :",
    items: ["Génie civil & Matériaux locaux", "Technologies appropriées", "Innovation mécanique & Informatique"],
  },
  {
    title: "Pôle Agro-pastoral",
    description: "Ce pôle développe des solutions innovantes pour relever les défis de la sécurité alimentaire.",
    icon: Sprout,
    detailsLabel: "Objectifs :",
    items: ["L’agriculture durable & Agroalimentaire", "Appui aux agriculteurs locaux", "L’expérimentation & Valorisation des ressources"],
  },
  {
    title: "Arts, Culture et Lettres",
    description: "Valorisation du patrimoine culturel et exploration des liens entre créativité et transformation sociale.",
    icon: Palette,
    detailsLabel: "Explorations :",
    items: ["Histoire & Patrimoine", "Artisanat local (Poterie, Art culinaire)", "Innovation sociale"],
  },
  {
    title: "Sciences de l’Éducation",
    description: "Ce pôle s’intéresse à la transmission des savoirs et au renforcement des capacités académiques.",
    icon: GraduationCap,
    detailsLabel: "Focus :",
    items: ["Orientation scolaire & Pédagogie", "Accompagnement académique", "Formation continue"],
  },
  {
    title: "Économie Sociale",
    description: "Lutte contre la pauvreté et promotion de l'insertion professionnelle durable.",
    icon: TrendingUp,
    detailsLabel: "Actions :",
    items: ["Micro-entrepreneuriat", "Insertion professionnelle", "Projets à fort impact social"],
  },
  {
    title: "Juridique",
    description: "Protection des innovations et accompagnement à la conformité légale des projets.",
    icon: Scale,
    detailsLabel: "Services :",
    items: ["Brevets & Droits d'auteur", "Accompagnement légal", "Protection des innovations"],
  },
  {
    title: "Documentation et Archivage",
    description: "Création d'une base de connaissances accessible au public et aux chercheurs.",
    icon: Database,
    detailsLabel: "Ressources :",
    items: ["Bibliothèque physique & numérique", "Archivage scientifique", "Accès public aux savoirs"],
  }
];

export default function PolesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-sm font-black text-primary uppercase tracking-widest mb-6">Structure Technique</h1>
            <h2 className="text-4xl md:text-7xl font-headline font-bold mb-8">Nos 7 Pôles d'Intervention</h2>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
              L'architecture de l'AFCII reflète une approche multidisciplinaire pour impulser une innovation transversale et durable.
            </p>
          </div>
        </section>

        {/* Poles Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {poles.map((pole, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/4 bg-primary/5 flex items-center justify-center p-8">
                      <pole.icon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="md:w-3/4 p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-headline text-accent font-bold">
                          {pole.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                          {pole.description}
                        </p>
                        
                        <div className="space-y-3">
                          <p className="text-xs font-black text-primary uppercase tracking-wider">
                            {pole.detailsLabel}
                          </p>
                          <ul className="grid grid-cols-1 gap-2">
                            {pole.items.map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-accent font-medium">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary mr-2 shrink-0" />
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

        {/* Transversal CTA */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-accent mb-6">Synergie Interdisciplinaire</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Chaque pôle n'est pas une île ; ils collaborent pour créer des solutions holistiques. 
              Par exemple, le pôle Juridique protège les brevets nés de l'Ingénierie, tandis que le pôle Agro-pastoral 
              utilise les ressources documentées par nos archivistes.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
