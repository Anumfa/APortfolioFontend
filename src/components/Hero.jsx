import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
        
        {/* Text Content */}
        <div style={{ flex: '1 1 500px', maxWidth: '800px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '1rem' }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: '1.1', marginBottom: '10px' }}
            className="glow-text"
          >
            ASAD KHAN.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: 'clamp(30px, 6vw, 60px)', color: 'var(--secondary-color)', lineHeight: '1.1', marginBottom: '20px' }}
          >
            I build data-driven insights.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem' }}
          >
            I'm a Data Analyst specializing in Data Science, business intelligence, and data visualization. 
            Currently pursuing BS Data Science and working as a Data Science Intern at Technify.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn-primary btn-solid">
              <Database size={20} /> View Projects
            </Link>
            <Link to="/about" className="btn-primary">
              <Terminal size={20} /> About Me
            </Link>
          </motion.div>
        </div>

        {/* Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1/1',
            borderRadius: '20px',
            background: 'var(--surface-color)',
            border: '2px solid var(--primary-color)',
            boxShadow: '0 0 30px rgba(102, 252, 241, 0.2)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/profile.png" 
              alt="Asad Khan" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 10 }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Fallback Icon if image is missing */}
            <div style={{ textAlign: 'center', zIndex: 1, padding: '20px' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
               </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
