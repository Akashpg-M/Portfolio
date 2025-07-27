import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { HERO_CONTENT } from "../constants";

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: "http://www.linkedin.com/in/akash-m-50951828a", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/Akashpg-M", label: "GitHub" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/A_k_a_s_h_m/", label: "LeetCode" },
  ];

  const [text] = useTypewriter({
    words: ['Software Developer'],
    typeSpeed: 60,
    deleteSpeed: 0,
    delaySpeed: 1000,
    loop: 1,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="mt-2 sm:mt-10 text-4xl sm:text-6xl md:text-7xl font-bold text-light-text dark:text-dark-text pb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm <span className="text-blue-500 whitespace-nowrap">Akash M</span>
        </motion.h1>

        {/*Static Typewriter Line for "Software Engineer" */}
        <motion.h2
          className="text-2xl sm:text-3xl text-light-text dark:text-dark-text min-h-[2rem] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {text}
          <span className="text-blue-500">|</span>
        </motion.h2>

        {/*Rotating Typewriter Sentences */}
        <motion.div
          className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-light-text/80 dark:text-dark-text/80 min-h-[2.5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Typewriter
            words={[
              "Specialization in IOT",
              "Full-stack developer",
              "Actively learning emerging trends in Artificial Intelligence",
              "Exploring cloud computing, real-time applications, cloud-native architecture and distributed systems",
              "Problem solver.",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-light-text/80 dark:text-dark-text/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          {HERO_CONTENT}
        </motion.div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <button
            onClick={scrollToProjects}
            className="group relative mt-5 inline-flex items-center px-8 py-3.5 overflow-hidden rounded-full 
                      bg-black dark:bg-white 
                      text-white dark:text-black
                      font-semibold shadow-lg hover:shadow-xl hover:scale-105 
                      transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10 flex items-center">
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="/Portfolio/Resume.pdf"
            download="Akash_M_Resume.pdf"
            className="group relative mt-5 ml-4 inline-flex items-center px-8 py-3.5 overflow-hidden rounded-full 
                        bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 
                        transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10 flex items-center">
              Download Resume
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group relative p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm 
              transition-all duration-300 hover:scale-110
              border border-light-border/50 dark:border-white/10
              shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="text-light-text-alt dark:text-dark-text-alt group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300 text-xl">
                {link.icon}
              </span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium text-light-text-alt dark:text-dark-text-alt whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
