import React from 'react';
import Card from './Card';

const Projects = () => {
  const projects = [
    {
      title: "CyberZoo: Developing a Cyber-Physical Animal Tamer System",
      image: "/cyberzoo.jpg",
      plname: "Dr. Rajiv Kumar",
      coplname: "Mr. Himanshu Suyal",
      description: "Developing an innovative system to monitor and interact with animals using cyber-physical interfaces."
    },
    {
      title: "Design and Development of a Hybrid Aerial-Aquatic Drone",
      image: "/hybrid-drone.jpg",
      plname: "PI: Dr. Abhishek Jha",
      coplname: "",
      description: "Creating a drone capable of operating in both air and water environments for multi-purpose applications."
    },
    {
      title: "Building an Intelligent and Automated Smart Vehicle Parking System",
      image: "/smart-parking.jpg",
      plname: "Dr. Sartaj Khan",
      coplname: "Mr. Chandan Pal, Mr. Animesh, Mr. Harshvardhan, Mr. Digvijay",
      description: "Developing an AI-powered system to optimize parking space utilization in urban areas."
    },
    {
      title: "IoT-Based Waste Management System",
      image: "/iot-waste.jpg",
      plname: "Dr. Hemant Nautiyal",
      coplname: "Ms. Sakshi Chamolia, Ms. Preeti, Mr. Jatin Rawal, Mr. Saksham",
      description: "Implementing smart sensors and IoT technology for efficient waste collection and management."
    },
    {
      title: "EyesOnyx: AI-enabled Smart Glasses for the Blind and Visually Impaired",
      image: "/smart-glasses.jpg",
      plname: "Dr. Sono Bhardawaj",
      coplname: "Mr. Uday Gupta, Mr. Saksham Arya, Mr. Rahul Singh",
      description: "Creating assistive technology using computer vision and AI to help visually impaired individuals navigate their environment."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Milestones of <span className="text-[#841B31]">Innovation</span>
        </h1>
        <p className="text-xl text-gray-600">
          Projects in Progress at Shivalik Incubation Center
        </p>
        <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
      </div>

      {/* Description */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          With a mission to promote entrepreneurship, the incubation center at Shivalik College, Dehradun, shares a vision of becoming a hub of innovation. We have led the way in education by becoming the first privately affiliated institute to establish a state-of-the-art incubation center, recognized and funded by the Uttarakhand Startup Council, the Directorate of Industries, and the Government of India. With initiatives like CBII and iHUB Shivalik, we are working towards the mission to provide business development assistance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            image={project.image}
            plname={project.plname}
            coplname={project.coplname}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;