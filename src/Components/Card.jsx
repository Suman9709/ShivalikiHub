import React from 'react';

const Card = ({ title, image, plname, coplname, description }) => {
  return (
    <div className="h-full flex flex-col max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-2 border border-gray-100">
      {/* Image Section */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt="Project" 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Project Lead</p>
              <p className="text-gray-700 font-semibold">{plname}</p>
            </div>
            
            {coplname && (
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Team Members</p>
                <p className="text-gray-700 font-medium text-sm">
                  {coplname}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* View Button */}
        <button className="mt-6 w-full bg-[#841B31] hover:bg-[#6e1528] text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium">
          View Project Details
        </button>
      </div>
    </div>
  );
};

export default Card;