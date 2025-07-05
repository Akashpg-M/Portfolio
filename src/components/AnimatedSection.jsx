import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <motion.section
      id={id}
      className="py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
