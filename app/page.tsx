import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-16 py-10'>
      {/* Hero Section */}
      <section className='space-y-6'>
        <div className='flex flex-col items-center text-center space-y-4'>
          <div className='relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary'>
            <Image
              src='https://pbs.twimg.com/profile_images/1801314519765151744/4RMIBbCJ_400x400.jpg'
              alt='Profile'
              fill
              className='object-cover'
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold'>John Developer</h1>
            <p className='text-muted-foreground'>Developer & Solopreneur</p>
          </div>
          <div className='flex gap-3'>
            <Link href='https://twitter.com' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Twitter className='h-5 w-5' />
              </Button>
            </Link>
            <Link href='https://github.com' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Github className='h-5 w-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-bold'>About Me</h2>
        <p className='text-muted-foreground leading-relaxed'>
          I'm a passionate developer and indie hacker focused on building
          products that solve real problems. With over 5 years of experience in
          web development, I've launched several side projects while working
          with startups to bring their ideas to life.
        </p>
        <div className='flex flex-wrap gap-2 pt-2'>
          <Badge>JavaScript</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Node.js</Badge>
          <Badge>Product Design</Badge>
          <Badge>Indie Hacking</Badge>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Featured Projects</h2>
          <Link href='/projects'>
            <Button variant='ghost' size='sm' className='gap-1'>
              View all <ArrowRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>

        <div className='grid gap-6'>
          <Card>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-lg'>ProjectName</h3>
                    <Badge>SaaS</Badge>
                  </div>
                  <p className='text-muted-foreground'>
                    A productivity tool for developers that helps manage time
                    and tasks efficiently.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <Button size='sm'>Visit Site</Button>
                  <Button size='sm' variant='outline'>
                    Case Study
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-lg'>AppName</h3>
                    <Badge>Mobile App</Badge>
                  </div>
                  <p className='text-muted-foreground'>
                    An iOS and Android app for tracking daily habits and
                    building routines.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <Button size='sm'>Visit Site</Button>
                  <Button size='sm' variant='outline'>
                    Case Study
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Recent Posts</h2>
          <Link href='/blog'>
            <Button variant='ghost' size='sm' className='gap-1'>
              View all <ArrowRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>

        <div className='grid gap-6'>
          <Link href='/blog/post-1' className='block group'>
            <article className='space-y-2 p-4 rounded-lg transition-colors group-hover:bg-muted/50'>
              <div className='space-y-1'>
                <h3 className='font-bold text-lg group-hover:text-primary transition-colors'>
                  How I Built and Launched My First SaaS in 30 Days
                </h3>
                <p className='text-sm text-muted-foreground'>March 15, 2024</p>
              </div>
              <p className='text-muted-foreground'>
                The complete journey from idea to paying customers, including
                all the challenges and lessons learned along the way.
              </p>
            </article>
          </Link>

          <Link href='/blog/post-2' className='block group'>
            <article className='space-y-2 p-4 rounded-lg transition-colors group-hover:bg-muted/50'>
              <div className='space-y-1'>
                <h3 className='font-bold text-lg group-hover:text-primary transition-colors'>
                  5 Tools Every Solopreneur Should Use in 2024
                </h3>
                <p className='text-sm text-muted-foreground'>
                  February 28, 2024
                </p>
              </div>
              <p className='text-muted-foreground'>
                A curated list of the most effective tools that have helped me
                automate and scale my business as a solo founder.
              </p>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}
