import React from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} py-16 sm:py-20 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-6 transition-colors duration-300`}>
          DevJourney
        </h1>
        <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300`}>
          Explore insights on web development, mobile apps, freelancing, and technology trends.
        </p>
      </div>
    </div>
  );
}