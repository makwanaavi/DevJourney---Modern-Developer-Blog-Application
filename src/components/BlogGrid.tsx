import React, { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import { blogPosts } from '../data/blogPosts';

interface BlogGridProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export default function BlogGrid({ searchQuery, isDarkMode }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Freelancing', 'Tech'];

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          isDarkMode={isDarkMode}
        />

        {searchQuery && (
          <div className="mb-6">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300`}>
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found for "{searchQuery}"
            </p>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg transition-colors duration-300`}>
              No blog posts found matching your criteria.
            </p>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm mt-2 transition-colors duration-300`}>
              Try adjusting your search or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} isDarkMode={isDarkMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}