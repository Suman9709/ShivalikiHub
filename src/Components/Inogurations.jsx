import React from 'react';
import img1 from './Image/Iimg1.webp';
import img2 from './Image/Iimg2.webp';
import img3 from './Image/Iimg3.webp';
import img4 from './Image/Iimg4.webp';
import img5 from './Image/Iimg5.webp';
import img6 from './/Image/iimg6.webp';
import img7 from './Image/Iimg7.webp';

const Inaugurations = () => {
  const images = [
    { 
      src: img1, 
      alt: "CBII Launch Event", 
      caption: "Grand opening ceremony with dignitaries",
      aspect: "aspect-[4/3]" 
    },
    { 
      src: img2, 
      alt: "Guest Speaker Session", 
      caption: "Industry experts sharing insights",
      aspect: "aspect-[3/4]" 
    },
    { 
      src: img3, 
      alt: "Ribbon Cutting Moment", 
      caption: "Official inauguration moment",
      aspect: "aspect-[16/9]" // Wide landscape
    },
    { 
      src: img4, 
      alt: "Faculty Interaction", 
      caption: "Faculty members discussing projects",
      aspect: "aspect-square" // Square image
    },
    { 
      src: img5, 
      alt: "Student Participation", 
      caption: "Students showcasing innovations",
      aspect: "aspect-[5/4]" // Slightly taller
    },
    { 
      src: img6, 
      alt: "Award Distribution", 
      caption: "Recognizing outstanding contributors",
      aspect: "aspect-[4/5]" // Portrait
    },
    { 
      src: img7, 
      alt: "Networking Session", 
      caption: "Participants exchanging ideas",
      aspect: "aspect-[3/2]" // Classic photo ratio
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#841B31]">Inaugural Moments</span>
        </h1>
        <p className="text-xl text-gray-600">
          Celebrating the beginning of innovation at Shivalik College
        </p>
        <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
      </div>

      {/* Dynamic Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className={`w-full ${images[0].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[0].alt}</p>
                <p className="text-sm opacity-90">{images[0].caption}</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className={`w-full ${images[3].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[3].alt}</p>
                <p className="text-sm opacity-90">{images[3].caption}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[5].src}
              alt={images[5].alt}
              className={`w-full ${images[1].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[5].alt}</p>
                <p className="text-sm opacity-90">{images[5].caption}</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[4].src}
              alt={images[4].alt}
              className={`w-full ${images[4].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[4].alt}</p>
                <p className="text-sm opacity-90">{images[4].caption}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className={`w-full ${images[2].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[1].alt}</p>
                <p className="text-sm opacity-90">{images[1].caption}</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className={`w-full ${images[5].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[2].alt}</p>
                <p className="text-sm opacity-90">{images[2].caption}</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={images[6].src}
              alt={images[6].alt}
              className={`w-full ${images[6].aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-semibold">{images[6].alt}</p>
                <p className="text-sm opacity-90">{images[6].caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inaugurations;