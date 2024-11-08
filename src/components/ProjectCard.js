import React from 'react'
import { colors } from '../styles/colors';
import './ProjectCard.css'


function ProjectCard({ project}) {
  return (
    <div className="project-card-container">
        <div className='project-card' style={{backgroundColor: project.color}}>
            <img src={project.img} alt="project" width={project.imgSize[0]} height={project.imgSize[1]} id="project-img" />
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '0.5rem'}}>
            <h5 style={{color: colors.primary}}>{project.tags.join(' / ')}</h5>
            <h4>{project.title} {project.subtitle && " - " + project.subtitle}</h4>
              
        </div>
    </div>
  )
}

export default ProjectCard