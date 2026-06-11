import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Data Analysis & BI", items: ["Microsoft Excel (Advanced)", "Power BI", "Google Sheets", "KPI Dashboards"] },
  { category: "Database & Querying", items: ["SQL", "Data Cleaning", "Data Wrangling"] },
  { category: "Visualization & Reporting", items: ["Data Visualization", "Reporting & Analytics", "Business Insights"] },
  { category: "Core Competencies", items: ["Analytical Thinking", "Critical Thinking", "Attention to Detail", "Team Collaboration"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel"
            >
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {skillGroup.category}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--secondary-color)' }}>▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
