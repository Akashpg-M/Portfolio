import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiGithub
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';


const TechItem = ({ icon: Icon, name, color }) => {
  const bgColor = color.replace('text-', '').replace(/([0-9]+)/, '$1/10');
  const borderColor = color.replace('text-', '').replace(/([0-9]+)/, '$1/30');
  
  return (
    <div className="group relative flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:bg-opacity-10 hover:backdrop-blur-sm"
         style={{
           '--bg-color': bgColor,
           '--border-color': borderColor
         }}>
      <div className="relative p-4 rounded-full mb-3 transition-all duration-300 group-hover:bg-[var(--bg-color)] group-hover:border group-hover:border-[var(--border-color)]">
        <Icon className={`text-4xl ${color} transition-transform duration-300 group-hover:scale-110`} />
      </div>
      <span className="text-sm font-medium text-center text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};


const Technologies = () => (
  <section id="technologies" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technologies I Work With
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-20">
        {/* Languages */}
        <Section title="Languages">
          <TechItem icon={SiJavascript} name="JavaScript" color="text-yellow-400" />
          <TechItem icon={SiTypescript} name="TypeScript" color="text-blue-400" />
          <TechItem icon={SiPython} name="Python" color="text-blue-400" />
          <TechItem icon={SiC} name="C" color="text-gray-300" />
          <TechItem icon={SiCplusplus} name="C++" color="text-blue-500" />
          <TechItem icon={DiJava} name="Java" color="text-red-500" />
        </Section>

        {/* Frontend */}
        <Section title="Frontend Development">
          <TechItem icon={SiHtml5} name="HTML5" color="text-orange-500" />
          <TechItem icon={RiReactjsLine} name="React" color="text-cyan-400" />
          <TechItem icon={TbBrandNextjs} name="Next.js" color="text-white" />
          <TechItem icon={SiTailwindcss} name="Tailwind CSS" color="text-sky-400" />
        </Section>

        {/* Backend */}
        <Section title="Backend Development">
          <TechItem icon={FaNodeJs} name="Node.js" color="text-green-500" />
          <TechItem icon={SiExpress} name="Express.js" color="text-gray-200" />
          <TechItem icon={SiPrisma} name="Prisma ORM" color="text-indigo-400" />
        </Section>

        {/* Databases */}
        <Section title="Databases">
          <TechItem icon={SiMongodb} name="MongoDB" color="text-green-500" />
          <TechItem icon={SiPostgresql} name="PostgreSQL" color="text-sky-500" />
          <TechItem icon={SiMysql} name="MySQL" color="text-blue-500" />
        </Section>

        {/* Tools */}
        <Section title="Development Tools">
          <TechItem icon={SiGithub} name="GitHub" color="text-gray-100" />
        </Section>
      </div>
    </div>
  </section>
);

const Section = ({ title, children }) => (
  <div className="mb-16">
    <div className="relative mb-10">
      <h3 className="relative z-10 inline-block px-4 py-2 text-lg font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900">
        {title}
      </h3>
      <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-gray-200 to-gray-200 dark:from-gray-700 dark:to-gray-700 -z-10"></div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
      {children}
    </div>
  </div>
);

export default Technologies;
