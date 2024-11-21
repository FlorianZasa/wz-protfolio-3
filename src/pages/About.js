import React, { useEffect } from 'react'
import LanguageComponent from '../components/about/LanguageComponent'
import Timeline from '../components/about/Timeline';
import { useTranslation } from 'react-i18next';
import './About.css'
import { colors } from '../styles/colors';
import { ButtonStyle } from '../styles/button';
import Button from '../components/Button';

import { work, education } from '../data/timelineData';

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, []);

  return (
    <>
      <section>
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '2rem', marginBottom: '5rem'}}>
          <div>
            <h1>Cześć<span style={{color: colors.primary}}>!</span></h1>
            <p className="text" style={{fontSize: '18px', maxWidth: '28.75rem'}}>I’m Wiktoria Zemla, a recent graduate with a degree in Communication and Multimedia Design, specializing in UX/UI design. Originally from Poland, I moved to the Netherlands at 14, where I learned Dutch and adapted to a new culture. This journey taught me resilience and adaptability, qualities I now bring into my design process.</p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <Button variant={ButtonStyle.PRIMARY} text={t('home.HEADER_DONWLOAD_MY_CV')}></Button>
              <Button variant={ButtonStyle.SECONDARY} text={t('about_me.HEADER_LINKEDIN')}></Button>
            </div>
          </div>
          <img src='./aboutme.png' alt='me' width='357'/>
        </div>
      </section>


      <section style={{display: 'flex', flexDirection: 'row'}} className="about-languages">
        <LanguageComponent language={t("about.language.POLISH")} level={t("about.level.NATIVE")} />
        <LanguageComponent language={t("about.language.DUTCH")} level={t("about.level.FLUENT")} />
        <LanguageComponent language={t("about.language.ENGLISH")} level={t("about.level.FLUENT")} />
        <LanguageComponent language={t("about.language.GERMAN")} level={t("about.level.INTERMEDIATE")} />
      </section>


      <section>
  <div className="freetime-container" style={{ position: 'relative' }}>
    {/* Black background div */}
    <div className="freetime-b" style={{ height: '329px', backgroundColor: 'black', position: 'relative', zIndex: 2 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '29.19rem',
          paddingLeft: '4rem',
          paddingTop: '2.875rem',
          paddingBottom: '2.875rem',
          color: colors.white,
          gap: '2rem',
        }}
      >
        <h2>When I’m <span style={{color: colors.primary}}>not</span> working</h2>
        <p className='text'>
          In my free time, I’m a proud dog lover, nothing brings me more joy than spending time with dogs. I also love unwinding with a good Netflix series like La Casa de Papel, where I admire how much effort goes into executing great ideas, which parallels my own design process.
        </p>
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: -20,
        left: 0,
        right: '4rem',
        padding: '1rem',
        zIndex: 10,
      }}
    >
      <div style={{ flex: 1, textAlign: 'right' }}>
        <img
          src="./Images/with_jackie.png"
          alt="me"
          width="397"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>

    {/* Colored background div, positioned behind other elements */}
    <div
      className="freetime-r"
      style={{
        height: '329px',
        width: '638px',
        backgroundColor: colors.primary,
        marginLeft: '-11.25rem',
        borderRadius: '0 12px 12px 0',
        transform: 'translateY(-14.1875rem)',
        position: 'absolute',
        zIndex: 0
      }}
    ></div>
  </div>
</section>


      <section style={{textAlign: 'center', display: 'flex', gap: '4rem'}}>
        <h2>Work experience</h2>
        <Timeline data={work} />
      </section> 

      <section style={{textAlign: 'center', display: 'flex', gap: '4rem'}}>
      <h2>Education</h2>
        <Timeline data={education} />
      </section>   
      
    </>
  )
}

export default About