import { Code2, Database, Cloud, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'LeetCode Problems', value: '400+' },
  { label: 'GFG Patterns', value: '10+' },
  { label: 'Projects Built', value: '10+' },
];

const highlights = [
  { icon: Code2, title: 'Full-Stack Dev', desc: 'React, Node.js, Express' },
  { icon: Database, title: 'Database', desc: 'SQL, MongoDB' },
  { icon: Cloud, title: 'Backend & Cloud', desc: 'Scalable Solutions' },
  { icon: Lightbulb, title: 'Problem Solving', desc: 'DSA & Algorithms' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-card rounded-lg card-shadow">
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="bg-card rounded-xl p-6 md:p-8 card-shadow mb-12">
            <p className="text-muted-foreground leading-relaxed">
              I’m a software developer who enjoys learning by building efficient, scalable applications.  
              I work with modern technologies and like solving practical problems while continuously improving my skills. 
              My focus is on writing clean, maintainable code and building applications that work reliably in real-world scenarios.

            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="bg-card p-4 rounded-lg card-shadow card-shadow-hover text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground mb-3">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
