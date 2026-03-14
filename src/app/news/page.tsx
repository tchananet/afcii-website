
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, ArrowRight, User } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'AFCII Annual Innovation Summit 2024',
    date: 'Oct 12, 2024',
    author: 'Admin',
    excerpt: 'Join us for our biggest event of the year where we discuss the future of sustainable tech in Africa.',
    category: 'Event',
    imgId: 'innovation-research'
  },
  {
    id: 2,
    title: 'New Partnership with Global Green Fund',
    date: 'Sep 28, 2024',
    author: 'Marketing',
    excerpt: 'We are thrilled to announce a multi-year partnership to fund 10 new environmental projects.',
    category: 'Announcement',
    imgId: 'community-growth'
  },
  {
    id: 3,
    title: 'Understanding the Impact of Renewable Energy',
    date: 'Sep 15, 2024',
    author: 'Dr. Sarah J.',
    excerpt: 'A deep dive into how micro-grids are changing lives in the Sahel region.',
    category: 'Article',
    imgId: 'project-energy'
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
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">{t('nav.news')}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Stay updated with our latest activities, announcements, and thought leadership articles.</p>
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
                    <div className="flex items-center space-x-4 mb-6 text-sm text-primary font-bold uppercase tracking-widest">
                      <span className="px-3 py-1 bg-primary/10 rounded-full">{item.category}</span>
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
                Load More News
             </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
