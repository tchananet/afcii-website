
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, ArrowRight, User, Tag, MapPin } from 'lucide-react';

const news = [
  {
    id: 4,
    title: 'L’AFCII au SAGO : La concrétisation sur le terrain d’un tour de force national',
    date: '06 - 11 Juin 2024',
    author: 'Direction AFCII',
    location: 'Palais des Sports, Yaoundé',
    excerpt: 'Après avoir parcouru le Cameroun, l’AFCII franchit une étape historique en participant au Salon de l’Action Gouvernementale (SAGO) aux côtés de ses PME partenaires.',
    content: "Ce salon n’est pas seulement une plateforme de visibilité pour l’AFCII ; c’est la célébration d’une aventure humaine et entrepreneuriale commune. Fidèles à nos engagements, nous soutenons et mettons en lumière les PME locales de Yaoundé, Bafoussam et Douala qui ont cru en notre projet dès les premiers séminaires.",
    category: 'Actualité',
    imgId: 'news-sago'
  },
  {
    id: 3,
    title: 'Douala en synergie : Quand la valorisation des connaissances booste la performance économique',
    date: '31 Mai 2024',
    author: 'Pôle Économie Sociale',
    location: 'Douala',
    excerpt: 'Le séminaire a permis de démontrer que le savoir n’est pas seulement académique, mais qu’il constitue le capital immatériel le plus précieux d’une entreprise.',
    content: "Dans ce hub d’affaires ultra-compétitif, notre message sur la valorisation des connaissances a résonné auprès des chefs d'entreprises. Le succès repose sur l'implication forte de plusieurs PME locales, piliers de notre réseau dans le Littoral.",
    category: 'Séminaire',
    imgId: 'news-douala'
  },
  {
    id: 2,
    title: 'Cap sur l’Ouest : Bafoussam accueille l’AFCII pour structurer l’ingéniosité locale',
    date: '24 Mai 2024',
    author: 'Direction Régionale Ouest',
    location: 'Bafoussam',
    excerpt: 'La région de l\'Ouest représentait une étape stratégique cruciale pour notre association, marquée par une vague massive d\'adhésions.',
    content: "Le séminaire de formation s’est concentré sur un enjeu majeur : comment capter, protéger et valoriser les connaissances locales pour les transformer en opportunités d'affaires durables ? L'engouement a été total.",
    category: 'Séminaire',
    imgId: 'news-bafoussam'
  },
  {
    id: 1,
    title: 'AFCII à Yaoundé : Le top départ d’une dynamique nationale pour la valorisation des connaissances',
    date: '10 Mai 2024',
    author: 'Siège National',
    location: 'Yaoundé',
    excerpt: 'L’AFCII a officiellement lancé sa tournée nationale à Yaoundé avec un triple objectif : se faire connaître, agréger des membres et former à la valorisation des connaissances.',
    content: "Dans une atmosphère d'échange et de co-construction, les participants ont découvert comment transformer le savoir théorique en levier de croissance concret. Plusieurs PME locales ont déjà rejoint notre vision.",
    category: 'Lancement',
    imgId: 'news-yaounde'
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
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Actualités & Événements</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Suivez les étapes clés de notre tournée nationale et l'impact de nos actions sur le terrain.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {news.map((item, idx) => {
              const newsImg = PlaceHolderImages.find(img => img.id === item.imgId);
              return (
                <div key={item.id} className={`flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
                    {newsImg && (
                      <Image
                        src={newsImg.imageUrl}
                        alt={newsImg.description}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                        <Tag className="h-3 w-3 mr-2" />
                        {item.category}
                      </span>
                      {item.location && (
                        <span className="flex items-center px-3 py-1 bg-accent/5 rounded-full text-accent/60 text-xs font-bold uppercase tracking-widest">
                          <MapPin className="h-3 w-3 mr-2" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-headline font-bold text-accent mb-6 hover:text-primary transition-colors cursor-pointer leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-6 border-t border-secondary">
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          {item.author}
                        </div>
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0 self-start sm:self-center font-bold">
                         Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
