import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, FileText, Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          About Me
        </motion.h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem', marginTop: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ flex: '1 1 500px', maxWidth: '700px' }}
          >
            <p style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Hi, my name is
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: '1.1', marginBottom: '10px' }} className="glow-text">
              ASAD KHAN
            </h2>
            <h3 style={{ fontSize: 'clamp(22px, 4vw, 36px)', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>
              Data Analyst | Business Intelligence Enthusiast
            </h3>

            <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                I'm a Data Analyst specializing in Data Science, business intelligence, and data visualization.
                I transform raw operational data into actionable insights that help organizations make smarter decisions.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Currently pursuing BS Data Science at the University of Sindh, Jamshoro, and working as a
                Data Science Intern at Technify (PSEB-Registered), where I contribute to real-world analytics
                projects and live deliverables.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                My focus areas include Excel dashboards, KPI reporting, SQL-based analysis, and building
                business-ready visualizations for stakeholders in healthcare and fintech domains.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn-primary btn-solid">
                <Database size={20} /> View Projects
              </Link>
              <Link to="/resume" className="btn-primary">
                <FileText size={20} /> View Resume
              </Link>
              <Link to="/contact" className="btn-primary">
                <Mail size={20} /> Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '1/1',
              borderRadius: '20px',
              background: 'var(--surface-color)',
              border: '2px solid var(--primary-color)',
              boxShadow: '0 0 30px rgba(102, 252, 241, 0.2)',
              overflow: 'hidden',
            }}>
              <img
                src="/profile.png"
                alt="Asad Khan"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
