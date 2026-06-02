
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
    'nav.news': 'News',
    'nav.join': 'Join Us',
    'nav.network': 'Global Network',
    'nav.contact': 'Contact',
    'hero.title': 'Innovation for a Sustainable Africa',
    'hero.subtitle': 'AFCII is a non-profit incubator and research center transforming academic knowledge into local solutions.',
    'hero.cta': 'Explore Projects',
    'stats.members': 'Active Members',
    'stats.projects': 'Incubated Projects',
    'stats.partners': 'Strategic Partners',
    'about.vision.title': 'Our Vision',
    'about.mission.title': 'Our Mission',
    'footer.tagline': 'Empowering Africa through endogenous development.',
    'common.readMore': 'Read More'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'Qui sommes-nous ?',
    'nav.poles': 'Nos Pôles',
    'nav.projects': 'Projets & Réalisations',
    'nav.news': 'Actualités',
    'nav.join': 'Nous Rejoindre',
    'nav.network': 'Réseau International',
    'nav.contact': 'Contact',
    'hero.title': "L'Innovation pour un Avenir Durable",
    'hero.subtitle': "L'AFCII est un incubateur et centre de recherche dédiée au développement socio-économique de l'Afrique.",
    'hero.cta': 'Découvrir nos actions',
    'stats.members': 'Membres Actifs',
    'stats.projects': 'Projets Incubés',
    'stats.partners': 'Partenaires Clés',
    'about.vision.title': 'Notre Vision',
    'about.mission.title': 'Notre Mission',
    'footer.tagline': 'Autonomiser les communautés par le développement endogène.',
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
