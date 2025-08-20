import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

interface BlogPostProps {
  isDarkMode: boolean;
}

export default function BlogPost({ isDarkMode }: BlogPostProps) {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-black" : "bg-white"
        } transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              } mb-4`}
            >
              Blog post not found
            </h1>
            <Link
              to="/"
              className={`inline-flex items-center ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              } transition-colors duration-300`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  } 

  const getCategoryColor = (category: string) => {
    if (isDarkMode) {
      switch (category) {
        case "Web Development":
          return "bg-gray-800 text-gray-300";
        case "Mobile Apps":
          return "bg-gray-700 text-gray-200";
        case "Freelancing":
          return "bg-gray-600 text-gray-100";
        case "Tech":
          return "bg-gray-500 text-white";
        default:
          return "bg-gray-800 text-gray-300";
      }
    } else {
      switch (category) {
        case "Web Development":
          return "bg-gray-100 text-gray-800";
        case "Mobile Apps":
          return "bg-gray-200 text-gray-700";
        case "Freelancing":
          return "bg-gray-300 text-gray-600";
        case "Tech":
          return "bg-gray-400 text-gray-900";
        default:
          return "bg-gray-100 text-gray-800";
      }
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link
          to="/"
          className={`inline-flex items-center ${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-700 hover:text-black"
          } mb-8 transition-colors duration-300`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        {/* Hero image */}
        <div className="aspect-w-16 aspect-h-9 mb-8 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 object-cover rounded-2xl filter"
          />
        </div>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${getCategoryColor(
                post.category
              )}`}
            >
              {post.category}
            </span>
            <div
              className={`flex items-center ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
            >
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDarkMode ? "text-white" : "text-black"
            } mb-4 leading-tight transition-colors duration-300`}
          >
            {post.title}
          </h1>

          <div
            className={`flex flex-wrap items-center ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-sm space-x-4`}
          >
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className={isDarkMode ? "dark" : ""}>
          <article
            className={`prose prose-lg max-w-none transition-colors duration-300 ${
              isDarkMode
                ? "prose-invert text-white"
                : "text-black"
            }`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related posts or call to action */}
        <div
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          } transition-colors duration-300`}
        >
          <div className="text-center">
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              } mb-4 transition-colors duration-300`}
            >
              Enjoyed this article?
            </h3>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-6 transition-colors duration-300`}
            >
              Explore more articles on DevJourney
            </p>
            <Link
              to="/"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              View all articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

