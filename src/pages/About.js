import React from 'react'
import LanguageComponent from '../components/about/LanguageComponent'
import Timeline from '../components/about/Timeline';
import { useTranslation } from 'react-i18next';
import './About.css'
import { colors } from '../styles/colors';
import { ButtonStyle } from '../styles/button';
import Button from '../components/Button';

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '2rem', marginTop: '5rem', marginBottom: '5rem'}}>
        <div>
          <h1>Cześć<span style={{color: colors.primary}}>!</span></h1>
          <p className="text" style={{fontSize: '18px', maxWidth: '28.75rem'}}>I’m Wiktoria Zemla, a recent graduate with a degree in Communication and Multimedia Design, 
            specializing in UX/UI design. Originally from Poland, I moved to the Netherlands at 14, 
            where I learned Dutch and adapted to a new culture. 
            This journey taught me resilience and adaptability, qualities I now bring into my design process.
          </p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
            <Button variant={ButtonStyle.PRIMARY} text={t('home.HEADER_DONWLOAD_MY_CV')}></Button>
            <Button variant={ButtonStyle.SECONDARY} text={t('about_me.HEADER_LINKEDIN')}></Button>
          </div>
        </div>
        <img src='./aboutme.png' alt='me' width='357'/>
      </div>


      <div className="about-languages">
        <LanguageComponent language={t("about.language.POLISH")} level={t("about.level.NATIVE")} />
        <LanguageComponent language={t("about.language.DUTCH")} level={t("about.level.FLUENT")} />
        <LanguageComponent language={t("about.language.ENGLISH")} level={t("about.level.FLUENT")} />
        <LanguageComponent language={t("about.language.GERMAN")} level={t("about.level.INTERMEDIATE")} />
      </div>
      
      
      <Timeline />
      
    </div>
  )
}

export default About