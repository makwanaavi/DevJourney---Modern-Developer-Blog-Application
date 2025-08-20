import React from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  return (
    <div
      className={`
        ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-200'}
        py-20 sm:py-28 transition-colors duration-300
      `}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'} mb-6 transition-colors duration-300`}>
          DevJourney...
        </h1>
        <p className={`text-lg sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300`}>
          Explore insights on <span className="font-semibold text-indigo-500">web development</span>, <span className="font-semibold text-pink-500">mobile apps</span>, <span className="font-semibold text-green-500">freelancing</span>, and <span className="font-semibold text-yellow-500">technology trends...</span>
        </p>
      </div>
    </div>
  );
}