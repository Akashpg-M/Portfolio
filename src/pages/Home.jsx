import { HERO_CONTENT } from "../constants";
import { FaGithub, FaLinkedin, FaGraduationCap, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Akash M</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">Aspiring Software Developer</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - College Profile */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-2xl text-blue-400" />
              <h2 className="text-xl font-semibold">Shiv Nadar University, Chennai</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">B.Tech in Computer Science & Engineering</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2025</p>
          </div>

          {/* Right Column - Introduction and Interests */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {HERO_CONTENT}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-4 text-gray-800 dark:text-gray-200 text-lg">Areas of Interest</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI & Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  IoT & Real-time Systems
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex flex-col items-center group">
                <a 
                  href="https://www.linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-300 group-hover:border-blue-500 dark:group-hover:border-blue-400"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">LinkedIn</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-300 group-hover:border-gray-700 dark:group-hover:border-gray-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
                </a>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">GitHub</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <a 
                  href="https://leetcode.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-300 group-hover:border-amber-500"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors" />
                </a>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">LeetCode</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <button 
                  onClick={scrollToProjects}
                  className="flex items-center justify-center w-14 h-14 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-300 group-hover:border-purple-500 dark:group-hover:border-purple-400"
                  aria-label="View Projects"
                >
                  <FaCode className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
                </button>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;