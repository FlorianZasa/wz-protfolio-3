import React from 'react'
import ProjectOverview from '../components/ProjectOverview'

import { projects } from '../data/projectData';

function Portfolio() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ProjectOverview projects={projects} />
    </div>
  )
}

export default Portfolio