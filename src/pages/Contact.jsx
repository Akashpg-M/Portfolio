import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    name: 'Email',
    icon: <FaEnvelope className="text-3xl" />,
    href: 'mailto:waybooster.pg@gmail.com',
    ariaLabel: 'Send an email',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-3xl" />,
    href: 'http://www.linkedin.com/in/akash-m-50951828a',
    ariaLabel: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-3xl" />,
    href: 'https://github.com/Akashpg-M',
    ariaLabel: 'View GitHub profile',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode className="text-3xl" />,
    href: 'https://leetcode.com/u/A_k_a_s_h_m/',
    ariaLabel: 'Check LeetCode profile',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function Contact() {
  return (
    <AnimatedSection>
      <div id="contact">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500">
            Get In Touch
          </h2>
          <p className="text-lg text-light-text-alt dark:text-dark-text-alt mb-12">
            I'm open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="flex flex-col items-center justify-center p-6 rounded-lg 
                          bg-light-background-alt dark:bg-dark-background-alt 
                          shadow-md hover:shadow-lg 
                          text-light-text-alt dark:text-dark-text-alt 
                          hover:text-light-accent dark:hover:text-dark-accent 
                          transition-all duration-300"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {link.icon}
              <span className="mt-2 text-sm font-medium">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}