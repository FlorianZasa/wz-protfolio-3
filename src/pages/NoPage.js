import React, { useEffect } from 'react'
import { colors } from '../styles/colors'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function NoPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, []);

  return (
    <section style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <h1><span style={{color: colors.primary}}>O</span>oops...</h1>
        <p>{t('nopage.Not_Exist')}</p>
        <NavLink to="/" style={{color: colors.primary, textDecoration: 'underline'}}>Bring me back home!</NavLink>
    </section>
  )
}

export default NoPage