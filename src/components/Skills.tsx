import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiGit,
  SiPython,
  SiAmazonwebservices,
  SiLinux,
  SiSpringboot,
  SiGitlab
} from 'react-icons/si';
import { FaJava, FaHtml5 } from 'react-icons/fa';

const skillIcons = [
  { name: 'Java', icon: FaJava, color: '#ea2d2e' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#47A248' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'HTML', icon: FaHtml5, color: '#e34c26' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'SQL', icon: SiMysql, color: '#00758f' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'Linux', icon: SiLinux, color: '#000000' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'GitLab', icon: SiGitlab, color: '#FC6D27' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Competencies</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-3xl mx-auto">
            {skillIcons.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="skill-box text-3xl md:text-4xl">
                  <IconComponent style={{ color: skill.color }} />
                  <span className="skill-tooltip">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
