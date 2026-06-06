
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Leaf, Shield, Users, TrendingUp, Lightbulb, GraduationCap } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-sustainability');
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeJ_Cr3ak73x3Z-pz2O5l5qcc2nLKFUHaDuLCT8I3gGDcpMJg/viewform?usp=publish-editor";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-accent">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={heroImg?.imageUrl || ''}
              alt="Développement durable Afrique"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl fade-in text-white">
              <h1 className="text-5xl md:text-8xl font-headline font-black mb-8 leading-[1.1]">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-medium">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" passHref>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 text-lg font-bold">
                    {t('hero.cta')}
                  </Button>
                </Link>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-16 text-lg font-bold">
                    {t('nav.join')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Highlight */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
              <h2 className="text-2xl font-headline font-bold max-w-xl">
                L'Afrique regorge de ressources. Notre mission est de les transformer par l'innovation endogène.
              </h2>
              <div className="grid grid-cols-3 gap-12">
                <div className="text-center">
                  <p className="text-3xl font-black mb-1">500+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">{t('stats.members')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black mb-1">45</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">{t('stats.projects')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black mb-1">12</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Pays</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Pillars */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-6">Innover, Incuber, Impacter</h3>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-accent leading-tight">Nos domaines d'action stratégique</h2>
              </div>
              <Link href="/poles">
                <Button variant="link" className="text-primary font-black text-lg p-0">
                  Voir tous nos pôles <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 rounded-[40px] bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-6 text-accent">Recherche Appliquée</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">Financement et accompagnement des mémoires et travaux pour des solutions aux problèmes de société.</p>
              </div>

              <div className="p-10 rounded-[40px] bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-6 text-accent">Incubation & Production</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">Création d'unités de production pour encadrer les jeunes entrepreneurs et valoriser les matériaux locaux.</p>
              </div>

              <div className="p-10 rounded-[40px] bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-6 text-accent">Formation Continue</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">Séminaires et ateliers techniques pour renforcer les capacités des acteurs du développement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-accent text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-headline font-bold mb-10">Rejoignez le mouvement AFCII</h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
              Que vous soyez chercheur, étudiant, expert de la diaspora ou bailleur de fonds, construisons ensemble l'avenir de l'Afrique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-12 h-16 text-xl font-black rounded-full">
                  Nous rejoindre
                </Button>
              </a>
              <Link href="/contact" passHref>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 h-16 text-xl font-black rounded-full">
                  Soutenir l'ONG
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
