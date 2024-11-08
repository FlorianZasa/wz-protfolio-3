import React from 'react';
import { colors } from '../styles/colors';
import ProjectOverview from '../components/ProjectOverview';
import { projects } from '../data/projectData';

function Project({ project }) {
    // Get all projects excluding the current project
    const restProjects = () => {
        return projects.filter(p => p.id !== project.id);
    };

    return (
        <>
            {/* Content Section */}
            <section className='section-flex'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        gap: '3rem',
                        maxWidth: '39rem',
                        textAlign: 'center',
                        marginBottom: '8.75rem'
                    }}
                >
                    <div style={{ gap: '0.75rem' }}>
                        <h5 style={{ color: colors.primary }}>{project.tags.join(' / ')}</h5>
                        <h1>{project.title}</h1>
                    </div>
                    <span className='text'>{project.shortDescription}</span>
                </div>
            </section>

            <div
                style={{
                    width: '100vw',
                    height: '52.3125rem',
                    marginLeft: '-11.25rem',
                    marginRight: '-11.25rem'
                }}
            >
                <img
                    src="/media_jungle/banner.png"
                    alt="Project Banner"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <section style={{ gap: '2rem', paddingLeft: '3.75rem', paddingRight: '3.75rem' }}>
                <h2>Introduction</h2>
                <span className='text'>{project.introduction}</span>
            </section>

            <section style={{ gap: '2rem', paddingLeft: '3.75rem', paddingRight: '3.75rem' }}>
                <h2>Problem overview</h2>
                <span className='text'>
                    {project.problemOverview.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </span>
            </section>

            <section style={{ gap: '2rem', paddingLeft: '3.75rem', paddingRight: '3.75rem' }}>
                <h2>Design process</h2>
                <span className='text'>
                    {project.designProcess.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </span>
            </section>

            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '52.3125rem',
                    marginLeft: '-11.25rem',
                    marginRight: '-11.25rem',
                    backgroundColor: project.color,
                    marginTop: '13.75rem'
                }}
            >
                <img
                    src={project.img}
                    alt="Project"
                    style={{
                        height: '673px',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <section style={{ gap: '2rem', paddingLeft: '3.75rem', paddingRight: '3.75rem' }}>
                <h2>Result</h2>
                <span className='text'>
                    {project.result.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </span>
            </section>

            <section style={{ paddingLeft: '3.75rem', paddingRight: '3.75rem', textAlign: 'center', alignItems: 'center' }}>
                <h3>See more of my Work</h3>
                <ProjectOverview projects={restProjects()} />
            </section>
        </>
    );
}

export default Project;
