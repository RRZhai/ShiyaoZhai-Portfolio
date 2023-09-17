import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="projects item">
        <div className="projects image">{project.image}</div>
        <div className="projects demo">{project.demo}</div>
    </div>
  )
}

export default ProjectCard