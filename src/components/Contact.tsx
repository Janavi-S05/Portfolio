import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>

          {/* Email CTA */}
          <a
            href="mailto:janavisivakumar05@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity mb-8"
          >
            <Send size={18} />
            Say Hello
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:janavisivakumar05@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground transition-all duration-300 card-shadow-hover"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/janavi-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground transition-all duration-300 card-shadow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Janavi-S05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground transition-all duration-300 card-shadow-hover"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
