import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import PremiumSection from './ui/PremiumSection';
import SectionTitle from './ui/SectionTitle';
import PremiumButton from './ui/PremiumButton';

const inputClasses = `
  w-full rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] px-4 py-3
  text-sm text-white placeholder-[#555555] outline-none
  transition-all duration-300
  focus:border-[#d4ff00]/50 focus:ring-1 focus:ring-[#d4ff00]/20
`;

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
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const formContent = (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputClasses} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputClasses} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputClasses} resize-y`} />
      <div className="pt-2">
        <PremiumButton type="submit" variant="solid">Send Message</PremiumButton>
      </div>
      {status && (
        <p className={`text-center text-sm ${status.includes('success') ? 'text-[#d4ff00]' : status === 'Sending...' ? 'text-[#888888]' : 'text-red-400'}`}>
          {status}
        </p>
      )}
    </motion.form>
  );

  if (isFormOnly) return formContent;

  return (
    <PremiumSection id="contact">
      <SectionTitle subtitle="Reach Out">Get In Touch</SectionTitle>
      <p className="premium-body mx-auto mb-10 max-w-xl text-center">
        Available for Internships & Entry-Level Roles. My inbox is always open.
      </p>
      <div className="mx-auto max-w-xl figma-card">{formContent}</div>
    </PremiumSection>
  );
};

export default Contact;
