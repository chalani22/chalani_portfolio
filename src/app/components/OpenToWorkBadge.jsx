"use client";
import React from "react";

const OpenToWorkBadge = ({ position = "top-right" }) => {
    // Position classes based on prop
    const positionClasses = {
        "top-right": "top-2 right-2 sm:top-4 sm:right-4",
        "bottom-right": "bottom-2 right-2 sm:bottom-4 sm:right-4",
        "top-left": "top-2 left-2 sm:top-4 sm:left-4",
        "bottom-left": "bottom-2 left-2 sm:bottom-4 sm:left-4"
    };

    return (
        <div
            className={`absolute ${positionClasses[position]} z-10 group`}
            title="Available for new opportunities"
        >
            {/* Badge Container */}
            <div className="relative flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Pulsing LED Dot */}
                <div className="relative flex items-center justify-center">
                    {/* Outer glow ring - pulses */}
                    <span className="absolute inline-flex h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    {/* Inner solid dot */}
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-200 shadow-lg"></span>
                </div>

                {/* Badge Text */}
                <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                    Open to work
                </span>
            </div>

            {/* Tooltip - shows on hover */}
            <div className="absolute hidden group-hover:block top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-20">
                Available for new opportunities
                {/* Tooltip arrow */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
            </div>
        </div>
    );
};

export default OpenToWorkBadge;
