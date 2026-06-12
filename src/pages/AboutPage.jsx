import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderOpen, FileText, Mail } from 'lucide-react';
import ProfileImage from '../components/ui/ProfileImage';
import { resumeData } from '../data/resume';

const AboutPage = () => (
  <div className="section page-top">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="section-header">
        <h1 className="section-title">About Me</h1>
      </motion.div>

      <div className="hero-grid reverse" style={{ marginTop: '1rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="about-content"
        >
          <p style={{ color: 'var(--primary-color)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '0.75rem' }}>Hi, my name is</p>
          <h2 className="glow-text" style={{ fontSize: 'clamp(28px, 6vw, 56px)', lineHeight: 1.1, marginBottom: '8px' }}>
            ASAD KHAN
          </h2>
          <h3 style={{ fontSize: 'clamp(18px, 4vw, 32px)', color: 'var(--secondary-color)', marginBottom: '1.25rem' }}>
            {resumeData.title}
          </h3>

          <div className="glass-panel" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <p style={{ lineHeight: 1.8, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{resumeData.summary}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--secondary-color)' }}>
              {resumeData.location} · {resumeData.availability}
            </p>
          </div>

          <div className="btn-group btn-group-left">
            <Link to="/projects" className="btn-primary btn-solid"><FolderOpen size={18} /> View Projects</Link>
            <Link to="/resume" className="btn-primary"><FileText size={18} /> View Resume</Link>
            <Link to="/contact" className="btn-primary"><Mail size={18} /> Contact Me</Link>
          </div>
        </motion.div>

        <ProfileImage maxWidth={360} />
      </div>
    </div>
  </div>
);

export default AboutPage;
