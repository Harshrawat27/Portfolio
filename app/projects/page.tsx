import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'learNoted',
      category: 'Crome extension',
      description:
        'Transform how you browse with LearNoted. Look up words instantly, highlight important content, and save video timestamps—all in one dashboard. Your personal web learning assistant.',
      longDescription:
        'Built with Next.js, Chrome Extension, and MongoDB, this extension helps you browse seamlessly.',
      link: 'https://www.learnoted.com/',
      caseStudy: '/blog/project-case-study',
    },
    {
      id: 2,
      title: 'Territory Typer',
      category: 'Web App',
      description:
        'Typing websites are boring to make it fun. I created a mulitplayer game where you can type with you friends to win a territory',
      longDescription: 'Developed with websockets, JS, html and css',
      link: 'https://territory-typer-production.up.railway.app/',
      caseStudy: '/blog/app-case-study',
    },
  ];

  return (
    <div className='py-10 space-y-8'>
      <div className='space-y-4'>
        <Link href='/'>
          <Button variant='ghost' size='sm' className='gap-1'>
            <ArrowLeft className='h-4 w-4' /> Back home
          </Button>
        </Link>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <p className='text-muted-foreground'>
          A collection of my work as a developer and solopreneur.
        </p>
      </div>

      <div className='grid gap-6'>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>{project.title}</h2>
                    <Badge>{project.category}</Badge>
                  </div>
                  <p className='text-muted-foreground'>{project.description}</p>
                  {/* <p className='text-sm text-muted-foreground'>
                    {project.longDescription}
                  </p> */}
                </div>
                <div className='flex gap-2'>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button size='sm' className='gap-1'>
                      Visit <ExternalLink className='h-4 w-4' />
                    </Button>
                  </Link>
                  {/* <Link href={project.caseStudy}>
                    <Button size="sm" variant="outline">
                      Case Study
                    </Button>
                  </Link> */}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
