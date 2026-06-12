import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Mail, Globe, MapPin } from 'lucide-react';
import { downloadResumePdf } from '../utils/downloadResume';
import { resumeData, resumeProjects } from '../data/resume';

const ResumePage = () => (
  <div className="section page-top">
    <div className="container">
      <div className="page-toolbar">
        <div className="section-header" style={{ width: '100%' }}>
          <h1 className="section-title">Resume</h1>
        </div>
        <button type="button" onClick={downloadResumePdf} className="btn-primary btn-solid" style={{ width: '100%', maxWidth: '280px' }}>
          <Download size={18} /> Download PDF
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel" style={{ lineHeight: 1.7 }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(102, 252, 241, 0.2)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{resumeData.name}</h2>
          <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>{resumeData.title}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.9rem' }}>
            <a href={`mailto:${resumeData.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
              <Mail size={15} /> {resumeData.email}
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
              <MapPin size={15} /> {resumeData.location}
            </span>
            <a href={resumeData.linkedinUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
              <Globe size={15} /> LinkedIn
            </a>
          </div>
          <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--secondary-color)' }}>{resumeData.availability}</p>
        </header>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Professional Summary</h3>
          <p>{resumeData.summary}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Technical Skills</h3>
          {resumeData.skills.map(({ category, items }) => (
            <p key={category} style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--text-light)' }}>{category}:</strong> {items.join(' | ')}
            </p>
          ))}
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Education</h3>
          <p><strong style={{ color: 'var(--text-light)' }}>{resumeData.education.degree}</strong></p>
          <p style={{ color: 'var(--secondary-color)' }}>{resumeData.education.school} | {resumeData.education.period}</p>
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>Relevant Coursework: {resumeData.education.coursework}</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Internship Experience</h3>
          <p><strong style={{ color: 'var(--text-light)' }}>{resumeData.experience.role}</strong></p>
          <p style={{ color: 'var(--secondary-color)', margin: '0.25rem 0 0.75rem' }}>
            {resumeData.experience.company} | {resumeData.experience.period}
          </p>
          <ul style={{ paddingLeft: '1.25rem' }}>
            {resumeData.experience.points.map((p) => (
              <li key={p} style={{ marginBottom: '0.35rem' }}>{p}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Projects</h3>
          {resumeProjects.map((project) => (
            <div key={project.title} style={{ marginBottom: '1.25rem' }}>
              <p><strong style={{ color: 'var(--text-light)' }}>{project.title}</strong> — <em>{project.tool}</em></p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem' }}>
                {project.description.map((d) => (
                  <li key={d} style={{ marginBottom: '0.25rem' }}>{d}</li>
                ))}
              </ul>
              {project.link && (
                <Link to={project.link} style={{ fontSize: '0.9rem' }}>View project details →</Link>
              )}
            </div>
          ))}
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Languages</h3>
          {resumeData.languages.map(({ name, level }) => (
            <p key={name}><strong style={{ color: 'var(--text-light)' }}>{name}:</strong> {level}</p>
          ))}
        </section>
      </motion.div>
    </div>
  </div>
);

export default ResumePage;
