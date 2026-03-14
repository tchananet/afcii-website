
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const aboutImg = PlaceHolderImages.find(img => img.id === 'community-growth');

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-24 bg-accent text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Empowering Africa through Innovation</h1>
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              Founded in 2018, AFCII has been at the forefront of driving sustainable development through cutting-edge research and collaborative initiatives.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-20" />
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                   <Image
                      src={aboutImg?.imageUrl || ''}
                      alt={aboutImg?.description || ''}
                      fill
                      className="object-cover"
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-3xl -z-10" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-accent mb-8">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    AFCII started as a small collective of researchers and engineers passionate about the potential of sustainable technology in sub-Saharan Africa. We noticed a gap between high-level research and actual community implementation.
                  </p>
                  <p>
                    Today, we are a multi-national organization with poles of expertise ranging from AgriTech to Sustainable Urban Development. Our mission remains unchanged: to connect minds and resources for a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-accent mb-4">Our Mission</h3>
                <p className="text-muted-foreground">To bridge the gap between innovation and real-world application through focused research and collaboration.</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-accent mb-4">Our Vision</h3>
                <p className="text-muted-foreground">To be the leading catalyst for sustainable technological transformation across the African continent by 2030.</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-accent mb-4">Our Values</h3>
                <p className="text-muted-foreground">Integrity, inclusion, and a relentless pursuit of excellence in everything we do for our communities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
