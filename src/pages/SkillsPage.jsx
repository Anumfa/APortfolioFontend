import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const SkillsPage = () => (
  <div className="page-top" style={{ paddingTop: '100px' }}>
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {resumeData.skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel"
            >
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{skill.category}</h3>
              <ul style={{ listStyle: 'none' }}>
                {skill.items.map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                    <span style={{ color: 'var(--secondary-color)', flexShrink: 0 }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default SkillsPage;
