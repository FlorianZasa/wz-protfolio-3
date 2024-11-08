import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectOverview({projects}) {
  return (
    <div style={{ display: 'flex', gap: '2.475rem', marginTop: '3rem' }}>
        {projects.length > 0 && (
        projects.map((project) => (
            <ProjectCard
            key={project.title}
            project={project}
            img_Width={project.imgSize[0]}
            imgHeight={project.imgSize[1]}
            />
        ))
        )}
    </div>
  )
}

export default ProjectOverview