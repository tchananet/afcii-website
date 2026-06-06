
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const { t } = useLanguage();
  const logo = PlaceHolderImages.find(img => img.id === 'afcii-logo');
  
  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            {logo && (
              <div className="relative h-12 w-32 brightness-0 invert opacity-90">
                <Image
                  src={logo.imageUrl}
                  alt="AFCII Logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </Link>
          <p className="text-white/50 text-[10px] leading-tight uppercase font-bold tracking-wider">
            African Centre for Innovation and Incubation
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('footer.tagline')}
          </p>
          <div className="flex space-x-4 pt-2">
            <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-headline font-bold mb-6">Liens Rapides</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-white transition-colors">À Propos</Link></li>
            <li><Link href="/poles" className="hover:text-white transition-colors">Nos Pôles</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projets</Link></li>
            <li><Link href="/news" className="hover:text-white transition-colors">Actualités</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-bold mb-6">Support</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/join" className="hover:text-white transition-colors">Adhésion</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Centre d'aide</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
              <span>Yaoundé, Cameroun</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>+237 6XX XX XX XX</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>info@afcii.org</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
        <p>&copy; {new Date().getFullYear()} AFCII - African Centre for Innovation and Incubation. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
