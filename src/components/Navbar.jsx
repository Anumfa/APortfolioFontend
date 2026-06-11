import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(11, 12, 16, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', textDecoration: 'none' }}>
          A<span style={{ color: 'var(--text-light)' }}>K</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-link">{label}</Link>
          ))}
        </div>
      </div>
      <style>{`
        .nav-link {
          color: var(--text-main);
          font-weight: 500;
          transition: color 0.3s;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--primary-color);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
