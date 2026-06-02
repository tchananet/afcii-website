
"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.poles'), href: '/poles' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.network'), href: '/network' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-headline font-black text-accent leading-none">AFCII<span className="text-primary">.</span></span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">African Center for Incubation and Innovation</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-accent hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center border-l pl-6 space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-accent font-bold">
                    <Globe className="h-4 w-4" />
                    {language.toUpperCase()}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('fr')}>Français (FR)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>English (EN)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/join">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-6">
                  {t('nav.join')}
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-accent">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b absolute w-full fade-in shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-bold text-accent border-b border-secondary hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex justify-center space-x-8 py-2">
                <button onClick={() => { setLanguage('fr'); setIsOpen(false); }} className={cn("font-bold", language === 'fr' ? "text-primary" : "text-accent")}>FR</button>
                <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={cn("font-bold", language === 'en' ? "text-primary" : "text-accent")}>EN</button>
              </div>
              <Link href="/join" className="w-full">
                <Button className="w-full bg-primary h-12" onClick={() => setIsOpen(false)}>
                  {t('nav.join')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
