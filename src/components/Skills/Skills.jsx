import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiC, SiNodedotjs } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for each skill card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Skills data with React Icons
  const skills = [
    {
      name: 'HTML',
      icon: FaHtml5,
      color: 'from-orange-400 to-orange-600',
      iconColor: '#E34F26',
      description: 'Semantic markup & accessibility'
    },
    {
      name: 'CSS',
      icon: FaCss3Alt,
      color: 'from-blue-400 to-blue-600',
      iconColor: '#1572B6',
      description: 'Modern layouts & animations'
    },
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      color: 'from-yellow-400 to-yellow-600',
      iconColor: '#F7DF1E',
      description: 'ES6+ & async programming'
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: 'from-green-500 to-green-700',
      iconColor: '#339933',
      description: 'Server-side JavaScript & APIs'
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'from-cyan-400 to-cyan-600',
      iconColor: '#61DAFB',
      description: 'Hooks, Context & Performance'
    },
    {
      name: 'Java',
      icon: FaJava,
      color: 'from-red-400 to-red-600',
      iconColor: '#007396',
      description: 'OOP & Backend Development'
    },
    {
      name: 'C',
      icon: SiC,
      color: 'from-indigo-400 to-indigo-600',
      iconColor: '#00599C',
      description: 'Procedural programming & Data Structures'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      color: 'from-blue-500 to-blue-700',
      iconColor: '#4479A1',
      description: 'Database Design & Queries'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'from-green-500 to-green-700',
      iconColor: '#47A248',
      description: 'NoSQL & Document Storage'
    },
    {
      name: 'Bootstrap',
      icon: FaBootstrap,
      color: 'from-purple-400 to-purple-600',
      iconColor: '#7952B3',
      description: 'Responsive UI Framework'
    },
  ];

  return (
  <section id="skills" className="relative min-h-screen w-full bg-gray-50 py-8 md:py-10 lg:py-14 px-6 md:px-12 lg:px-24 flex items-center justify-center mt-14">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center w-full flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            style={{ marginBottom: '40px' }}
          >
            My <span className="text-blue-600">Skills</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600"
            style={{ marginBottom: '46px', maxWidth: '768px', textAlign: 'center' }}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  place-items-center"
          style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative group w-full max-w-xs"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/50 h-full flex flex-col items-center text-center">
                  {/* Icon with React Icons */}
                  <div className="w-20 h-20 mt-[8px] rounded-2xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-16 h-16"
                      style={{ color: skill.iconColor }}
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-normal">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom spacing decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <motion.div 
            style={{
              display: 'inline-block',
              paddingLeft: '48px',
              paddingRight: '48px',
              paddingTop: '24px',
              paddingBottom: '24px',
              background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.25rem',
            }}
            animate={{
              boxShadow: [
                "0 10px 40px rgba(59, 130, 246, 0.3)",
                "0 10px 60px rgba(6, 182, 212, 0.4)",
                "0 10px 40px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Always Learning & Growing 🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
