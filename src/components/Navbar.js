import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import ContactMeButton from './ContactMeButton';

function Navbar() {
  const { t } = useTranslation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavToggled, setIsNavToggled] = useState(false);

  const handleResize = () => {
    const isWideScreen = window.innerWidth >= 900;
    setIsNavVisible(isWideScreen);
    if (isWideScreen) {
      setIsNavToggled(false); // Close the menu on wide screen resize
    }
  };

  useEffect(() => {
    handleResize(); // Check the initial size
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavToggled(!isNavToggled);
  };

  const contactMe = () => {
    window.location.href = "mailto:contact@wiktoriazemla.com";
  }

  return (
    <div>
      {isNavVisible ? (
        // Desktop Navbar
        <div className="nav-container">
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
            >
              {t('navigation.PORTFOLIO')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'navbar-link active-navbar-link' : 'navbar-link'}
            >
              {t('navigation.ABOUT')}
            </NavLink>
          </div>
          <div className="nav-contact">
            <ContactMeButton />
          </div>
        </div>
      ) : (
        // Mobile Navbar (Toggled State)
        <div className="mobile-nav-container">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Logo.png`}
            alt="logo"
            height="26"
            className="mobile-logo"
          />
          <div className="nav-buttons">
            <button onClick={contactMe} className="menu-toggle-button">
              <img src={`${process.env.PUBLIC_URL}/contact_me/enveloper_red.png`} alt="contact" />
            </button>
            <button onClick={toggleNav} className="menu-toggle-button">
              {!isNavToggled && (
                <img src={`${process.env.PUBLIC_URL}/Images/burger-menu.png`} width="26" alt="menu" />
              )}
            </button>
            
          </div>
          {isNavToggled && (
            <div className="fullscreen-nav">
              <button className="close-button" onClick={toggleNav}>×</button>
              <img className="logo" src={`${process.env.PUBLIC_URL}/Images/logo_white.png`} alt="logo" width={32} height={26} />
              <div style={{display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center'}}>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'navbar-link active-link' : 'navbar-link'}
                  onClick={toggleNav}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => isActive ? 'navbar-link active-link' : 'navbar-link'}
                  onClick={toggleNav}
                >
                  {t('navigation.PORTFOLIO')}
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'navbar-link active-link' : 'navbar-link'}
                  onClick={toggleNav}
                >
                  {t('navigation.ABOUT')}
                </NavLink>
              </div>
              <ContactMeButton style={{ border: '2px solid white' }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
