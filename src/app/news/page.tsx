
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, ArrowRight, User, Tag, MapPin } from 'lucide-react';

export const newsData = [
  {
    id: 'sago-2024',
    title: 'L’AFCII au SAGO : La concrétisation sur le terrain d’un tour de force national',
    date: '06 - 11 Juin 2024',
    author: 'Direction AFCII',
    location: 'Yaoundé (Palais des Sports)',
    excerpt: 'Après avoir parcouru le Cameroun de Yaoundé à Douala, l’AFCII franchit une étape historique en participant au Salon de l’Action Gouvernementale.',
    content: `Après avoir parcouru le Cameroun de Yaoundé (10 mai) à Douala (31 mai), en passant par Bafoussam (24 mai), l’AFCII franchit une étape historique. Du 6 au 11 juin, notre association est présente au Salon de l’Action Gouvernementale (SAGO), le grand rendez-vous de la vitrine publique et économique du pays.

Ce salon n’est pas seulement une plateforme de visibilité pour l’AFCII ; c’est la célébration d’une aventure humaine et entrepreneuriale commune. Sur notre espace, nous ne sommes pas seuls. Fidèles à nos engagements, nous soutenons et mettons en lumière les PME locales de Yaoundé, Bafoussam et Douala qui ont cru en notre projet dès les premiers séminaires.

Ces entreprises, qui ont partagé notre feuille de route sur la valorisation des connaissances, exposent aujourd’hui leurs innovations et leurs solutions face aux décideurs publics, aux investisseurs et aux citoyens. Elles sont la preuve vivante que la synergie entre l'AFCII et le tissu économique camerounais produit des résultats concrets et immédiats.

Nous vous attendons nombreux au SAGO, du 6 au 11 juin, pour découvrir ces talents, échanger avec nos équipes et rejoindre le mouvement de l'innovation partagée !`,
    category: 'Actualité',
    imgId: 'news-sago'
  },
  {
    id: 'douala-31-mai',
    title: 'Douala en synergie : Quand la valorisation des connaissances booste la performance économique',
    date: '31 Mai 2024',
    author: 'Pôle Économie Sociale',
    location: 'Douala',
    excerpt: 'Le séminaire a permis de démontrer que le savoir n’est pas seulement académique, mais qu’il constitue le capital immatériel le plus précieux.',
    content: `Pour clôturer en beauté sa tournée des régions, l’AFCII a déposé ses valises dans la capitale économique, Douala, le 31 mai. Dans ce hub d’affaires ultra-compétitif, notre message sur la valorisation des connaissances a résonné avec une acuité toute particulière auprès des chefs d'entreprises et des start-ups de la place littorale.

Le séminaire a permis de démontrer que le savoir n’est pas seulement académique, mais qu’il constitue le capital immatériel le plus précieux d’une entreprise pour innover et se démarquer sur le marché. L'événement a provoqué une accélération majeure de notre communauté, avec l'agrégation de nombreux professionnels et experts sectoriels.

Le succès de cette escale de Douala repose également sur l'implication forte de plusieurs PME locales. En comprenant immédiatement la valeur ajoutée de l'AFCII, ces entreprises partenaires sont devenues les piliers de notre réseau dans le Littoral. Aujourd'hui, la synergie continue : elles montent à Yaoundé avec nous pour participer au SAGO, prêtes à démontrer au pavillon des expositions l'impact direct de nos méthodes sur leur développement.`,
    category: 'Séminaire',
    imgId: 'news-douala'
  },
  {
    id: 'bafoussam-24-mai',
    title: 'Cap sur l’Ouest : Bafoussam accueille l’AFCII pour structurer l’ingéniosité locale',
    date: '24 Mai 2024',
    author: 'Direction Régionale',
    location: 'Bafoussam',
    excerpt: 'La région de l\'Ouest représentait une étape stratégique cruciale pour notre association, marquée par une vague massive d\'adhésions.',
    content: `Deux semaines après le succès de la capitale, c’est la ville de Bafoussam qui a vibré, le 24 mai, au rythme de l’AFCII. Réputée pour son dynamisme entrepreneurial et l’ingéniosité de ses acteurs économiques, la région de l'Ouest représentait une étape stratégique cruciale pour notre association.

Le séminaire de formation s’est concentré sur un enjeu majeur : comment capter, protéger et valoriser les connaissances et compétences locales pour les transformer en opportunités d'affaires durables ? L'engouement a été total, marqué par une vague massive d'adhésions de nouveaux membres désireux de structurer leur activité.

À Bafoussam, la solidarité entrepreneuriale a une fois de plus fonctionné. Des PME locales audacieuses ont apporté leur appui logistique et institutionnel à notre démarche, convaincues du bien-fondé du projet AFCII. En misant sur nous, elles ont misé sur l'avenir. C'est donc avec une grande fierté que l’AFCII les accompagne et les soutient à son tour au SAGO du 6 au 11 juin, offrant à ces champions de l'Ouest une vitrine nationale unique.`,
    category: 'Séminaire',
    imgId: 'news-bafoussam'
  },
  {
    id: 'yaounde-10-mai',
    title: 'AFCII à Yaoundé : Le top départ d’une dynamique nationale pour la valorisation des connaissances',
    date: '10 Mai 2024',
    author: 'Siège National',
    location: 'Yaoundé',
    excerpt: 'L’AFCII a officiellement lancé sa tournée nationale à Yaoundé avec un triple objectif : se faire connaître, agréger des membres et former.',
    content: `Le 10 mai dernier, l’Association Française-Camerounaise pour l’Innovation et l’Intégration (AFCII) a officiellement lancé sa tournée nationale à Yaoundé. Cette première escale dans la capitale politique avait un triple objectif : se faire connaître du grand public, agréger de nouveaux membres passionnés et poser les bases de notre formation phare sur la valorisation des connaissances.

Dans une atmosphère d'échange et de co-construction, les participants – composés d'universitaires, de chercheurs et de porteurs de projets – ont découvert comment transformer le savoir théorique en levier de croissance concret.

Cette première descente n'aurait pas eu le même éclat sans le soutien précieux des PME de la place. Dès ce premier jour, plusieurs structures locales ont cru en notre vision et ont décidé de s’engager à nos côtés. Ce partenariat initial porte aujourd'hui ses fruits : ces mêmes PME, boostées par les outils de l’AFCII, franchissent une nouvelle étape cette semaine. Vous pourrez les retrouver à nos côtés au Salon de l’Action Gouvernementale (SAGO) du 6 au 11 juin, où elles exposeront la force de leur savoir-faire.`,
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
            {newsData.map((item, idx) => {
              const newsImg = PlaceHolderImages.find(img => img.id === item.imgId);
              return (
                <div key={item.id} className={`flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden bg-muted">
                    {newsImg ? (
                      <Image
                        src={newsImg.imageUrl}
                        alt={newsImg.description}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        data-ai-hint={newsImg.imageHint}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground italic">Image bientôt disponible</div>
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
                    <Link href={`/news/${item.id}`}>
                      <h2 className="text-3xl font-headline font-bold text-accent mb-6 hover:text-primary transition-colors cursor-pointer leading-tight">
                        {item.title}
                      </h2>
                    </Link>
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
                      <Link href={`/news/${item.id}`}>
                        <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0 self-start sm:self-center font-bold">
                           Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
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
