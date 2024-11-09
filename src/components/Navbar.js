import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
//import LanguageSwitcher from './LanguageSwitcher';

import ContactMeButton from './ContactMeButton';

function Navbar() {
  const { t } = useTranslation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavToggled, setIsNavToggled] = useState(false);

  const handleResize = () => {
    const isWideScreen = window.innerWidth >= 900;
    setIsNavVisible(isWideScreen);
    if (isWideScreen) {
      setIsNavToggled(false);
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

  return (
    <div>
      {isNavVisible ? (
        <div className='nav-container'>
          <img src="/Images/Logo.png" alt="logo" style={{paddingRight: '7.5rem'}} width={56} height={46} />
          <div style={{display: 'flex', gap: '2.375rem', flex: 1}}>
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
              {t('navigation.PORTFOLIO')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              {t('navigation.ABOUT')}
            </NavLink>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              {t('navigation.SKILLS')}
            </NavLink>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <ContactMeButton />
          </div>
        </div>
      ) : (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem'}}>
          <img src="/logo.png" alt="logo" height="80" />

          <button onClick={toggleNav} style={{ marginLeft: 'auto' }}>
            {isNavToggled ? 'x' : 'o'}
          </button>
          {isNavToggled && (
            <div className='nav-container'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  {t('navigation.PORTFOLIO')}
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                >
                  {t('navigation.ABOUT')}
                </NavLink>
                <NavLink 
                  to="/skills" 
                  className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                >
                  {t('navigation.SKILLS')}
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                >
                  <ContactMeButton />

                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
