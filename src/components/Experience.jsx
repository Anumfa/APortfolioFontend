import React from 'react';
import { motion } from 'framer-motion';
import PremiumSection from './ui/PremiumSection';
import SectionTitle from './ui/SectionTitle';

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'Technify, Pakistan (PSEB-Registered)',
    period: 'Jun 2026 – Present',
    desc: 'Contributing to real-world data science projects with the Development Team Lead on live deliverables.',
  },
  {
    title: 'BS Data Science (BS-DS)',
    company: 'University of Sindh, Jamshoro',
    period: '2023 – Present',
    desc: 'Statistics, Database Management, Data Visualization, Business Analytics, Machine Learning Fundamentals.',
  },
];

const Experience = () => (
  <PremiumSection id="experience">
    <div className="mb-8 flex items-start gap-4 md:mb-10">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4ff00]/30 bg-[#d4ff00]/10 text-2xl font-bold text-[#d4ff00]">
        *
      </div>
      <div>
        <p className="section-label">Experience</p>
        <h2 className="section-heading">
          Real <span className="text-[#d4ff00]">Problem Solutions</span> Experience
        </h2>
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="figma-card"
        >
          <p className="text-xs text-[#d4ff00]">{exp.period}</p>
          <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{exp.title}</h3>
          <p className="mt-1 text-sm text-[#888888]">{exp.company}</p>
          <p className="premium-body mt-3 text-sm">{exp.desc}</p>
        </motion.div>
      ))}
    </div>
  </PremiumSection>
);

export default Experience;
