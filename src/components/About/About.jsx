import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center"
  style={{ marginTop: '30px' }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full mx-auto text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
          style={{ marginBottom: '60px' }}
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

    {/* Description Lines */}
    <div className="space-y-4">
          <motion.p
            variants={itemVariants}
      className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-normal"
          >
            Motivated IT undergraduate from Anna University with a solid grasp of
            Data Structures and Algorithms.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-normal"
          >
            Passionate about problem-solving and building impactful tech solutions.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-normal"
          >
            Quick learner with a strong interest in emerging technologies and continuous self-improvement.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
