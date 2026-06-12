import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderOpen, User } from 'lucide-react';
import ProfileImage from '../components/ui/ProfileImage';

const Home = () => (
  <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
    <div className="container hero-grid">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--primary-color)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '0.75rem' }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glow-text"
          style={{ fontSize: 'clamp(32px, 8vw, 80px)', lineHeight: 1.1, marginBottom: '10px' }}
        >
          ASAD KHAN.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(22px, 5vw, 60px)', color: 'var(--secondary-color)', lineHeight: 1.1, marginBottom: '1.25rem' }}
        >
          I build data-driven insights.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '600px', marginBottom: '1.75rem', margin: '0 auto 1.75rem' }}
        >
          Data Analyst with a strong foundation in Data Science, business intelligence, and data visualization.
          Proficient in Excel, Power BI, SQL, and KPI dashboards — currently interning at Technify, Pakistan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="btn-group"
        >
          <Link to="/projects" className="btn-primary btn-solid">
            <FolderOpen size={18} /> View Projects
          </Link>
          <Link to="/about" className="btn-primary">
            <User size={18} /> About Me
          </Link>
        </motion.div>
      </div>
      <ProfileImage />
    </div>
  </section>
);

export default Home;
