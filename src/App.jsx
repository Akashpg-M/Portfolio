import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const App = () => {
  return (
    <div className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="technologies">
          <Technologies />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Certificates />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </main>

      <footer className="border-t border-light-accent/20 dark:border-dark-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
            <a
              href="mailto:waybooster.pg@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full bg-light-background-alt dark:bg-dark-background-alt hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://github.com/Akashpg-M"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-light-background-alt dark:bg-dark-background-alt hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="http://www.linkedin.com/in/akash-m-50951828a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-light-background-alt dark:bg-dark-background-alt hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-light-text-alt dark:text-dark-text-alt">
            &copy; {new Date().getFullYear()} Akash M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;