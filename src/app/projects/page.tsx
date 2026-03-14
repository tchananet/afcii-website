
"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Green Grid Senegal',
    category: 'Energy',
    status: 'Ongoing',
    description: 'Developing sustainable micro-grids for rural communities in northern Senegal.',
    imgId: 'project-energy'
  },
  {
    id: 2,
    title: 'TechEdu Hub',
    category: 'Education',
    status: 'Completed',
    description: 'Digital literacy platform for over 10,000 students across 50 regional schools.',
    imgId: 'project-education'
  },
  {
    id: 3,
    title: 'Innovation Lab 2024',
    category: 'Research',
    status: 'Ongoing',
    description: 'Supporting tech startups with mentorship, funding, and R&D facilities.',
    imgId: 'innovation-research'
  },
  {
    id: 4,
    title: 'AgriTech Initiative',
    category: 'Agriculture',
    status: 'Planned',
    description: 'IoT solutions for smart farming to optimize water usage in arid regions.',
    imgId: 'hero-sustainability'
  }
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-accent mb-4">Our Projects</h1>
              <p className="text-muted-foreground text-lg">Concrete actions that transform ideas into reality. Explore our portfolio of innovation and sustainability.</p>
            </div>
            <div className="flex space-x-2">
               <Badge className="bg-primary hover:bg-primary/90 text-white px-4 py-2 cursor-pointer">All</Badge>
               <Badge variant="outline" className="border-accent text-accent px-4 py-2 cursor-pointer hover:bg-accent/5">Ongoing</Badge>
               <Badge variant="outline" className="border-accent text-accent px-4 py-2 cursor-pointer hover:bg-accent/5">Completed</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const projectImg = PlaceHolderImages.find(img => img.id === project.imgId);
              return (
                <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
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
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
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
