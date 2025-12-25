import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for each project card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Projects data
  const projects = [
    {
      title: 'Advanced Task Management System',
      description: 'A full-stack task management platform with role-based access control, task assignment, progress tracking, analytics dashboards, and downloadable Excel reports. Features protected routes, CRUD operations, and profile management for streamlined team collaboration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  githubLink: 'https://github.com/naveed689/Task-Manager',
      liveLink: 'https://demo-taskmanagement.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Public Transportation Route Planner',
      description: 'A console-based route planner for buses and trains using arrays and graph algorithms. Includes traffic congestion identification, most populated station detection, and an interactive interface for users to input source and destination stations.',
      techStack: ['C', 'Data Structures', 'Graph Algorithms'],
      githubLink: 'https://github.com/hakarie/DSproject',
      liveLink: null,
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen w-full bg-white py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 flex items-center justify-center" style={{ marginTop: '240px' }}>
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
            My <span className="text-blue-600">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600"
            style={{ marginBottom: '80px', maxWidth: '768px', textAlign: 'center' }}
          >
            Explore my projects
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col" style={{ padding: '32px' }}>
                {/* Gradient Header */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-xl`} style={{ marginBottom: '24px', marginLeft: '-32px', marginRight: '-32px', marginTop: '-32px', width: 'calc(100% + 64px)' }}></div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '20px' }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-base leading-relaxed flex-grow" style={{ marginBottom: '24px' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ marginBottom: '28px' }}>
                  <h4 className="text-sm font-semibold text-gray-700" style={{ marginBottom: '12px' }}>Tech Stack:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                        style={{ padding: '8px 16px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  {/* GitHub Button */}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    style={{ padding: '14px 16px' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
