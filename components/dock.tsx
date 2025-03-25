'use client';

import type React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Newspaper, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export function Dock() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  // Fix for hydration mismatch with theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/thoughts', icon: Newspaper, label: 'Thoughts' },
    { href: '/projects', icon: Briefcase, label: 'Projects' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ];

  // Apple-style dock magnification effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current) return;

    const dock = dockRef.current;
    const dockRect = dock.getBoundingClientRect();
    const dockItems = Array.from(dock.querySelectorAll('.dock-item'));

    dockItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;

      // Calculate distance from mouse to item center
      const distanceFromMouseX = e.clientX - itemCenter;

      // Max distance to apply effect (in pixels)
      const maxDistance = 100;

      // Calculate scale based on distance (closer = larger)
      let scale = 1;
      if (Math.abs(distanceFromMouseX) < maxDistance) {
        // Create a bell curve effect
        scale = 1 + (1 - Math.abs(distanceFromMouseX) / maxDistance) * 0.5;
      }
      // Apply transform
      (item as HTMLElement).style.transform = `scale(${scale})`;
    });
  };

  const handleMouseLeave = () => {
    if (!dockRef.current) return;

    // Reset all items to normal size
    const dockItems = Array.from(
      dockRef.current.querySelectorAll('.dock-item')
    );
    dockItems.forEach((item) => {
      (item as HTMLElement).style.transform = 'scale(1)';
    });
  };

  if (!mounted) {
    return (
      <div className='fixed bottom-6 left-0 right-0 flex justify-center'>
        <div className='bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center gap-8 shadow-lg'>
          {/* Loading placeholder */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className='w-6 h-6 opacity-50' />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='fixed bottom-6 left-0 right-0 flex justify-center'>
      <div
        ref={dockRef}
        className='bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center gap-8 shadow-lg'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'dock-item flex flex-col items-center gap-1 transition-all duration-200',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className='w-6 h-6' />
              <span className='text-xs font-medium'>{link.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className='dock-item flex flex-col items-center gap-1 text-muted-foreground transition-all duration-200'
        >
          {resolvedTheme === 'dark' ? (
            <>
              <Sun className='w-6 h-6' />
              <span className='text-xs font-medium'>Light</span>
            </>
          ) : (
            <>
              <Moon className='w-6 h-6' />
              <span className='text-xs font-medium'>Dark</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
