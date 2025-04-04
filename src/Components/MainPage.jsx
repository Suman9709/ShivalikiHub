import React from 'react';
import shivalikImg from './Image/img13.webp';

const MainPage = () => {
    return (
        <div className="relative mt-16">

            <div className="relative">
                <img
                    src={shivalikImg}
                    alt="IHUB Shivalik"
                    className="w-full h-auto object-cover"
                />

                <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-4/5 md:w-3/5 lg:w-2/5 bg-white/10 backdrop-blur-sm 
                                 rounded-lg p-6 shadow-xl">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">IHUB Shivalik</h1>
                        <p className="text-lg md:text-xl text-gray-800">
                            An Access to Resource, Mentorship and Networking
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#841B31] text-white py-4 px-4">
                <p className="text-center text-lg md:text-xl font-medium">
                    Cutting edge labs, prototyping facilities | Connect with industry leaders
                </p>
            </div>
        </div>
    );
};

export default MainPage;