import { resumeProjects } from './resume';

export const fallbackProjects = resumeProjects;

export const projectMeta = {
  'Digital Wallet Analytics Dashboard': { image: '/digital-wallet.png', link: '/project/digital-wallet' },
  'Hospital No-Show Crisis Analysis': { image: '/hospital-no-show.png', link: '/project/hospital-no-show' },
  'Hospital Appointments No-Show Analysis': { image: '/hospital-no-show.png', link: '/project/hospital-no-show' },
};

export const enrichProject = (project) => {
  const meta = projectMeta[project.title] || {};
  return { ...project, image: project.image || meta.image || '', link: project.link || meta.link || '' };
};

export const getProjectBySlug = (slug) => {
  if (slug === 'digital-wallet') return resumeProjects[0];
  if (slug === 'hospital-no-show') return resumeProjects[1];
  return null;
};
