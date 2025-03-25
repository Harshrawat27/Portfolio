import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Dock } from '@/components/dock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developer & Solopreneur',
  description: 'Portfolio and blog of an indie hacker and solopreneur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className='min-h-screen bg-background text-foreground flex flex-col'>
            <main className='flex-1 mx-auto w-full max-w-[700px] px-4 pb-24'>
              {children}
            </main>
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
