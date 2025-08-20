import type { BlogPost } from '../data/blogPosts';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  isDarkMode: boolean;
}

export default function BlogCard({ post, isDarkMode }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    if (isDarkMode) {
      switch (category) {
        case 'Web Development':
          return 'bg-gray-800 text-gray-300';
        case 'Mobile Apps':
          return 'bg-gray-700 text-gray-200';
        case 'Freelancing':
          return 'bg-gray-600 text-gray-100';
        case 'Tech':
          return 'bg-gray-500 text-white';
        default:
          return 'bg-gray-800 text-gray-300';
      }
    } else {
      switch (category) {
        case 'Web Development':
          return 'bg-gray-100 text-gray-800';
        case 'Mobile Apps':
          return 'bg-gray-200 text-gray-700';
        case 'Freelancing':
          return 'bg-gray-300 text-gray-600';
        case 'Tech':
          return 'bg-gray-400 text-gray-900';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    }
  };

  return (
    <Link to={`/blog/${post.id}`}>
      <article
        className={`
          ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}
          rounded-2xl border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer
          flex flex-col h-full
        `}
        style={{ minHeight: 420 }}
      >
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300 filter"
            style={{ objectPosition: 'center' }}
          />
          {/* Optional: Add a subtle overlay for dark mode */}
          {isDarkMode && (
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-2xl pointer-events-none" />
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime}
            </div>
          </div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white group-hover:text-gray-300' : 'text-black group-hover:text-gray-700'} mb-2 transition-colors line-clamp-2`}>
            {post.title}
          </h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-base mb-4 line-clamp-3 transition-colors duration-300`}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-2">
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              <User className="w-4 h-4 mr-1" />
              <span className="mr-3">{post.author}</span>
              <span className="flex items-center">
                <span className="hidden sm:inline">|</span>
                <span className="ml-2">{post.date}</span>
              </span>
            </div>
            <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'} text-sm font-medium group-hover:translate-x-1 transition-all duration-200`}>
              <span className="hidden sm:inline">Read more</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}