import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const ExperiencePage = () => (
  <div className="page-top" style={{ paddingTop: '100px' }}>
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel">
            <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{resumeData.experience.role}</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              {resumeData.experience.company} | {resumeData.experience.period}
            </p>
            <ul style={{ listStylePosition: 'inside', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              {resumeData.experience.points.map((p) => (
                <li key={p} style={{ marginBottom: '0.35rem' }}>{p}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel">
            <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{resumeData.education.degree}</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              {resumeData.education.school} | {resumeData.education.period}
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              Relevant Coursework: {resumeData.education.coursework}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default ExperiencePage;
