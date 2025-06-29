import {
  SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus, SiHtml5,
  SiTailwindcss, SiMongodb, SiPrisma, SiPostgresql, SiMysql, SiExpress, SiGithub
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const technologies = [
  {
    title: "Languages",
    items: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiPython />, name: "Python" },
      { icon: <DiJava />, name: "Java" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiC />, name: "C" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { icon: <RiReactjsLine />, name: "React" },
      { icon: <TbBrandNextjs />, name: "Next.js" },
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { icon: <SiGithub />, name: "GitHub" },
    ],
  },
];

const iconVariants = {
  initial: { y: 0 },
  hover: { y: -5 },
};

const colorMap = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#EA2D2E',
  'C++': '#00599c',
  C: '#00599c',
  React: '#61dafb',
  'Next.js': '#000000',
  HTML5: '#e34f26',
  'Tailwind CSS': '#38bdf8',
  'Node.js': '#68a063',
  'Express.js': '#000000',
  'Prisma ORM': '#0c344b',
  MongoDB: '#47a248',
  PostgreSQL: '#336791',
  MySQL: '#00758f',
  GitHub: '#181717',
};


const TechItem = ({ icon, name }) =>{ 
  const color = colorMap[name] || 'currentColor';

  return (
    <motion.div 
      className="relative group flex flex-col items-center justify-center p-4 rounded-lg 
              bg-light-background-alt dark:bg-dark-card/80 
              shadow-md hover:shadow-lg transition-all duration-300
              border border-light-border/20 dark:border-white/10
              dark:before:absolute dark:before:inset-0 dark:before:rounded-lg dark:before:pointer-events-none
              dark:before:transition-all dark:before:duration-300 dark:hover:before:opacity-100 dark:before:opacity-0
              dark:before:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl mb-2 text-light-text-alt dark:text-dark-text-alt 
                    group-hover:text-light-accent dark:group-hover:text-dark-primary 
                    transition-colors duration-300"
            style={{ color }}
        >
          {icon}
        </div>
        <p className="text-sm font-medium text-light-text dark:text-dark-text">{name}</p>
      </div>
    </motion.div>
  )
};

const Technologies = () => {
  return (
    <AnimatedSection>
      <div>
        <h2 className="text-4xl font-bold text-center bg-clip-text bg-blue-500 text-transparent h-20">  
          Skills & Technologies
        </h2>

        <div className="space-y-12 max-w-6xl mx-auto px-4">
          {technologies.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-light-text dark:text-dark-text">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {section.items.map((tech, techIndex) => (
                  <TechItem key={techIndex} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Technologies;
