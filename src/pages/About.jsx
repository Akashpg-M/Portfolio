import { ABOUT_TEXT } from "../constants";
import { FaGithub, FaLinkedin, FaGraduationCap, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 border-b border-neutral-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - College Profile */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-2xl text-purple-400" />
            <h3 className="text-xl font-semibold">Shiv Nadar University, Chennai</h3>
          </div>
          <p className="text-neutral-400 mb-2">B.Tech in Computer Science</p>
          <p className="text-sm text-neutral-500">2023 - 2027</p>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Relevant Coursework:</h4>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development</li>
              <li>• Database Management</li>
              <li>• Artificial Intelligence</li>
              <li>• Cloud Computing</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Introduction */}
        <div className="lg:w-2/3">
          <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
            {ABOUT_TEXT}
          </p>          
        </div>
      </div>
    </div>
  );
};

export default About;