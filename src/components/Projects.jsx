import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const projectMeta = {
  'Digital Wallet Analytics Dashboard': {
    image: '/digital-wallet.png',
    link: '/project/digital-wallet',
  },
  'Hospital No-Show Crisis Analysis': {
    image: '/hospital-no-show.png',
    link: '/project/hospital-no-show',
  },
  'Hospital Appointments No-Show Analysis': {
    image: '/hospital-no-show.png',
    link: '/project/hospital-no-show',
  },
};

const enrichProject = (project) => {
  const meta = projectMeta[project.title] || {};
  return {
    ...project,
    image: project.image || meta.image || '',
    link: project.link || meta.link || '',
  };
};

export const fallbackProjects = [
  {
    title: "Digital Wallet Analytics Dashboard",
    tool: "Fintech Data Analytics | Business Intelligence Dashboard",
    image: "/digital-wallet.png",
    link: "/project/digital-wallet",
    description: [
      "Designed and developed an end-to-end Excel dashboard to monitor key fintech KPIs for a digital wallet platform. The dashboard tracks PKR 24.8M in Gross Merchandise Value across 5,000 transactions with a 95.1% success rate and PKR 4,958 Average Order Value.",
      "Built interactive visualizations including Monthly GMV Trends, Cashback by Merchant analysis for 30+ merchants, and Transaction Success Rate breakdown showing 4,755 successful, 146 failed, and 99 pending transactions.",
      "Automated monthly financial reporting, reducing manual effort by 70% while providing real-time visibility into transaction health, merchant performance, and revenue opportunities for fintech operations team."
    ]
  },
  {
    title: "Hospital No-Show Crisis Analysis",
    tool: "Healthcare Data Analytics | Excel Dashboard",
    image: "/hospital-no-show.png",
    link: "/project/hospital-no-show",
    description: [
      "Developed an interactive Excel dashboard to analyze 12-month hospital appointment data and identify critical patient no-show patterns. The visualization uses conditional color-coding to instantly flag high-risk months, with red bars indicating crisis periods ≥80% no-show rate.",
      "Analysis revealed severe attendance breakdowns in January at 89% and October at 100%, compared to optimal performance in February 33%, April 36%, and December 40%.",
      "Enabled data-driven decision making for hospital operations team to prioritize follow-up calls and SMS reminders in crisis months, potentially recovering significant revenue from empty appointment slots."
    ]
  }
];

const Projects = ({ hideTitle = false }) => {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/projects`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProjects(res.data.map(enrichProject));
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch(err => {
        console.error("Error fetching projects, using fallback data: ", err);
        setProjects(fallbackProjects);
      });
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        {!hideTitle && <h2 className="section-title">Featured Projects</h2>}
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>{project.title}</h3>
                <LineChart color="var(--primary-color)" />
              </div>
              
              {project.image && (
                <div style={{
                  width: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem',
                  backgroundColor: 'var(--surface-color)',
                  border: '1px solid rgba(102, 252, 241, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}

              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Tool: {project.tool}</p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {project.description.slice(0, 2).map((desc, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                ))}
              </ul>
              
              {project.link && (
                <Link to={project.link} className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                  View Full Project Details <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
