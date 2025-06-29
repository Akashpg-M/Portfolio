import { ABOUT_PARAGRAPH } from "../constants";
import { FaGraduationCap } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  return (
    <AnimatedSection>
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 max-w-5xl mx-auto px-4">
          {/* Left Column - College Profile */}
          <div className="lg:w-1/3 p-6 rounded-lg bg-light-background-alt dark:bg-dark-background-alt shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap className="text-3xl text-light-accent dark:text-dark-accent" />
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Education</h3>
            </div>
            <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">Shiv Nadar University, Chennai</h4>
            <p className="text-light-text-alt dark:text-dark-text-alt mb-1">B.Tech in Computer Science (specialization in IoT)</p>
            <p className="mt-4 text-sm text-light-text-alt dark:text-dark-text-alt">2023 - 2027</p>
          </div>

          {/* Right Column - Introduction */}
          <div className="lg:w-2/3">
            {ABOUT_PARAGRAPH.map((para, idx) => (
              <p
                key={idx}
                className="text-lg leading-relaxed text-light-text-alt dark:text-dark-text-alt mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;