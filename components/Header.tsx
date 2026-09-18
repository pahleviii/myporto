'use client';

import Link from 'next/link';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export default function Header() {
  const scrollDir = useScrollDirection(8);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm',
        'transition-transform duration-300 ease-in-out',
        scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-text">
              Reza Pahlevi
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-text-muted hover:text-text transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-text-muted hover:text-text transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-text-muted hover:text-text transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-text-muted hover:text-text transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border hover:bg-surface transition-colors rounded-md text-sm"
            >
              Resume
            </a>
            <a
              href="mailto:reza35553@gmail.com"
              className="px-4 py-2 bg-accent text-white hover:bg-accent-hover transition-colors rounded-md text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
