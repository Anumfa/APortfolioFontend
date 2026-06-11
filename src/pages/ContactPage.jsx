import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle, Phone } from 'lucide-react';
import Contact from '../components/Contact'; // The existing form component

const ContactPage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Contact Me
        </motion.h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          
          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ fontSize: '2rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>Let's Connect</h3>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              I am currently available for Internships & Entry-Level Roles. Feel free to reach out via email, WhatsApp, or connect with me on LinkedIn.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Email */}
              <a href="mailto:aasad9736@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', fontSize: '1.2rem', textDecoration: 'none' }} className="contact-link">
                <div style={{ padding: '1rem', background: 'rgba(102, 252, 241, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={24} />
                </div>
                <span>aasad9736@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/data-analyst-asad-khan07" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', fontSize: '1.2rem', textDecoration: 'none' }} className="contact-link">
                <div style={{ padding: '1rem', background: 'rgba(102, 252, 241, 0.1)', borderRadius: '50%', color: '#0077b5' }}>
                  <Globe size={24} />
                </div>
                <span>linkedin.com/in/data-analyst-asad-khan07</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/923170395740" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', fontSize: '1.2rem', textDecoration: 'none' }} className="contact-link">
                <div style={{ padding: '1rem', background: 'rgba(102, 252, 241, 0.1)', borderRadius: '50%', color: '#25D366' }}>
                  <MessageCircle size={24} />
                </div>
                <span>+92 317 0395740 (WhatsApp)</span>
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ background: 'rgba(31, 40, 51, 0.6)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(102, 252, 241, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '1.5rem', textAlign: 'center' }}>Send a Message</h3>
              {/* Reuse the existing Contact form component logic, but we modify Contact.jsx to just be the form without section wrappers */}
              <Contact isFormOnly={true} />
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        .contact-link:hover {
          color: var(--primary-color) !important;
          transform: translateX(5px);
        }
        .contact-link {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
