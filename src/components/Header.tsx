import React from "react";
import { Search, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  isDarkMode,
  toggleTheme,
}: HeaderProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
      } border-b sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div
              className={`w-8 h-8 ${
                isDarkMode ? "bg-white" : "bg-black"
              } rounded-full flex items-center justify-center transition-colors duration-300`}
            >
              <span
                className={`${
                  isDarkMode ? "text-black" : "text-white"
                } font-bold text-sm`}
              >
                DJ
              </span>
            </div>
            <span
              className={`ml-2 text-xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              } transition-colors duration-300`}
            >
              DevJourney
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8"></nav>

          {/* Search Bar & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } h-4 w-4`}
              />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`pl-10 pr-4 py-2 border ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-900 text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm w-64 transition-colors duration-300`}
              />
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } transition-colors duration-300`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile search bar only (no menu button) */}
          <div className="md:hidden flex items-center w-full justify-end">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              } transition-colors duration-300`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar below header */}
        <div className="md:hidden px-2 pt-2 pb-3 bg-inherit">
          <div className="relative mb-3">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } h-4 w-4`}
            />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`pl-10 pr-4 py-2 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm w-full transition-colors duration-300`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
