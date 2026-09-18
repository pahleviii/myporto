import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import QuoteBanner from '@/components/QuoteBanner';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <QuoteBanner />
      <Skills />
      <ProjectGrid />
      <Footer />
    </main>
  );
}