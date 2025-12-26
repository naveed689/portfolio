import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import TypingEffect from './TypingEffect';

const Hero = () => {
  // Animation variants for fade-in and slide-up effects
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
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div id="home" className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Aurora Background Animation - Multiple animated gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 py-16 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading with fade-in animation */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 text-center  leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <motion.span 
            className="text-blue-600 inline-block"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
            }}
          >
            Naveed
          </motion.span>
        </motion.h1>

        {/* Subheading with typing effect */}
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 text-center   min-h-[4rem] md:min-h-[5rem] flex items-center justify-center"
          variants={itemVariants}
        >
          <TypingEffect 
            text="React & Java Developer"
            speed={80}
            delay={2500}
            className="text-gray-700"
          />
        </motion.div>

        {/* Decorative scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-gray-400 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
