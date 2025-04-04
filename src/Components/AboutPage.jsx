import React from 'react';
import clg1 from './Image/clg1.webp';
import clg2 from './Image/clg2.webp';
import msme from './Image/msme.webp'
import iitr from './Image/iitr.webp'

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* CBII Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    About <span className="text-[#841B31]">CBII</span>
                </h1>
                <p className="text-xl text-gray-600">
                    Centre of Business Incubation and Innovations
                </p>
                <div className="mt-8 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
                <div className="lg:w-1/2 flex flex-col">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Shivalik College launched CBII (Centre of Business Incubation and Innovations) in 2022, a pioneering initiative to nurture aspiring entrepreneurs. CBII was established with the aim of providing students with an environment that motivates formulation and implementation of business ideas.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Recognized and registered with MSME, Government of India, CBII provides access to mentors, resources, and funding, helping transform innovative ideas into successful businesses.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To support our transformative initiative, Uttarakhand Startup Council, Directorate of Industries, Government of Uttarakhand has sanctioned a financial support of <span className="font-bold text-[#841B31]">INR 1 Crore</span>. In collaboration with MSME, CBII provides physical, intellectual, and financial resources to the students, helping them establish businesses with societal and environmental impact.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">2022</p>
                            <p className="text-gray-600">Established</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">1Cr+</p>
                            <p className="text-gray-600">Funding</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="relative h-full" style={{ paddingBottom: '100%' }}>
                        <img
                            src={clg1}
                            alt="CBII at Shivalik College"
                            className="absolute h-full w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md hidden lg:block">
                            <p className="font-bold text-[#841B31]">MSME Registered</p>
                            <p className="text-sm text-gray-600">Government of India</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* iHub Shivalik Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    About <span className="text-[#841B31]">iHub Shivalik</span>
                </h1>
                <p className="text-xl text-gray-600">
                    Research Innovation and Entrepreneurial Hub
                </p>
                <div className="mt-8 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
                <div className="lg:w-1/2 flex flex-col">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            iHub Shivalik is another initiative by Shivalik College, Dehradun, to foster research innovation and entrepreneurial culture for students. Established in 2022, iHub Shivalik – a Spoke of iHUB DivyaSampark, IIT Roorkee – was launched by Shivalik College in association with IIT Roorkee.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The incubation program is aimed at instilling an entrepreneurial mindset in students. The students are provided with business development assistance including the availability of infrastructure, mentorship, and training support.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The students, utilizing the entrepreneurial opportunities, have secured the 6th position in the Startup Uttarakhand Grand Challenge 2023. Subsequently, the students were allotted a monetary prize of <span className="font-bold text-[#841B31]">INR 2 Lacs</span> by the Honourable Chief Minister of Uttarakhand. To support ongoing projects, we have tie-ups with different funding agencies to provide seed funds for business ideas that have promising potential as successful businesses.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">2022</p>
                            <p className="text-gray-600">Established</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">2L+</p>
                            <p className="text-gray-600">Prize Money</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="relative h-full" style={{ paddingBottom: '100%' }}>
                        <img
                            src={clg2}
                            alt="iHub Shivalik at Shivalik College"
                            className="absolute h-full w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden lg:block">
                            <p className="font-bold text-[#841B31]">IIT Roorkee Partner</p>
                            <p className="text-sm text-gray-600">iHUB DivyaSampark</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-20">
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Recognitions & <span className="text-[#841B31]">Collaborations</span>
    </h2>
    <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
  </div>

  {/* Collaboration Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
          <img 
            src={msme} 
            alt="MSME Logo" 
            className="h-24 object-contain"
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#841B31] mb-3">MSME Registered</h3>
          <p className="text-gray-700">
            CBII is officially recognized and registered with MSME, Government of India, 
            for promoting entrepreneurship and supporting startups with resources, 
            mentorship, and funding opportunities.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
          <img 
            src={iitr} 
            alt="IIT Roorkee Logo" 
            className="h-24 object-contain"
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#841B31] mb-3">IIT Roorkee Partnership</h3>
          <p className="text-gray-700">
            iHub Shivalik collaborates with IIT Roorkee as a Spoke of iHUB DivyaSampark, 
            providing students with cutting-edge research opportunities and entrepreneurial 
            guidance from one of India's premier institutions.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Additional Stats */}
  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
      <p className="text-3xl font-bold text-[#841B31]">50+</p>
      <p className="text-gray-600">Startups Supported</p>
    </div>
    <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
      <p className="text-3xl font-bold text-[#841B31]">100+</p>
      <p className="text-gray-600">Mentors</p>
    </div>
    <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
      <p className="text-3xl font-bold text-[#841B31]">10+</p>
      <p className="text-gray-600">Industry Partners</p>
    </div>
    <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
      <p className="text-3xl font-bold text-[#841B31]">5+</p>
      <p className="text-gray-600">Funding Partners</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutPage;