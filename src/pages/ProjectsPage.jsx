import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Projects
        </motion.h1>
      </div>
      <Projects hideTitle />
    </div>
  );
};

export default ProjectsPage;
