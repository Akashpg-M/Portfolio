import { PROJECTS } from "../constants";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  console.log('Projects rendering, isDarkMode:', isDarkMode); // Debug theme
  console.log('PROJECTS:', PROJECTS); // Debug PROJECTS array

  return (
    <AnimatedSection>
      <div id="projects">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {PROJECTS.length > 0 ? (
            PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                className="mt-10 group flex flex-col rounded-lg bg-background dark:bg-dark-card/80 border border-light-border/20 dark:border-white/10 transition-all duration-300"
                style={{
                  boxShadow: isDarkMode
                    ? '0 4px 20px rgba(255, 255, 255, 0.15)'
                    : '0 2px 10px rgba(0, 0, 0, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 8px 30px rgba(255, 255, 255, 0.25)'
                    : '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 4px 20px rgba(255, 255, 255, 0.15)'
                    : '0 2px 10px rgba(0, 0, 0, 0.15)';
                }}
                variants={projectVariants}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{project.title}</h3>
                  <p className="text-light-text-alt dark:text-dark-text-alt mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-light-primary/10 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.link || project.github) && (
                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-light-accent/20 dark:border-dark-accent/20">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-light-accent dark:text-dark-accent font-semibold hover:underline"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-light-text-alt dark:text-dark-text-alt hover:text-light-accent dark:hover:text-dark-accent"
                        >
                          <FaGithub size={20} />
                          <span>GitHub Link</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-light-text-alt dark:text-dark-text-alt">
              No projects available
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;