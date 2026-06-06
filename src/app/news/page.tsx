
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Recherche appliquée : Vers la domestication du Njangsang',
    date: '20 Janvier 2024',
    author: 'Pôle Agro-pastoral',
    excerpt: 'Le Njangsang, produit traditionnellement sauvage, fait l\'objet d\'une étude approfondie par nos chercheurs pour stabiliser sa production domestique.',
    category: 'Recherche',
    imgId: 'project-njangsang'
  },
  {
    id: 2,
    title: 'Formation Bio-gaz : Nos membres en première ligne',
    date: '12 Décembre 2023',
    author: 'Pôle Ingénierie',
    excerpt: 'Participation active de l\'AFCII à un séminaire de formation technique sur la production de bio-gaz pour les zones rurales.',
    category: 'Formation',
    imgId: 'biogas-seminar'
  },
  {
    id: 3,
    title: 'Séminaire Yaoundé : Valorisation des compétences locales',
    date: '05 Novembre 2023',
    author: 'Direction AFCII',
    excerpt: 'Une rencontre stratégique tenue à Yaoundé pour définir les leviers de transformation des talents académiques en solutions économiques.',
    category: 'Événement',
    imgId: 'skills-seminar'
  },
  {
    id: 4,
    title: 'Lancement du programme d\'incubation d\'entreprises',
    date: '15 Octobre 2023',
    author: 'Pôle Économie Sociale',
    excerpt: 'L\'AFCII ouvre ses portes aux jeunes entrepreneurs pour un encadrement technique et stratégique de leurs projets innovants.',
    category: 'Incubation',
    imgId: 'project-incubation'
  }
];

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Actualités & Articles</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Suivez les avancées de nos projets, nos participations aux séminaires et nos dernières découvertes scientifiques.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {news.map((item, idx) => {
              const newsImg = PlaceHolderImages.find(img => img.id === item.imgId);
              return (
                <div key={item.id} className={`flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                    <Image
                      src={newsImg?.imageUrl || ''}
                      alt={newsImg?.description || ''}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                        <Tag className="h-3 w-3 mr-2" />
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-headline font-bold text-accent mb-6 hover:text-primary transition-colors cursor-pointer leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-secondary">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          {item.author}
                        </div>
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0">
                         {t('common.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
             <Button className="h-12 px-8 bg-accent hover:bg-accent/90 text-white rounded-full">
                Voir plus d'articles
             </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
