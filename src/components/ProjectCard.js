import React from 'react'

const ProjectCard = ({ project }) => {
    const { projectName, location, priceRange, builderName } = project;
  return (
    <div className="border rounded-md p-4 shadow-md mb-4">
      <h2 className="text-lg font-bold">{projectName}</h2>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-green-600">{priceRange}</p>
      <p className="text-sm text-gray-800">Builder: {builderName}</p>
    </div>
  )
}

export default ProjectCard