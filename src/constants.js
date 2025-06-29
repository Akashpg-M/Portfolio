import ChatApp from "./assets/projects/ChatApp.png";
import DevHub from "./assets/projects/DevHub.png";
import ECommerce from "./assets/projects/E-Commerce.png";
import IBM_DEVOPS from "./assets/certificates/IBM_DEVOPS.pdf";
import IBM_CLOUD_COMPUTING from "./assets/certificates/IBM_CLOUD_COMPUTING.pdf";
import NPTEL_COMPETITIVE_PROGRAMMING from "./assets/certificates/NPTEL_COMPETITIVE_PROGRAMMING.pdf";
import NPTEL_LLM from "./assets/certificates/NPTEL_LLM.pdf";
import JDBC from "./assets/certificates/JDBC.pdf";
import GERMAN_LANGUAGE from "./assets/certificates/GERMAN_LANGUAGE.pdf";
// import AI_ML_DL from "./assets/certificates/AI_ML_DL.pdf";

export const HERO_CONTENT = `My Interests lie in exploring new technologies, coding, and building innovative projects.`;

export const ABOUT_PARAGRAPH = [
  `I’m a Computer Science undergraduate at Shiv Nadar University, Chennai. I have a strong interest in software development, especially in the areas of web development, artificial intelligence, real-time systems, IoT, and cloud computing.`,

  `Over time, I’ve been exploring how these technologies work together to build useful, connected applications. I enjoy working on full-stack web projects, building APIs, integrating applications with AI.`,

  `I’m also interested in real-time communication systems and how cloud platforms can help scale modern applications. I'm continuously learning by building projects, exploring new tools, and understanding how to design systems that are practical and efficient.`
];

export const PROJECTS = [
    {
      title: "Developer Hub",
      image: DevHub,
      description:
        "A community-driven platform for developers to form groups, collaborate on projects, manage tasks, and communicate in real-time. Includes private chats, role-based access, and AI-assisted task planning.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zustand"],
      github: "https://github.com/Akashpg-M/Developer_Hub",
      link: "https://developerhub-app.onrender.com"
    },
    {
      title: "E-Commerce Platform",
      image: ECommerce,
      description:
        "A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Zustand"],
      github: "https://github.com/Akashpg-M/E-Commerce",
      link: "https://e-commerce-app-s82w.onrender.com"
    },
    {
      title: "Real-Time Chat App",
      image: ChatApp,
      description:
        "A real-time chat application built with the MERN stack and Socket.io for instant messaging. Features include user authentication, chat rooms, and global state management with Zustand.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Zustand"],
      github: "https://github.com/Akashpg-M/Real_Time_Chat_Application",
      link: "https://chat-app-a79m.onrender.com"
    },
    {
      title: "University LMS",
      description:
        "A Learning Management System designed for university-level education. Supports course creation, assignment management, student tracking, and role-based dashboards for students, instructors, and admins.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Akashpg-M/University_Management_System-LMS-",
      link: ""
    }
];


export const Certificates = [
  {
    title: "NPTEL Competitive Programming",
    provider: "NPTEL",
    description:
      "Completed the Competitive Programming course, covering advanced problem-solving techniques, algorithmic strategies, and performance optimization for coding contests.",
    certificateLink: NPTEL_COMPETITIVE_PROGRAMMING,
  },
  {
    title: "NPTEL Large Language Models (LLM)",
    provider: "NPTEL",
    description:
      "Completed the Large Language Models course, exploring transformer-based architectures and their real-world applications.",
    certificateLink: NPTEL_LLM,
  },
  {
    title: "IBM Cloud Computing",
    provider: "Coursera",
    description:
      "Earned the IBM Cloud Computing certificate, covering cloud deployment models, containerization, DevOps workflows, and scaling applications.",
    certificateLink: IBM_CLOUD_COMPUTING,
  },
  {
    title: "IBM DevOps",
    provider: "Coursera",
    description:
      "Completed the IBM DevOps specialization, gaining hands-on experience with CI/CD pipelines, infrastructure automation, and modern DevOps practices.",
    certificateLink: IBM_DEVOPS,
  },
  {
    title: "Database Management with Java",
    provider: "Amazon",
    description:
      "Completed the Database Management with Java course, focusing on relational databases, SQL, and Java integration.",
    certificateLink: JDBC,
  },
  {
    title: "AI/ML/Deep Learning Certifications",
    provider: "Infosis Spring Board",
    description:
      "A collection of certifications in Intoduction to Artificial Intelligence, Machine Learning, and Deep Learning",
    // certificateLink: "https://link.to/your-certificates-folder"
  },
  {
    title: "German Language Certificate - A1",
    provider: "German Institution",
    description:
      "Earned a certification on German Language - A1 Level",
    certificateLink: GERMAN_LANGUAGE,
  }
];



export const CONTACT = {
  address: "Chennai, Tamil Nadu, India",
  email: "akash@example.com",
  phoneNo: "+91 98765 43210",
  github: "https://github.com/akashmdev"
};
