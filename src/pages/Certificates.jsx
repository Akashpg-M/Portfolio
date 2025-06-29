import { motion } from 'framer-motion';
import { Certificates as CertificateData } from '../constants';
import AnimatedSection from "../components/AnimatedSection";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

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

const Certificates = () => {
  const { isDarkMode } = useTheme();
  console.log('Certificates rendering, isDarkMode:', isDarkMode); // Debug theme
  console.log('CertificateData:', CertificateData); // Debug CertificateData array

  return (
    <AnimatedSection>
      <div id="certificates" className="py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-blue-500">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {CertificateData.length > 0 ? (
            CertificateData.map((certificate, index) => (
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
                custom={index}

                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 text-light-text dark:text-dark-text">
                    {certificate.title}
                  </h3>
                  <p className="text-sm font-medium text-light-primary dark:text-dark-primary mb-3">
                    {certificate.provider}
                  </p>
                  <p className="text-light-text-alt dark:text-dark-text-alt mb-4 flex-grow">
                    {certificate.description}
                  </p>

                  {certificate.certificateLink && (
                    <div className="mt-auto pt-4 border-t border-light-accent/20 dark:border-dark-accent/20">
                      <a
                        href={certificate.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-light-accent dark:text-dark-accent font-semibold hover:underline"
                      >
                        <FaExternalLinkAlt />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-light-text-alt dark:text-dark-text-alt">
              No certificates available
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certificates;