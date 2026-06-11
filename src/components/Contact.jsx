import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const Contact = ({ isFormOnly = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const formContent = (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit} 
      className={isFormOnly ? "" : "glass-panel"}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        value={formData.name} 
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        value={formData.email} 
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange}
        required
        rows="5"
        style={{ ...inputStyle, resize: 'vertical' }}
      ></textarea>
      <button type="submit" className="btn-primary btn-solid" style={{ alignSelf: 'center', marginTop: '1rem' }}>
        Send Message
      </button>
      {status && <p style={{ textAlign: 'center', color: 'var(--primary-color)', marginTop: '1rem' }}>{status}</p>}
    </motion.form>
  );

  if (isFormOnly) return formContent;

  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="section-title">Get In Touch</h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          Available for Internships & Entry-Level Roles. My inbox is always open.
        </motion.p>
        {formContent}
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(11, 12, 16, 0.5)',
  border: '1px solid var(--secondary-color)',
  borderRadius: '8px',
  color: 'var(--text-light)',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Contact;
