import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config/api';
import PremiumSection from './ui/PremiumSection';
import SectionTitle from './ui/SectionTitle';

const projectMeta = {
  'Digital Wallet Analytics Dashboard': { image: '/digital-wallet.png', link: '/project/digital-wallet' },
  'Hospital No-Show Crisis Analysis': { image: '/hospital-no-show.png', link: '/project/hospital-no-show' },
  'Hospital Appointments No-Show Analysis': { image: '/hospital-no-show.png', link: '/project/hospital-no-show' },
};

const enrichProject = (project) => {
  const meta = projectMeta[project.title] || {};
  return { ...project, image: project.image || meta.image || '', link: project.link || meta.link || '' };
};

export const fallbackProjects = [
  {
    title: 'Digital Wallet Analytics Dashboard',
    tool: 'Fintech Data Analytics | Business Intelligence Dashboard',
    image: '/digital-wallet.png',
    link: '/project/digital-wallet',
    description: [
      'Designed and developed an end-to-end Excel dashboard to monitor key fintech KPIs for a digital wallet platform.',
      'Built interactive visualizations including Monthly GMV Trends, Cashback by Merchant analysis, and Transaction Success Rate breakdown.',
    ],
  },
  {
    title: 'Hospital No-Show Crisis Analysis',
    tool: 'Healthcare Data Analytics | Excel Dashboard',
    image: '/hospital-no-show.png',
    link: '/project/hospital-no-show',
    description: [
      'Developed an interactive Excel dashboard to analyze 12-month hospital appointment data and identify critical patient no-show patterns.',
      'Analysis revealed severe attendance breakdowns in January at 89% and October at 100% no-show rate.',
    ],
  },
];

const Projects = ({ hideTitle = false }) => {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/projects`)
      .then((res) => {
        if (res.data?.length) setProjects(res.data.map(enrichProject));
      })
      .catch(() => setProjects(fallbackProjects));
  }, []);

  return (
    <PremiumSection id="projects">
      {!hideTitle && (
        <SectionTitle subtitle="Portfolio">
          <span className="text-[#d4ff00]">Featured</span> Projects
        </SectionTitle>
      )}

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="figma-card group flex flex-col overflow-hidden p-0"
          >
            {project.image && (
              <div className="overflow-hidden border-b border-[#1f1f1f] bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-medium text-[#d4ff00]">{project.tool}</p>
              <h3 className="mt-1 text-base font-semibold text-white">{project.title}</h3>
              <p className="premium-body mt-2 flex-1 text-sm">{project.description[0]}</p>
              {project.link && (
                <Link
                  to={project.link}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-[#d4ff00]"
                >
                  View Details <ArrowUpRight size={14} className="text-[#d4ff00]" />
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </PremiumSection>
  );
};

export default Projects;
