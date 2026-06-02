
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Heart, Shield, Lightbulb, GraduationCap, Leaf } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const aboutImg = PlaceHolderImages.find(img => img.id === 'community-growth');

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-24 bg-accent text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-headline font-black mb-8">L'ADN de l'AFCII</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl leading-relaxed">
              L'AFCII est une association apolitique et à but non lucratif dédiée au développement socio-économique de l'Afrique. 
              Elle opère comme un incubateur et un centre de recherche appliquée.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        </section>

        {/* Elevator Pitch & History */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                   <Image
                      src={aboutImg?.imageUrl || ''}
                      alt="Innovation en Afrique"
                      fill
                      className="object-cover"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                   <span className="text-4xl font-black">2018</span>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Notre Identité</h2>
                  <h3 className="text-3xl md:text-5xl font-headline font-bold text-accent">Développement Endogène</h3>
                </div>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Nous visons à transformer les connaissances académiques en solutions concrètes et adaptées aux réalités locales. 
                    L'AFCII croit fermement que l'Afrique regorge de ressources naturelles et intellectuelles prêtes à être valorisées.
                  </p>
                  <p>
                    Notre approche consiste à déconstruire le narratif d'un continent démuni. Nous permettons aux jeunes et aux chercheurs 
                    de vivre de leurs connaissances en créant des solutions locales (matériaux locaux, agriculture adaptée, technologies innovantes).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-accent mb-6">La Vision (Le "Pourquoi")</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Permettre à l'Afrique de s'affranchir des modèles dépendants en valorisant son propre capital humain et naturel. 
                  Notre vision est celle d'un continent capable de produire ses propres technologies et matériaux pour son développement souverain.
                </p>
              </div>

              <div className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-accent mb-6">La Mission (Le "Comment")</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Identifier, encourager et soutenir financièrement et techniquement les initiatives locales à travers la recherche appliquée, 
                  la formation continue et l'incubation de startups ou de petits projets à fort impact social et économique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Objectifs Stratégiques</h2>
              <h3 className="text-3xl md:text-5xl font-headline font-bold text-accent">Nos Missions Prioritaires</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Recherche & Innovation",
                  desc: "Financer et accompagner les mémoires et travaux de recherche pour apporter des solutions sociétales."
                },
                {
                  icon: Shield,
                  title: "Incubation",
                  desc: "Créer des unités de production et d'incubation pour encadrer les jeunes entrepreneurs."
                },
                {
                  icon: GraduationCap,
                  title: "Formation",
                  desc: "Organiser des séminaires, 'vacances utiles' et ateliers de formation continue."
                },
                {
                  icon: Leaf,
                  title: "Inclusion & Environnement",
                  desc: "Mettre l'accent sur la formation de la jeune fille et la protection de l'environnement."
                }
              ].map((obj, i) => (
                <div key={i} className="p-8 rounded-2xl bg-secondary/30 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                  <obj.icon className="h-10 w-10 text-primary mb-6" />
                  <h4 className="text-xl font-bold text-accent mb-4">{obj.title}</h4>
                  <p className="text-muted-foreground text-sm">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Placeholder */}
        <section className="py-24 bg-accent text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">Un Conseil d'Administration Engagé</h2>
            <p className="text-lg text-white/70 mb-12">
              L'AFCII est pilotée par un collège d'experts, de chercheurs et de professionnels de la diaspora, garantissant l'intégrité et l'excellence de nos programmes.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
