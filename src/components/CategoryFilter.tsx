import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isDarkMode: boolean;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange, isDarkMode }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm border transition-all duration-300
            ${
              activeCategory === category
                ? isDarkMode 
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}