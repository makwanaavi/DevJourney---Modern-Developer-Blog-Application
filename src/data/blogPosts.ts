export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  
    {
      id: 1,
      title: "Web Development Roadmap for Beginners",
      excerpt:
        "A comprehensive guide to starting your journey in web development. Learn the essential technologies, tools, and skills needed to become a successful web developer.",
      category: "Web Development",
      author: "Alex Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Getting Started with Web Development</h2>
      <p>This roadmap covers everything a beginner needs to enter the world of web development.</p>
      <h3>1. Basics</h3>
      <p>HTML, CSS, and JavaScript form the core of web development.</p>
      <h3>2. Frameworks</h3>
      <p>Learn popular frameworks like React, Angular, or Vue.</p>
      <h3>3. Projects</h3>
      <p>Build projects to improve your skills and portfolio.</p>
    `,
    },
    {
      id: 2,
      title: "Top 10 Must-Have Tools for Frontend Developers",
      excerpt:
        "Discover the most useful tools and extensions that can improve your productivity as a frontend developer.",
      category: "Web Development",
      author: "Sophia Lee",
      date: "Dec 18, 2024",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Frontend Tools That Make Life Easy</h2>
      <p>These tools save time and help developers build better websites.</p>
      <h3>1. VS Code</h3>
      <p>The most popular code editor with extensions.</p>
      <h3>2. Chrome DevTools</h3>
      <p>Debug and inspect code easily.</p>
      <h3>3. Package Managers</h3>
      <p>NPM and Yarn simplify dependency management.</p>
    `,
    },
    {
      id: 3,
      title: "How to Build a Responsive Website Step by Step",
      excerpt:
        "Learn the principles and techniques of responsive design to make your website look great on any device.",
      category: "Web Development",
      author: "Michael Brown",
      date: "Dec 22, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Responsive Design Basics</h2>
      <p>Responsive design ensures your site adapts to any screen size.</p>
      <h3>1. Flexible Grids</h3>
      <p>Use percentage-based layouts instead of fixed widths.</p>
      <h3>2. Media Queries</h3>
      <p>CSS media queries help target specific device sizes.</p>
      <h3>3. Mobile-First Approach</h3>
      <p>Design for small screens first, then scale up.</p>
    `,
    },
    {
      id: 4,
      title: "The Future of Web Development in 2025",
      excerpt:
        "Explore upcoming trends, tools, and frameworks that are shaping the future of web development.",
      category: "Web Development",
      author: "Emma Wilson",
      date: "Dec 25, 2024",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Emerging Trends in Web Development</h2>
      <p>Technology is rapidly evolving, and web development is no exception.</p>
      <h3>1. Web3</h3>
      <p>Decentralized apps and blockchain-based solutions.</p>
      <h3>2. AI Tools</h3>
      <p>AI-assisted coding and design tools are on the rise.</p>
      <h3>3. Performance</h3>
      <p>Focus on faster and more lightweight applications.</p>
    `,
    },
    {
      id: 5,
      title: "Why Tailwind CSS is Better Than Bootstrap",
      excerpt:
        "Compare Tailwind CSS and Bootstrap to understand which one is better for modern web projects.",
      category: "Web Development",
      author: "Liam Carter",
      date: "Dec 28, 2024",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Tailwind vs Bootstrap</h2>
      <p>Both frameworks are popular, but Tailwind offers a new approach.</p>
      <h3>1. Utility-First</h3>
      <p>Tailwind uses utility classes for flexibility.</p>
      <h3>2. Customization</h3>
      <p>Easier to create unique designs with Tailwind.</p>
      <h3>3. Popularity</h3>
      <p>Bootstrap is still widely used but feels outdated.</p>
    `,
    },
    {
      id: 6,
      title: "How to Create a Portfolio Website That Stands Out",
      excerpt:
        "A step-by-step guide to creating a professional portfolio that helps you land jobs and freelance gigs.",
      category: "Web Development",
      author: "Olivia Davis",
      date: "Jan 2, 2025",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Building a Great Portfolio</h2>
      <p>Your portfolio is your personal brand and first impression.</p>
      <h3>1. Showcase Projects</h3>
      <p>Include your best projects with descriptions.</p>
      <h3>2. About Me</h3>
      <p>Introduce yourself and highlight your skills.</p>
      <h3>3. Contact Section</h3>
      <p>Make it easy for clients to reach you.</p>
    `,
    },
    {
      id: 7,
      title: "Best Practices for Writing Clean JavaScript Code",
      excerpt:
        "Improve your coding skills with these best practices for writing clean and maintainable JavaScript.",
      category: "Web Development",
      author: "Noah Martinez",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Clean JavaScript Practices</h2>
      <p>Writing clean code improves readability and reduces bugs.</p>
      <h3>1. Naming Conventions</h3>
      <p>Use meaningful names for variables and functions.</p>
      <h3>2. Comments</h3>
      <p>Add comments where necessary but avoid over-commenting.</p>
      <h3>3. DRY Principle</h3>
      <p>Don’t Repeat Yourself – reuse code effectively.</p>
    `,
    },
    {
      id: 8,
      title: "How to Add Dark Mode in Your Website",
      excerpt:
        "Step-by-step guide to implementing dark mode on your website using CSS and JavaScript.",
      category: "Web Development",
      author: "Ava Taylor",
      date: "Jan 8, 2025",
      readTime: "3 min read",
      image:
        "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Implementing Dark Mode</h2>
      <p>Dark mode improves user experience and accessibility.</p>
      <h3>1. CSS Variables</h3>
      <p>Use CSS variables to define light and dark themes.</p>
      <h3>2. Toggle Button</h3>
      <p>Add a toggle switch with JavaScript.</p>
      <h3>3. Save Preference</h3>
      <p>Use localStorage to save user preferences.</p>
    `,
    },
    {
      id: 9,
      title: "SEO Tips Every Developer Should Know",
      excerpt:
        "Boost your website's visibility with these essential SEO practices tailored for developers.",
      category: "Web Development",
      author: "Ethan Miller",
      date: "Jan 11, 2025",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Developer SEO Basics</h2>
      <p>SEO is crucial for making your website discoverable.</p>
      <h3>1. Meta Tags</h3>
      <p>Add descriptive titles and meta descriptions.</p>
      <h3>2. Performance</h3>
      <p>Optimize loading speed for better rankings.</p>
      <h3>3. Accessibility</h3>
      <p>Use semantic HTML for screen readers and SEO.</p>
    `,
    },
    {
      id: 10,
      title: "Top 5 Mistakes Beginner Web Developers Make",
      excerpt:
        "Avoid these common mistakes that many beginners make when starting their web development journey.",
      category: "Web Development",
      author: "Mia Anderson",
      date: "Jan 14, 2025",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
      content: `
      <h2>Mistakes to Avoid</h2>
      <p>Beginners often repeat the same errors while learning web development.</p>
      <h3>1. Skipping Fundamentals</h3>
      <p>Without strong basics, advanced topics become hard.</p>
      <h3>2. Ignoring Git</h3>
      <p>Version control is essential for all developers.</p>
      <h3>3. Copy-Pasting Code</h3>
      <p>Always understand before using code snippets.</p>
    `,
    },
  ]

// Generate more blog posts based on the provided titles
const additionalTitles = [
  "How to Create a Portfolio Website That Stands Out",
  "Best Practices for Writing Clean JavaScript Code",
  "How to Add Dark Mode in Your Website",
  "SEO Tips Every Developer Should Know",
  "Top 5 Mistakes Beginner Web Developers Make",
  "Flutter vs React Native: Which is Best in 2025?",
  "How to Launch Your First Mobile App",
  "Best UI/UX Design Tips for Mobile Apps",
  "How to Monetize Your Mobile Application",
  "Firebase for Beginners: Complete Guide",
  "How to Start Freelancing with No Experience",
  "Fiverr vs Upwork: Best Freelancing Platform?",
  "How to Build a Winning Freelance Portfolio",
  "Git & GitHub for Absolute Beginners",
  "Why Python is the Best First Language",
];

const categories = ["Web Development", "Mobile Apps", "Freelancing", "Tech"];
const authors = [
  "Alex Johnson",
  "Sarah Miller",
  "Mike Chen",
  "Emma Davis",
  "David Wilson",
  "Lisa Thompson",
  "Tom Rodriguez",
  "Jane Smith",
];
const images = [
  "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500",
];

// Generate additional blog posts
additionalTitles.forEach((title, index) => {
  const id = index + 6;
  const category = categories[index % categories.length];
  const author = authors[index % authors.length];
  const image = images[index % images.length];
  const date = `Dec ${10 - (index % 10)}, 2024`;
  const readTime = `${5 + (index % 8)} min read`;

  blogPosts.push({
    id,
    title,
    excerpt: `Learn about ${title.toLowerCase()} with practical examples and expert insights. This comprehensive guide covers everything you need to know.`,
    category,
    author,
    date,
    readTime,
    image,
    content: `
      <h2>${title}</h2>
      <p>This is a comprehensive guide about ${title.toLowerCase()}. We'll cover all the essential aspects you need to know.</p>
      
      <h3>Introduction</h3>
      <p>Understanding the fundamentals is crucial for success in this area. Let's dive into the key concepts.</p>
      
      <h3>Best Practices</h3>
      <p>Following industry best practices will help you achieve better results and avoid common pitfalls.</p>
      
      <h3>Practical Examples</h3>
      <p>Real-world examples demonstrate how to apply these concepts in your own projects.</p>
      
      <h3>Conclusion</h3>
      <p>By following this guide, you'll have a solid foundation to build upon and continue your learning journey.</p>
    `,
  });
});
