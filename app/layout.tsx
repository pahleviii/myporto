import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reza Pahlevi — Software/Web Developer',
  description: 'Personal portfolio showcasing software and web development projects by Reza Pahlevi.',
  keywords: ['software developer', 'web developer', 'portfolio', 'Reza Pahlevi', 'Next.js', 'React'],
  authors: [{ name: 'Reza Pahlevi' }],
  openGraph: {
    type: 'website',
    title: 'Reza Pahlevi — Software/Web Developer',
    description: 'Personal portfolio showcasing software and web development projects.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}