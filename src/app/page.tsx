
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Leaf, Shield, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-sustainability');

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImg?.imageUrl || ''}
              alt={heroImg?.description || ''}
              fill
              className="object-cover opacity-20"
              priority
              data-ai-hint="nature sustainability"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl fade-in">
              <h1 className="text-5xl md:text-7xl font-headline font-black text-accent mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  {t('hero.cta')}
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent">
                  {t('nav.about')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-headline font-bold text-primary mb-2">500+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">{t('stats.members')}</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-bold text-primary mb-2">45</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">{t('stats.projects')}</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-bold text-primary mb-2">12</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-bold text-primary mb-2">30+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">{t('stats.partners')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Mission */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-accent mb-4">Driving Change Together</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-secondary hover:shadow-xl transition-all border border-transparent hover:border-primary/20 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Leaf className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Sustainability</h3>
                <p className="text-muted-foreground">Implementing eco-friendly solutions that preserve resources for future generations while promoting economic growth.</p>
              </div>

              <div className="p-8 rounded-2xl bg-secondary hover:shadow-xl transition-all border border-transparent hover:border-primary/20 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">Leveraging technology and research to solve complex social and industrial challenges across the continent.</p>
              </div>

              <div className="p-8 rounded-2xl bg-secondary hover:shadow-xl transition-all border border-transparent hover:border-primary/20 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Community</h3>
                <p className="text-muted-foreground">Building a robust network of professionals and organizations dedicated to collective advancement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Ready to join our community of innovators?</h2>
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-10 h-14 text-lg">
              {t('nav.join')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
