import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle } from 'lucide-react';
import { resumeData } from '../data/resume';

const links = [
  { icon: Mail, label: resumeData.email, href: `mailto:${resumeData.email}` },
  { icon: Globe, label: resumeData.linkedin, href: resumeData.linkedinUrl },
  { icon: MessageCircle, label: resumeData.phone, href: 'https://wa.me/923170395740' },
];

const ContactPage = () => (
  <div className="section page-top contact-page">
    <div className="container contact-inner">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="section-header">
        <h1 className="section-title">Contact Me</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-main)', padding: '0 0.5rem' }}
      >
        {resumeData.availability}. Feel free to reach out via email, LinkedIn, or WhatsApp.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="contact-links"
      >
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="contact-card"
          >
            <div className="icon-wrap"><Icon size={22} /></div>
            <span>{label}</span>
          </a>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        href={`mailto:${resumeData.email}`}
        className="btn-primary btn-solid"
        style={{ marginTop: '2rem', display: 'inline-flex' }}
      >
        Hire Me
      </motion.a>
    </div>
  </div>
);

export default ContactPage;
