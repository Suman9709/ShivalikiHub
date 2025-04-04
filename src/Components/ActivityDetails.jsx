import React from 'react';

const ActivityDetails = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default ActivityDetails;