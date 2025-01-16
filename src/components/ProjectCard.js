import React from 'react';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { projectName, location, priceRange, imageUrl } = project;

  return (
    <div className="relative border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-64">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={projectName}
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Project Information */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h2 className="text-lg font-semibold mb-2 underline italic">{projectName}</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span className="text-sm font-medium">Location:</span>
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-green-400" />
            <span className="text-sm font-medium">Price Range:</span>
            <span className="text-sm">{priceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
