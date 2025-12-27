import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import codeImg from "../assets/codGif.gif";

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/janavi-s/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Janavi-S05', label: 'GitHub' },
  { icon: Mail, href: 'mailto:janavisivakumar05@gmail.com', label: 'Email' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative dot-pattern">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-base font-mono text-primary mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hey there, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient">Janavi S</span>
          </h1>

          {/* Title */}
          <div className="text-xl md:text-2xl font-medium text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="flex items-center justify-center gap-2">Software Development Engineer <img src={codeImg} alt="code" style={{width:"30px", height: "25px"}} /> </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I’m continuously learning by building efficient, scalable applications and solving real-world problems along the way. 
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground transition-all duration-300 card-shadow-hover"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const id = 'projects';
                const el = document.getElementById(id);
                if (el) {
                  const header = document.querySelector('header');
                  const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
                  const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 4;
                  window.history.pushState(null, '', `#${id}`);
                  window.scrollTo({ top, behavior: 'smooth' });
                } else {
                  // fallback to change hash
                  window.location.hash = `#projects`;
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <FileText size={18} />
              View My Work
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
