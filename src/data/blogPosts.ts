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
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Web development is one of the most in-demand and rewarding careers in the technology sector today. 
      With millions of websites and applications being built daily, skilled web developers are always needed. 
      This roadmap is designed specifically for beginners who want to understand the path to becoming a 
      professional web developer.</p>

      <h2>Steps to Start Your Web Development Journey</h2>
      <h3>1. Learn the Fundamentals</h3>
      <p>Master HTML, CSS, and JavaScript – the backbone of web development.</p>

      <h3>2. Choose Your Development Path</h3>
      <p>Frontend, Backend, or Full-Stack depending on your interest.</p>

      <h3>3. Build Real Projects</h3>
      <p>Create portfolio websites, blogs, and apps to practice skills.</p>

      <h3>4. Learn Version Control</h3>
      <p>Use Git and GitHub for collaboration and code management.</p>

      <h3>5. Explore Frameworks</h3>
      <p>Learn React, Vue, or backend frameworks like Express/Django.</p>

      <h3>6. Work on Soft Skills</h3>
      <p>Problem-solving, communication, and teamwork are key.</p>

      <h3>7. Stay Updated</h3>
      <p>Follow blogs, join communities, and keep learning.</p>

      <h2>Conclusion</h2>
      <p>Web development is a continuous journey. With consistent practice, 
      you can become a skilled developer and explore endless opportunities.</p>
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
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Frontend developers rely on tools that enhance productivity, debugging, 
      and project efficiency. These tools make the development process faster, 
      smoother, and more enjoyable.</p>

      <h2>Essential Tools for Frontend Development</h2>
      <h3>1. VS Code</h3>
      <p>Lightweight, extensible, and widely used IDE.</p>

      <h3>2. Chrome DevTools</h3>
      <p>Helps inspect, debug, and optimize web apps directly in the browser.</p>

      <h3>3. Package Managers (NPM, Yarn)</h3>
      <p>Manage project dependencies with ease.</p>

      <h3>4. Git & GitHub</h3>
      <p>Version control and collaboration platform.</p>

      <h3>5. Prettier & ESLint</h3>
      <p>Keep your code clean, consistent, and bug-free.</p>

      <h3>6. Figma</h3>
      <p>Collaborative design tool for prototyping UI/UX.</p>

      <h3>7. Postman</h3>
      <p>API testing tool every developer should know.</p>

      <h3>8. Webpack / Vite</h3>
      <p>Modern bundlers for optimizing project assets.</p>

      <h3>9. Tailwind CSS</h3>
      <p>A utility-first CSS framework for rapid UI building.</p>

      <h3>10. Lighthouse</h3>
      <p>Automated tool for checking performance, SEO, and accessibility.</p>

      <h2>Conclusion</h2>
      <p>Using the right tools not only speeds up your work but also helps you 
      maintain high-quality code and deliver professional projects.</p>
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
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Responsive design ensures that your website adapts seamlessly across 
      desktops, tablets, and smartphones. With the growing number of devices, 
      it has become a must for every developer.</p>

      <h2>Steps to Build a Responsive Website</h2>
      <h3>1. Use Flexible Grids</h3>
      <p>Build layouts with percentages instead of fixed pixels.</p>

      <h3>2. Apply Media Queries</h3>
      <p>Target different device sizes using CSS media queries.</p>

      <h3>3. Mobile-First Design</h3>
      <p>Start designing for smaller screens and scale upwards.</p>

      <h3>4. Flexible Images</h3>
      <p>Use max-width: 100% to make images resize within containers.</p>

      <h3>5. Test on Devices</h3>
      <p>Always test responsiveness on multiple devices and browsers.</p>

      <h2>Conclusion</h2>
      <p>A responsive website improves user experience, accessibility, and SEO. 
      Following these steps ensures your site looks professional everywhere.</p>
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
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is evolving rapidly. Developers must stay 
      updated with the latest trends to remain relevant in the job market.</p>

      <h2>Trends Shaping the Future</h2>
      <h3>1. Web3 and Blockchain</h3>
      <p>Decentralized apps and blockchain-based ecosystems are on the rise.</p>

      <h3>2. Artificial Intelligence</h3>
      <p>AI-assisted coding tools and chatbots will dominate development.</p>

      <h3>3. Performance & Optimization</h3>
      <p>Lightweight frameworks and faster apps will be a priority.</p>

      <h3>4. Cross-Platform Apps</h3>
      <p>Frameworks like Flutter and React Native will keep growing.</p>

      <h2>Conclusion</h2>
      <p>2025 promises exciting changes. Developers who adapt and learn 
      continuously will thrive in the industry.</p>
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
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Tailwind CSS and Bootstrap are the two most popular CSS frameworks. 
      But Tailwind offers more flexibility and modern design options.</p>

      <h2>Comparison</h2>
      <h3>1. Utility-First Approach</h3>
      <p>Tailwind gives full control using utility classes, unlike Bootstrap’s pre-styled components.</p>

      <h3>2. Customization</h3>
      <p>Tailwind is highly customizable, while Bootstrap often looks generic.</p>

      <h3>3. Community & Popularity</h3>
      <p>Bootstrap is older and widely used, but Tailwind is rapidly growing in adoption.</p>

      <h2>Conclusion</h2>
      <p>For unique, modern designs – Tailwind CSS is the better choice for 
      developers in 2025 and beyond.</p>
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
      <h2>Introduction</h2>
      <p>Your portfolio is your digital identity. A well-designed portfolio can 
      help you stand out from competitors and land jobs.</p>

      <h2>Steps to Build a Portfolio</h2>
      <h3>1. Showcase Your Best Projects</h3>
      <p>Highlight 3–5 of your best works with detailed case studies.</p>

      <h3>2. About Me Section</h3>
      <p>Introduce yourself and highlight your skills, passions, and journey.</p>

      <h3>3. Contact Page</h3>
      <p>Provide clear contact options for clients and recruiters.</p>

      <h2>Conclusion</h2>
      <p>A portfolio is not just a website – it’s your personal brand. 
      Keep it updated, professional, and aligned with your career goals.</p>
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
      <h2>Introduction</h2>
      <p>Writing clean and maintainable JavaScript code is essential for teamwork 
      and long-term projects. It improves readability and reduces bugs.</p>

      <h2>Best Practices</h2>
      <h3>1. Naming Conventions</h3>
      <p>Use clear and descriptive names for variables and functions.</p>

      <h3>2. Use Comments Wisely</h3>
      <p>Explain complex logic, but avoid excessive commenting.</p>

      <h3>3. DRY Principle</h3>
      <p>Don’t Repeat Yourself – reuse and refactor code when possible.</p>

      <h3>4. Consistent Formatting</h3>
      <p>Use Prettier or ESLint to keep your code consistent.</p>

      <h2>Conclusion</h2>
      <p>Clean code makes collaboration easier and ensures long-term success 
      in software development.</p>
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
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Dark mode improves readability at night and reduces eye strain. 
      Many modern apps and websites now include this feature.</p>

      <h2>Steps to Add Dark Mode</h2>
      <h3>1. Use CSS Variables</h3>
      <p>Create light and dark theme colors using variables.</p>

      <h3>2. Add a Toggle Button</h3>
      <p>Use JavaScript to switch themes with a toggle.</p>

      <h3>3. Save User Preference</h3>
      <p>Use localStorage so the chosen mode persists across sessions.</p>

      <h2>Conclusion</h2>
      <p>Dark mode is a small feature but greatly enhances UX. 
      Implement it in your projects for a modern, user-friendly website.</p>
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
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>SEO (Search Engine Optimization) is not just for marketers. 
      Developers must build SEO-friendly websites to attract traffic.</p>

      <h2>Important SEO Practices</h2>
      <h3>1. Add Meta Tags</h3>
      <p>Use descriptive titles and meta descriptions for better rankings.</p>

      <h3>2. Improve Performance</h3>
      <p>Fast-loading sites rank higher in search engines.</p>

      <h3>3. Mobile Optimization</h3>
      <p>Ensure your site works seamlessly on mobile devices.</p>

      <h3>4. Semantic HTML</h3>
      <p>Use proper tags like &lt;header&gt;, &lt;article&gt;, &lt;footer&gt; 
      for better SEO and accessibility.</p>

      <h2>Conclusion</h2>
      <p>Good SEO practices make your site discoverable and user-friendly. 
      Always optimize for both humans and search engines.</p>
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
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
    content: `
      <h2>Introduction</h2>
      <p>Beginners often struggle in web development by repeating the same 
      mistakes. Recognizing and avoiding them can save time and effort.</p>

      <h2>Common Mistakes</h2>
      <h3>1. Skipping Fundamentals</h3>
      <p>Jumping into frameworks without strong basics leads to confusion.</p>

      <h3>2. Ignoring Git</h3>
      <p>Version control is a must for any developer.</p>

      <h3>3. Copy-Pasting Code Blindly</h3>
      <p>Always understand the logic before using code snippets.</p>

      <h3>4. Not Testing on Multiple Devices</h3>
      <p>Websites should work on all screen sizes.</p>

      <h3>5. Poor Documentation</h3>
      <p>Not documenting code creates problems later for you and your team.</p>

      <h2>Conclusion</h2>
      <p>Learn from these mistakes early on and you’ll progress faster in your 
      web development journey.</p>
    `,
  },
];

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
