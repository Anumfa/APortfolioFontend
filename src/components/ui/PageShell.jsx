import React from 'react';
import PageTransition from './PageTransition';

const PageShell = ({ children, className = '', center = false }) => (
  <PageTransition>
    <section
      className={`page-container min-h-[calc(100vh-9rem)] sm:min-h-[calc(100vh-10rem)] ${
        center ? 'flex flex-col items-center justify-center' : ''
      } ${className}`}
    >
      {children}
    </section>
  </PageTransition>
);

export default PageShell;
