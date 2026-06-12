import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import { fallbackProjects, enrichProject } from '../data/projects';

const ProjectsPage = () => {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/projects`)
      .then((res) => { if (res.data?.length) setProjects(res.data.map(enrichProject)); })
      .catch(() => setProjects(fallbackProjects));
  }, []);

  return (
    <div className="section page-top">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="section-header">
          <h1 className="section-title">Featured Projects</h1>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', padding: 0 }}
            >
              {project.image && (
                <div style={{ borderBottom: '1px solid rgba(102,252,241,0.1)', background: 'var(--surface-color)', padding: '1rem' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--text-light)' }}>{project.title}</h3>
                  <ExternalLink color="var(--primary-color)" size={20} style={{ flexShrink: 0 }} />
                </div>
                <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', margin: '0.5rem 0', fontSize: '0.85rem' }}>Tool: {project.tool}</p>
                <ul style={{ paddingLeft: '1.25rem', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                  {project.description.map((desc) => (
                    <li key={desc} style={{ marginBottom: '0.4rem' }}>{desc}</li>
                  ))}
                </ul>
                {project.link && (
                  <Link to={project.link} className="btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                    View Full Project Details →
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
