import { Badge } from './ui/badge';

const experienceData = [
  {
    company: 'Tejas Networks',
    role: 'Software R&D Engineer',
    duration: 'July 2024',
    highlights: [
      'Refactored and optimized core Java modules, improving system reliability and performance',
      'Enhanced the automation framework by adding continuous test execution with real-time log ingestion and asynchronous telnet using a thread-safe queue, boosting debugging speed.',
      'Built and streamlined GitLab CI/CD pipelines, reducing manual steps and speeding up deployments.'
    ],
    technologies: ['Java', 'SpringBoot', 'Linux', 'Apache Tomcat', 'Python', 'GitLab', 'REST APIs']
  },
  {
    company: 'Tejas Networks',
    role: 'R&D Intern',
    duration: 'Jan - June 2024',
    highlights: [
      'Designed and tested REST APIs in Python, integrating unit tests, improving efficiency.',
      'Implemented multithreading in the framework to parallelize operations and reduce redundant API calls, improving test execution speed.',
      'Improved data-processing flows and SQL query efficiency, increasing overall data throughput.'
    ],
    technologies: ['Python', 'SAS Framework', 'Linux', 'Git', 'REST APIs', 'L2/GPON', 'Wireshark','Spirent']
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">Building and learning through hands-on industry experience</p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {experienceData.map((work, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden card-shadow card-shadow-hover group relative"
              >
                {/* Top gradient bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Header */}
                <div className="p-5 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{work.company}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{work.role}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                    {work.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <ul className="space-y-3 mb-5">
                    {work.highlights.map((highlight, idx) => (
                      <li key={idx} className="relative pl-5 text-sm text-muted-foreground leading-relaxed">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gradient-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {work.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-accent/50 text-accent-foreground hover:bg-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
