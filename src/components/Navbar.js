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
          <img src={`${process.env.PUBLIC_URL}/Images/Logo.png`} alt="logo" style={{paddingRight: '7.5rem', zIndex: 1010}} width={56} height={46} />
          <div style={{display: 'flex', gap: '2.375rem', flex: 1}}>
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
          <div style={{ display: 'flex', gap: '2rem' }}>
            <ContactMeButton />
          </div>
        </div>
      ) : (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
          <img src={`${process.env.PUBLIC_URL}/Images/Logo.png`} alt="logo" height="26" />

          <div style={{display: 'flex', flexDirection: 'row', gap: '1.125rem'}}>
            <button onClick={toggleNav} style={{ border: 'none', background: 'inherit', padding: 0, margin: 0}}>         
                <img src={`${process.env.PUBLIC_URL}/contact_me/enveloper_red.png` } />
            </button>
            <button onClick={toggleNav} style={{ border: 'none', background: 'inherit', padding: 0, margin: 0 }}>
              {isNavToggled ? ("x")
              : 
              (
                <img src={`${process.env.PUBLIC_URL}/Images/burger-menu.png` } width='26'/>
              )
              }
            </button>
          </div>
          { isNavToggled && (
            <div className="fullscreen-nav">
              <button className="close-button" onClick={toggleNav}>×</button>
              <img src={`${process.env.PUBLIC_URL}/Images/logo_white.png`} alt="logo" width={56} height={46} />
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
                onClick={toggleNav}
              >
                Home
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
                onClick={toggleNav}
              >
                {t('navigation.PORTFOLIO')}
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
                onClick={toggleNav}
              >
                {t('navigation.ABOUT')}
              </NavLink>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
                onClick={toggleNav}
              >
                {t('navigation.SKILLS')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
                onClick={toggleNav}
              >
                {t('navigation.CONTACT')}
              </NavLink>
              <ContactMeButton style={{ border: '2px solid white'}} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
