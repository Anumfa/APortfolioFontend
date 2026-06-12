import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass-panel"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="form-input" />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="form-input" />
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={5} className="form-input" style={{ resize: 'vertical' }} />
      <button type="submit" className="btn-primary btn-solid" style={{ alignSelf: 'center', marginTop: '1rem' }}>
        Send Message
      </button>
      {status && <p style={{ textAlign: 'center', color: 'var(--primary-color)', marginTop: '1rem' }}>{status}</p>}
    </motion.form>
  );
};

export default ContactForm;
