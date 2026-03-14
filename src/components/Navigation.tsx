
"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.poles'), href: '/poles' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.partners'), href: '/partners' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-headline font-bold text-accent">
              AFCII<span className="text-primary">.</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center border-l pl-6 space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "text-xs font-bold px-1 transition-colors",
                  language === 'en' ? "text-primary" : "text-muted-foreground"
                )}
              >
                EN
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => setLanguage('fr')}
                className={cn(
                  "text-xs font-bold px-1 transition-colors",
                  language === 'fr' ? "text-primary" : "text-muted-foreground"
                )}
              >
                FR
              </button>
            </div>
            <Link href="/join">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                {t('nav.join')}
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-muted-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center px-3 py-4 space-x-4 border-t">
               <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={cn(language === 'en' ? "text-primary" : "text-muted-foreground")}>English</button>
               <button onClick={() => { setLanguage('fr'); setIsOpen(false); }} className={cn(language === 'fr' ? "text-primary" : "text-muted-foreground")}>Français</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
