import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          // Account for fixed header by offsetting the final scroll position
          const header = document.querySelector('header');
          const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 4; // small extra spacing
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    // Scroll on mount if there's a hash
    scrollToHash();

    // Scroll when hash changes (e.g., header links)
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
