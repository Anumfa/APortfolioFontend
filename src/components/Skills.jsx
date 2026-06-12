import React from 'react';
import { motion } from 'framer-motion';
import PremiumSection from './ui/PremiumSection';
import SectionTitle from './ui/SectionTitle';

const skillGroups = [
  {
    category: 'Data Analysis & BI',
    skills: [
      { name: 'Microsoft Excel', level: 90 },
      { name: 'Power BI', level: 75 },
      { name: 'Google Sheets', level: 85 },
      { name: 'KPI Dashboards', level: 88 },
    ],
  },
  {
    category: 'Database & Querying',
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'Data Cleaning', level: 85 },
      { name: 'Data Wrangling', level: 82 },
    ],
  },
  {
    category: 'Visualization & Reporting',
    skills: [
      { name: 'Data Visualization', level: 88 },
      { name: 'Reporting & Analytics', level: 85 },
      { name: 'Business Insights', level: 90 },
    ],
  },
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Analytical Thinking', level: 92 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Team Collaboration', level: 88 },
    ],
  },
];

const Skills = () => (
  <PremiumSection id="skills">
    <SectionTitle subtitle="My Skills">
      <span className="text-[#d4ff00]">Technical</span> Skills & Tools
    </SectionTitle>

    <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="figma-card"
        >
          <h3 className="mb-5 text-base font-semibold text-white">{group.category}</h3>
          <div className="space-y-4">
            {group.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-[#888888]">{skill.name}</span>
                  <span className="font-medium text-[#d4ff00]">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="skill-bar-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </PremiumSection>
);

export default Skills;
