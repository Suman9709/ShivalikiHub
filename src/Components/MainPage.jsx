import React from 'react';
import shivalikImg from './Image/img13.webp';

const MainPage = () => {
    return (
        <div className="relative mt-16">
            {/* Hero Section with Image */}
            <div className="relative h-[50vh] min-h-[300px] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                <img
                    src={shivalikImg}
                    alt="IHUB Shivalik"
                    className="w-full h-full object-cover"
                />
                
                {/* Overlay Text Card */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 bg-white/10 backdrop-blur-sm
                                border border-white/20 rounded-xl p-4 md:p-6 shadow-2xl
                                transition-all duration-300 hover:shadow-3xl">
                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            IHUB Shivalik
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-800">
                            An Access to Resource, Mentorship and Networking
                        </p>
                    </div>
                </div>
            </div>

            {/* Red Banner */}
            <div className="w-full bg-[#841B31] text-white py-3 sm:py-4 px-4 animate-fadeIn">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
                        Cutting edge labs, prototyping facilities | Connect with industry leaders
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;