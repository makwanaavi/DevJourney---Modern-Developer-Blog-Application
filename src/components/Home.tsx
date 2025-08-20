import React from 'react';
import Hero from './Hero';
import BlogGrid from './BlogGrid';

interface HomeProps {
  searchQuery: string;
  isDarkMode: boolean;
}

export default function Home({ searchQuery, isDarkMode }: HomeProps) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
      <BlogGrid searchQuery={searchQuery} isDarkMode={isDarkMode} />
    </>
  );
}