import React from 'react'
import ProjectOverview from '../components/ProjectOverview'

import { projects } from '../data/projectData';

function Portfolio() {
  return (
    <ProjectOverview projects={projects} />
  )
}

export default Portfolio