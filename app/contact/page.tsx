import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, Send, Twitter, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='py-10 space-y-8'>
      <div className='space-y-4'>
        <Link href='/'>
          <Button variant='ghost' size='sm' className='gap-1'>
            <ArrowLeft className='h-4 w-4' /> Back home
          </Button>
        </Link>
        <h1 className='text-3xl font-bold'>Contact</h1>
        <p className='text-muted-foreground'>
          Get in touch for collaborations, questions, or just to say hello.
        </p>
      </div>

      <div className='grid gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='grid gap-4'>
                <div className='grid gap-2'>
                  <label htmlFor='name' className='text-sm font-medium'>
                    Name
                  </label>
                  <Input id='name' placeholder='Your name' />
                </div>
                <div className='grid gap-2'>
                  <label htmlFor='email' className='text-sm font-medium'>
                    Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='your.email@example.com'
                  />
                </div>
                <div className='grid gap-2'>
                  <label htmlFor='subject' className='text-sm font-medium'>
                    Subject
                  </label>
                  <Input id='subject' placeholder="What's this about?" />
                </div>
                <div className='grid gap-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    Message
                  </label>
                  <Textarea
                    id='message'
                    placeholder='Your message...'
                    rows={5}
                  />
                </div>
              </div>
              <Button className='w-full gap-2'>
                <Send className='h-4 w-4' /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='space-y-4'>
          <h2 className='text-xl font-bold'>Connect Elsewhere</h2>
          <div className='grid gap-4 sm:grid-cols-2'>
            <Link href='mailto:harshrawat.dev@gmail.com'>
              <Button variant='outline' className='w-full justify-start gap-2'>
                <Mail className='h-4 w-4' />
                harshrawat.dev@gmail.com{' '}
              </Button>
            </Link>
            <Link href='https://x.com/Harshrwt27' target='_blank'>
              <Button variant='outline' className='w-full justify-start gap-2'>
                <Twitter className='h-4 w-4' />
                @Harshrwt27
              </Button>
            </Link>
            <Link href='https://github.com/Harshrawat27' target='_blank'>
              <Button variant='outline' className='w-full justify-start gap-2'>
                <Github className='h-4 w-4' />
                github.com/Harshrawat27
              </Button>
            </Link>
            <Link
              href='https://www.linkedin.com/in/harsh-rawat-037a59202/'
              target='_blank'
            >
              <Button variant='outline' className='w-full justify-start gap-2'>
                <Linkedin className='h-4 w-4' />
                linkedin.com/in/harsh-rawat-037a59202
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
