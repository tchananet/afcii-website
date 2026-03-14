
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
    title: 'Projet culture du gansang',
    category: 'Agriculture',
    status: 'Pilote',
    description: 'Ce projet vise à étudier les possibilités de domestication et de culture du gansang afin de favoriser sa valorisation économique.',
    objectives: [
      'Expérimenter la culture',
      'Analyser la rentabilité',
      'Promouvoir sa diffusion auprès des agriculteurs'
    ],
    imgId: 'project-gansang'
  },
  {
    id: 2,
    title: 'Projet cultures fruitières innovantes',
    category: 'Botanique',
    status: 'Pilote',
    description: 'Ce projet explore la possibilité d’adapter certaines cultures fruitières exotiques aux conditions locales.',
    imgId: 'project-fruit'
  },
  {
    id: 3,
    title: 'Projet céramique et artisanat',
    category: 'Artisanat',
    status: 'Pilote',
    description: 'Ce projet vise à valoriser les techniques traditionnelles de poterie tout en intégrant des approches innovantes.',
    imgId: 'project-ceramic'
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Page Projets</h1>
            <p className="text-primary font-bold text-xl uppercase tracking-widest mb-6">Projets pilotes</p>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              L’AFCII développe des projets expérimentaux visant à tester des solutions innovantes avant leur diffusion à grande échelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => {
              const projectImg = PlaceHolderImages.find(img => img.id === project.imgId);
              return (
                <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-secondary/20">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={projectImg?.imageUrl || ''}
                      alt={projectImg?.description || ''}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={projectImg?.imageHint}
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
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.objectives && (
                      <div className="pt-4 space-y-2">
                        <p className="text-sm font-bold text-accent uppercase tracking-wider">Objectifs :</p>
                        <ul className="space-y-2">
                          {project.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Voir les détails <ExternalLink className="ml-2 h-4 w-4" />
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
