import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
              Data Science Intern
            </h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>
              Technify, Pakistan (PSEB-Registered) | Jun 2026 – Present
            </p>
            <ul style={{ listStylePosition: 'inside' }}>
              <li>Contributed to real-world data science projects, collaborating directly with the Development Team Lead on live deliverables.</li>
              <li>Applied data analysis and industry best practices to support business objectives; maintained end-to-end data workflows.</li>
              <li>Tools: Microsoft Excel, Data Analysis, Data Visualization, Industry Best Practices.</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
              BS Data Science (BS-DS)
            </h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>
              University of Sindh, Jamshoro, Pakistan | 2023 – Present
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>
              Relevant Coursework: Statistics, Database Management, Data Visualization, Business Analytics, Machine Learning Fundamentals
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
