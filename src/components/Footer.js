import React from 'react';
import { colors } from '../styles/colors';
import { NavLink } from 'react-router-dom';

import './Navbar.css'
import ContactMeButton from './ContactMeButton';

function Footer() {
  return (
    <footer style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      textAlign: 'left',
      marginTop: '15rem'
  }}>
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
    <div style={{display: 'flex', borderTop: `solid 2px ${colors.primary}`, 
      paddingTop: '3rem',paddingBottom: '2rem', justifyContent: 'space-between'
    }}>
      {/* Navigation Links */}
      <div style={{display: 'flex', gap: '2.375rem'}}>
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
          About Me
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
        >
          Skill
        </NavLink>
      </div>

      {/* Social Media Links */}
      <div style={{display: 'flex', gap: '2rem'}}>
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
