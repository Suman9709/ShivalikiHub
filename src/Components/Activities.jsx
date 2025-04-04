import React from 'react';
import ActivityDetails from './ActivityDetails';
import scienceChampionShip from './Image/Aimg3.png';
import hackathon from './Image/Aimg2.png';
import shivatech from './Image/Aimg1.png';

const Activities = () => {
  const activities = [
    {
      title: "Science Championship 3.0",
      desc: "On November 16, 2024, Shivalik College of Engineering, in collaboration with USERC, organized Science Championship 3.0. The highlight of the program was the innovation and brilliance of young minds. The event had diverse participation from different reputed schools, both private and public. The projects and models based on themes of science, society, and environment proved that the next generation is so close to scientific excellence. The event hosted more than 80 schools, 180 teams, and over 800 students. With an innovative theme, the event focused on themes of Science, Society, and Environment. The event was designed to instill a deep passion for technology and broadening scientific knowledge.",
      image: scienceChampionShip
    },
    {
      title: "Hackathon- 2024",
      desc: "The Incubation Center of Shivalik College, CBII and iHUB Shivalik organised Hackathon 2024 with a vision to generate high-value, actionable business ideas and product concepts. The event was organised to foster a spirit of entrepreneurship among young minds. More than 300 students from 63+ teams participated in this collaborative technical event, proposing solutions to industrial and social problem statements. The event had participation from various institutes, including colleges and universities, from regions students of Uttarakhand, UP, and the NCR region. During the event, the participating teams built actionable business ideas and product concepts by working relentlessly for 30 hours.",
      image: hackathon
    },
    {
      title: "Shivatech-2024: 15 November 2024",
      desc: "The Institution Innovation Council of Shivalik College – (CBII), iHUB Shivalik – organised an impactful event on 15 November 2024. In Shiva-Tech 2024, 12 different events were organised with the aim of providing researchers and students present innovative solutions to industrial and societal problems integrating technology. Different events included Project Demonstration, Working Model in Pharmacy & Health, Highway to Hell, LAN Gaming – Free Fire & VGMI, Code Hunt, Building Bridge, Tower Making, Best Out of Waste, Wrestling Machine, Business Model Presentation, Lego Assembly & Race, Logo Making, and Digital Logic Design. The event had participation from 250+ students from different institutes.",
      image: shivatech
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start-Up <span className="text-[#841B31]">Activities</span>
        </h1>
        <p className="text-xl text-gray-600">
          Innovation and Entrepreneurship at Shivalik College
        </p>
        <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
      </div>

      {/* Activities List */}
      <div className="space-y-16">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            {/* Text Content (Left for even, Right for odd) */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{activity.title}</h2>
              <p className="text-gray-600 leading-relaxed">{activity.desc}</p>
            </div>
            
            {/* Image (Right for even, Left for odd) */}
            <div className="md:w-1/3">
              <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;