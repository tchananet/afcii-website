
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Domestication du Njangsang',
    category: 'Recherche & Agriculture',
    status: 'En cours',
    description: 'Le Njangsang est un fruit sauvage essentiel. Notre projet de recherche vise à transformer sa cueillette sauvage en une production agricole contrôlée et rentable.',
    objectives: [
      'Étude génétique et agronomique',
      'Phase d\'expérimentation en pépinière',
      'Diffusion des protocoles de culture aux paysans'
    ],
    imgId: 'project-njangsang'
  },
  {
    id: 2,
    title: 'Incubateur de Startups AFCII',
    category: 'Économie Sociale',
    status: 'Actif',
    description: 'Accompagnement des jeunes porteurs de projets à Yaoundé. Nous offrons un cadre de travail, du mentorat et un soutien technique.',
    objectives: [
      'Encadrement stratégique',
      'Accès aux technologies appropriées',
      'Mise en réseau avec des investisseurs'
    ],
    imgId: 'project-incubation'
  },
  {
    id: 3,
    title: 'Vulgarisation du Bio-gaz',
    category: 'Énergie & Environnement',
    status: 'Réalisation',
    description: 'Formation de nos membres et des acteurs locaux à la construction de digesteurs pour une énergie propre et accessible.',
    objectives: [
      'Réduction de l\'utilisation du bois de chauffe',
      'Gestion des déchets organiques',
      'Autonomie énergétique rurale'
    ],
    imgId: 'biogas-seminar'
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Projets & Réalisations</h1>
            <p className="text-primary font-bold text-xl uppercase tracking-widest mb-6">Impact concret sur le terrain</p>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              L’AFCII transforme ses recherches en projets pilotes pour tester des solutions innovantes adaptées aux réalités locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => {
              const projectImg = PlaceHolderImages.find(img => img.id === project.imgId);
              return (
                <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-secondary/20 flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={projectImg?.imageUrl || ''}
                      alt={projectImg?.description || ''}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-accent hover:bg-white border-none shadow-sm font-bold uppercase tracking-widest text-[10px]">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.status}</span>
                    </div>
                    <CardTitle className="text-2xl font-headline text-accent group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    {project.objectives && (
                      <div className="pt-4 space-y-2">
                        <p className="text-xs font-bold text-accent uppercase tracking-wider">Objectifs clés :</p>
                        <ul className="space-y-2">
                          {project.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start text-xs text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mr-2 mt-0.5 shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="mt-auto border-t border-secondary/50 pt-4">
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Plus d'informations <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
