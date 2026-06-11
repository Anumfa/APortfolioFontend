import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import DigitalWalletPage from './pages/DigitalWalletPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/hospital-no-show" element={<ProjectPage />} />
          <Route path="/project/digital-wallet" element={<DigitalWalletPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-main)', borderTop: '1px solid rgba(102, 252, 241, 0.1)', marginTop: 'auto' }}>
          <p>© {new Date().getFullYear()} Asad Khan. All rights reserved.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            aasad9736@gmail.com | <a href="https://linkedin.com/in/data-analyst-asad-khan07" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
