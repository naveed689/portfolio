import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'service_st2oy0h';
    const TEMPLATE_ID = 'template_wndyeqd';
    const PUBLIC_KEY = '8FU2P4F3j9gmUTxMl';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setFormStatus('Failed to send message. Please try again. 😞');
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full bg-gray-50 py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 flex items-center justify-center"
      style={{ marginTop: '240px' }}
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center w-full flex flex-col items-center">
          <motion.h2
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            style={{ marginBottom: '40px' }}
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600"
            style={{ marginBottom: '80px', maxWidth: '768px', textAlign: 'center' }}
          >
            Have a question? Feel free to reach out!
          </motion.p>
        </div>

        {/* Contact Form */}
        <div className="w-full flex justify-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full max-w-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Name Field */}
              <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '12px' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                style={{ padding: '12px 16px' }}
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '12px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                style={{ padding: '12px 16px' }}
                placeholder="your.email@example.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700" style={{ marginBottom: '12px' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                style={{ padding: '12px 16px' }}
                placeholder="Your message..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? 'none' : '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                style={{ padding: '14px 48px', minWidth: '200px', maxWidth: '300px' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>

            {/* Status Message */}
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center font-medium ${formStatus.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}
              >
                {formStatus}
              </motion.div>
            )}
          </form>
        </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="mt-16">
          {/* LinkedIn */}
          <motion.div className="text-center mb-8">
            <p className="text-gray-600 mb-4">Connect with me on:</p>
            <motion.a
              href="https://www.linkedin.com/in/naveedahmeds/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-12 h-12 items-center justify-center bg-white rounded-full transition-all duration-300"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
            </motion.a>
          </motion.div>

          {/* Phone Number */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-full">
                <FaPhone className="text-xl text-green-600" />
              </div>
              <span className="text-lg font-medium text-gray-800">+91 7358118008</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="mailto:naveedahmeds313@gmail.com"
              className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-full">
                <FaEnvelope className="text-xl text-red-500" />
              </div>
              <span className="text-lg font-medium text-gray-800">naveedahmeds313@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
