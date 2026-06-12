import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { resumeProjects } from '../data/resume';

const project = resumeProjects[0];

const DigitalWalletPage = () => (
  <div className="section page-top">
    <div className="container">
      <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel">
        <p style={{ color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Project Type
        </p>
        <h1 style={{ fontSize: 'clamp(1.35rem, 4vw, 2rem)', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{project.title}</h1>
        <p style={{ color: 'var(--secondary-color)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '2rem', fontWeight: 600 }}>
          {project.tool}
        </p>

        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid var(--secondary-color)', backgroundColor: 'var(--surface-color)' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
        </div>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Description</h3>
        {project.fullDescription.map((para) => (
          <p key={para} style={{ marginBottom: '1rem', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{para}</p>
        ))}

        <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem', marginTop: '1.5rem' }}>Key Features</h3>
        <ul style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {project.keyFeatures.map((feature) => (
            <li key={feature} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              <Check size={18} style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '2px' }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Tools & Technologies</h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{project.toolsTechnologies}</p>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Business Impact</h3>
        <p style={{ lineHeight: 1.8, fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: 'var(--primary-color)' }}>{project.businessImpact}</p>
      </motion.div>
    </div>
  </div>
);

export default DigitalWalletPage;
