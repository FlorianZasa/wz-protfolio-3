import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css'
import ContactMeButton from './ContactMeButton';

function Footer() {
  return (
    <footer className="footer-footer">
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <h6>👋 Get in touch at</h6>
        <h2>contact@wiktoriazemla.com</h2>
      </div>
      <ContactMeButton />
    </div>
    <div className="footer-navigation">
      {/* Navigation Links */}
      <div className="footer-navigation-item left">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/portfolio" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Portfolio
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          About me
        </NavLink>
      </div>

      {/* Social Media Links */}
      <div className="footer-navigation-item right">
        <NavLink 
          to="https://www.instagram.com/wiktoria_designwork/" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          target='_blank'
        >
          Instagram
        </NavLink>
        <NavLink 
          to="https://www.linkedin.com/in/wiktoria-zemla-00a20b252/" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          target='_blank'
        >
          LinkedIn
        </NavLink>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
