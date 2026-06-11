import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}
        >
          <h1 className="section-title" style={{ marginBottom: 0 }}>Resume</h1>
          <a href="/resume.pdf" download className="btn-primary btn-solid" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Download size={18} /> Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel"
          style={{ lineHeight: '1.7' }}
        >
          <header style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(102, 252, 241, 0.2)' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Asad Khan</h2>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>Data Analyst | Business Intelligence</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.95rem' }}>
              <a href="mailto:aasad9736@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                <Mail size={16} /> aasad9736@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/data-analyst-asad-khan07" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                <Globe size={16} /> LinkedIn
              </a>
              <a href="https://wa.me/923170395740" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                <Phone size={16} /> +92 317 0395740
              </a>
            </div>
          </header>

          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Professional Summary</h3>
            <p>
              Data Analyst specializing in business intelligence, data visualization, and Excel dashboard development.
              Experienced in transforming raw operational data into actionable insights for healthcare and fintech domains.
              Currently pursuing BS Data Science while contributing to real-world analytics projects as a Data Science Intern.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Experience</h3>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-light)' }}>Data Science Intern</strong>
              <p style={{ color: 'var(--secondary-color)', margin: '0.25rem 0 0.5rem' }}>Technify, Pakistan (PSEB-Registered) | Jun 2026 – Present</p>
              <ul style={{ paddingLeft: '1.25rem' }}>
                <li>Contributed to real-world data science projects with the Development Team Lead on live deliverables.</li>
                <li>Applied data analysis and industry best practices to support business objectives.</li>
                <li>Maintained end-to-end data workflows using Excel, visualization, and reporting tools.</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Education</h3>
            <div>
              <strong style={{ color: 'var(--text-light)' }}>BS Data Science (BS-DS)</strong>
              <p style={{ color: 'var(--secondary-color)', margin: '0.25rem 0 0.5rem' }}>University of Sindh, Jamshoro, Pakistan | 2023 – Present</p>
              <p style={{ fontStyle: 'italic' }}>
                Relevant Coursework: Statistics, Database Management, Data Visualization, Business Analytics, Machine Learning Fundamentals
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Technical Skills</h3>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li><strong>Data Analysis & BI:</strong> Microsoft Excel (Advanced), Power BI, Google Sheets, KPI Dashboards</li>
              <li><strong>Database & Querying:</strong> SQL, Data Cleaning, Data Wrangling</li>
              <li><strong>Visualization & Reporting:</strong> Data Visualization, Reporting & Analytics, Business Insights</li>
              <li><strong>Core Competencies:</strong> Analytical Thinking, Critical Thinking, Attention to Detail, Team Collaboration</li>
            </ul>
          </section>

          <section>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Featured Projects</h3>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-light)' }}>Digital Wallet Analytics Dashboard</strong>
              <p style={{ margin: '0.25rem 0 0.5rem' }}>
                Built an Excel BI dashboard tracking PKR 24.8M GMV, 5,000 transactions, and 95.1% success rate with interactive slicers and merchant cashback analysis.
              </p>
              <Link to="/project/digital-wallet" style={{ color: 'var(--primary-color)' }}>View project details →</Link>
            </div>
            <div>
              <strong style={{ color: 'var(--text-light)' }}>Hospital No-Show Crisis Analysis</strong>
              <p style={{ margin: '0.25rem 0 0.5rem' }}>
                Developed a color-coded Excel dashboard analyzing 12-month appointment no-show patterns, identifying crisis months at 89% and 100% no-show rates.
              </p>
              <Link to="/project/hospital-no-show" style={{ color: 'var(--primary-color)' }}>View project details →</Link>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
