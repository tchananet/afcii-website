
"use client";

import { useParams } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { newsData } from '../page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, MapPin, Tag, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const article = newsData.find(item => item.id === id);
  
  if (!article) {
    return notFound();
  }

  const newsImg = PlaceHolderImages.find(img => img.id === article.imgId);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-secondary/30 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/news">
              <Button variant="ghost" className="mb-8 p-0 text-muted-foreground hover:text-primary font-bold">
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux actualités
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                <Tag className="h-3 w-3 mr-2" />
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-primary/10 pt-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-primary" />
                {article.author}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                {article.location}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {newsImg && (
              <div className="relative aspect-video rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                <Image
                  src={newsImg.imageUrl}
                  alt={newsImg.description}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none text-accent/80 leading-relaxed space-y-8">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-accent uppercase tracking-widest text-xs">Partager :</span>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary/5">
                    <Share2 className="h-4 w-4 text-primary" />
                  </Button>
                </div>
              </div>
              
              <Link href="/join">
                <Button className="bg-primary text-white font-bold h-12 px-8 rounded-full shadow-lg shadow-primary/20">
                  Rejoindre le mouvement
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* More Articles Section (Optional) */}
        <div className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold text-accent mb-12 text-center">Continuer la lecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData.filter(item => item.id !== id).slice(0, 3).map((item) => {
                const itemImg = PlaceHolderImages.find(img => img.id === item.imgId);
                return (
                  <Link href={`/news/${item.id}`} key={item.id} className="group">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={itemImg?.imageUrl || ''}
                          alt={itemImg?.description || ''}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{item.date}</span>
                        <h3 className="text-xl font-headline font-bold text-accent group-hover:text-primary transition-colors line-clamp-2 mb-4">
                          {item.title}
                        </h3>
                        <div className="mt-auto text-primary font-bold text-sm flex items-center">
                          Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
