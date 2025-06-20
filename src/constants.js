import ChatApp from "./assets/projects/ChatApp.png";
import DevHub from "./assets/projects/DevHub.png";
import ECommerce from "./assets/projects/E-Commerce.png";

export const HERO_CONTENT = `I'm passionate about technology, coding, and building innovative projects.`;

export const ABOUT_TEXT = `I’m a Computer Science undergraduate at Shiv Nadar University, Chennai. I have a strong interest in software development, especially in the areas of web development, artificial intelligence, real-time systems, IoT, and cloud computing.
Over time, I’ve been exploring how these technologies work together to build useful, connected applications. I enjoy working on full-stack web projects, building APIs, and experimenting with AI to enhance user experiences. I’m also interested in real-time communication systems and how cloud platforms can help scale modern applications.
I'm continuously learning by building projects, exploring new tools, and understanding how to design systems that are practical, efficient, and user-focused.`;

export const PROJECTS = [
    {
      title: "E-Commerce Platform",
      image: ECommerce,
      description:
        "A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Zustand"],
      github: "https://github.com/yourusername/ecommerce-app",
      link: "https://ecommerce-demo.example.com"
    },
    {
      title: "Real-Time Chat App",
      image: ChatApp,
      description:
        "A real-time chat application built with the MERN stack and Socket.io for instant messaging. Features include user authentication, chat rooms, and global state management with Zustand.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Zustand"],
      github: "https://github.com/yourusername/realtime-chat-app",
      link: "https://chat-demo.example.com"
    },
    {
      title: "Developer Hub",
      image: DevHub,
      description:
        "A community-driven platform for developers to form groups, collaborate on projects, manage tasks, and communicate in real-time. Includes private chats, role-based access, and AI-assisted task planning.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zustand"],
      github: "https://github.com/yourusername/devhub",
      link: "https://devhub-demo.example.com"
    },
    {
      title: "University LMS",
      description:
        "A Learning Management System designed for university-level education. Supports course creation, assignment management, student tracking, and role-based dashboards for students, instructors, and admins.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/yourusername/university-lms",
      link: "https://lms-demo.example.com"
    }
];


export const CONTACT = {
  address: "Chennai, Tamil Nadu, India",
  email: "akash@example.com",
  phoneNo: "+91 98765 43210",
  github: "https://github.com/akashmdev"
};
