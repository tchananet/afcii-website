
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.poles': 'Our Departments',
    'nav.projects': 'Projects',
    'nav.news': 'News & Events',
    'nav.join': 'Join Us',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'hero.title': 'Innovation for a Sustainable Future',
    'hero.subtitle': 'AFCII Connect bridges research, innovation, and community development to create lasting impact.',
    'hero.cta': 'Explore Our Work',
    'stats.members': 'Active Members',
    'stats.projects': 'Global Projects',
    'stats.partners': 'Key Partners',
    'contact.title': 'Get in Touch',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Inquiry',
    'footer.tagline': 'Empowering communities through innovation.',
    'common.readMore': 'Read More'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.poles': 'Nos Pôles',
    'nav.projects': 'Projets',
    'nav.news': 'Actualités',
    'nav.join': 'Rejoindre',
    'nav.partners': 'Partenaires',
    'nav.contact': 'Contact',
    'hero.title': 'L\'Innovation pour un Avenir Durable',
    'hero.subtitle': 'AFCII Connect fait le pont entre la recherche, l\'innovation et le développement communautaire pour un impact durable.',
    'hero.cta': 'Découvrir nos actions',
    'stats.members': 'Membres Actifs',
    'stats.projects': 'Projets Globaux',
    'stats.partners': 'Partenaires Clés',
    'contact.title': 'Contactez-nous',
    'contact.name': 'Nom complet',
    'contact.email': 'Adresse e-mail',
    'contact.message': 'Votre message',
    'contact.submit': 'Envoyer la demande',
    'footer.tagline': 'Autonomiser les communautés par l\'innovation.',
    'common.readMore': 'En savoir plus'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('afcii-lang', lang);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('afcii-lang') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
