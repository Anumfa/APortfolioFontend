import React from 'react';

const Footer = () => (
  <footer
    style={{
      textAlign: 'center',
      padding: '2rem 0',
      color: 'var(--text-main)',
      borderTop: '1px solid rgba(102, 252, 241, 0.1)',
      marginTop: 'auto',
    }}
  >
    <p>© {new Date().getFullYear()} Asad Khan. All rights reserved.</p>
    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
      aasad9736@gmail.com |{' '}
      <a href="https://linkedin.com/in/data-analyst-asad-khan07" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </p>
  </footer>
);

export default Footer;
