import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../styles/colors';
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card-container">
      <div className='project-card' style={{backgroundColor: project.color}}>
        <img src={project.logo} alt="project" width={project.imgSize[0]} height={project.imgSize[1]} id="project-img" />
      </div>
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '0.5rem'}}>
        <h5 style={{color: colors.primary}}>{project.tags.join(' / ')}</h5>
        <h4>{project.title}</h4>
      </div>
    </Link>
  )
}

export default ProjectCard;