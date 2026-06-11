import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectPage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
        >
          <h1 style={{ color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Hospital No-Show Crisis Analysis
          </h1>
          <p style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 'bold' }}>
            Healthcare Data Analytics | Excel Dashboard
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '1px solid var(--secondary-color)',
              backgroundColor: 'var(--surface-color)',
            }}>
              <img
                src="/hospital-no-show.png"
                alt="Hospital No-Show Crisis Analysis Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Description</h3>
            <p style={{ marginBottom: '1rem' }}>
              Developed an interactive Excel dashboard to analyze 12-month hospital appointment data and identify critical patient no-show patterns. 
              The visualization uses conditional color-coding to instantly flag high-risk months, with red bars indicating crisis periods ≥80% no-show rate. 
              Analysis revealed severe attendance breakdowns in January at 89% and October at 100%, compared to optimal performance in February 33%, April 36%, and December 40%.
            </p>
            <p>
              This project demonstrates ability to transform raw operational data into actionable business insights that help healthcare management reduce revenue loss, optimize doctor schedules, and implement targeted patient reminder systems during high-risk periods.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "12-month trend analysis with monthly breakdown",
                  "Color-coded risk indicators: Red for crisis, Green for optimal, Blue for moderate",
                  "Identified 55% average no-show rate with seasonal volatility",
                  "Business-ready visualization for stakeholder presentations"
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Tools & Technologies</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)', fontWeight: '500' }}>
                Microsoft Excel, Pivot Tables, Conditional Formatting, Bar Charts, Data Visualization, Trend Analysis
              </p>

              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Outcome</h3>
              <p>
                Enabled data-driven decision making for hospital operations team to prioritize follow-up calls and SMS reminders in crisis months, potentially recovering significant revenue from empty appointment slots.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
