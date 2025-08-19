import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
        ? 'text-white border-b border-purple-500' 
        : 'text-[#ADB7BE] border-b border-transparent';
    
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white hover:border-green-700 pb-2 transition-colors duration-300 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;