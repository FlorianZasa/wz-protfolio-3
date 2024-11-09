import React, { useState } from 'react';
import { colors } from '../styles/colors';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { ButtonStyle } from '../styles/button';
import { projects } from '../data/projectData';

import './Home.css'
import ProjectOverview from '../components/ProjectOverview';
import ContactMeButton from '../components/ContactMeButton';

function Home() {
    const { t } = useTranslation();

    const [selectedFilter, setSelectedFilter] = useState("");

    const filter = (filterTag) => {
      setSelectedFilter(filterTag);
    };

    const filteredProjects = projects.filter((project) => 
      selectedFilter === "" || project.tags.includes(selectedFilter)
    );

  return (
    <>
      <section style={{ flexDirection: 'row', alignItems: 'center' }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          minWidth: '467px',
          maxWidth: '100%'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span className='text'>{t('home.HEADER_HI_THERE')}</span>
              <h1>
                {t('home.HEADER_I_AM')} Wiktoria
              </h1>
            </div>
            <h3>
              {t('home.HEADER_Subtext_1')} <span style={{ color: colors.primary }}>{t('home.HEADER_Subtext_2')}</span>{t('home.HEADER_Subtext_3')}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
            <ContactMeButton />
            <Button variant={ButtonStyle.SECONDARY} text={t('home.HEADER_DONWLOAD_MY_CV')}></Button>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ width: '100%', overflow: 'clip' }}>
            <img 
              src='/Images/main_1.png' 
              alt='me' 
              style={{ maxWidth: '29.8125rem', width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      <section style={{marginLeft: '2.5rem', marginRight: '2.5rem'}} className="jump-animated">
        <div style={{ display: 'flex', gap: '10.5625rem' }}>
          {/* Left Side - Grid Container */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem', 
            maxWidth: '18.9375rem'
          }}>
            {/* Icons Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
              <img src='./what_do_i_do/web_design.png' alt="web-design" width={84} height={75} />
              <img src='./what_do_i_do/app_design.png' alt="app-design" width={40} height={75} />
              <img src='./what_do_i_do/graphic_design.png' alt="graphic-design" width={88} height={75} />
            </div>

            {/* Titles Column */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '3rem', 
              whiteSpace: 'nowrap',  // Prevent wrapping in titles
              justifyContent: 'space-around' // Ensure spacing between titles
            }}>
              <h3>Web Design</h3>
              <h3>App Design</h3>
              <h3>Graphic Design</h3>
            </div>
          </div>

          {/* Right Side - Text Section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem', 
            flex: 1  // Allow this section to expand and take available space
          }}>
            <h2>What do <span style={{ color: colors.primary }}>I</span> do?</h2>
            <span className="text">
              As a UX/UI designer, I craft intuitive and visually compelling digital experiences. Whether it's designing user-friendly websites, engaging mobile apps, or standout graphics, my focus is always on blending functionality with aesthetics to create designs that both look great and feel seamless to use.
            </span>
          </div>
        </div>
      </section>


      <section style={{textAlign: 'center', alignItems: 'center'}} className="jump-animated">
        <h2>My Projects</h2>
        <div style={{ display: 'flex', gap: '2.475rem', marginTop: '2rem' }}>
          <button onClick={() => filter("")} className={`text project-filter ${selectedFilter === "" ? "active" : ""}`}>All</button>
          <button onClick={() => filter("Website Design")} className={`text project-filter ${selectedFilter === "Website Design" ? "active" : ""}`}>Website Design</button>
          <button onClick={() => filter("App Design")} className={`text project-filter ${selectedFilter === "App Design" ? "active" : ""}`}>App Design</button>
          <button onClick={() => filter("Graphic Design")} className={`text project-filter ${selectedFilter === "Graphic Design" ? "active" : ""}`}>Graphic Design</button>
        </div>
        <ProjectOverview projects={filteredProjects} />
      </section>
    </>
  );
}

export default Home;
