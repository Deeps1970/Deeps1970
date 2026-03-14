import copilot from "@/assets/projects/copilot.png";
import inkverse from "@/assets/projects/inkverse.png";
import internlink from "@/assets/projects/internlink.png";
import trackpal from "@/assets/projects/trackpal.png";
import dashsphere from "@/assets/projects/dashsphere.png";
import productsorting from "@/assets/projects/productsorting.png";
import todolist from "@/assets/projects/todolist.png";
import quizapp from "@/assets/projects/quizapp.png";
import weatherapp from "@/assets/projects/weatherapp.png";
import tictactoe from "@/assets/projects/tictactoe.png";
import netflixClone from "@/assets/projects/netflix-clone.png";
import minixplay from "@/assets/projects/minixplay.png";
import loginTailwind from "@/assets/projects/login-tailwind.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "fullstack" | "aiml";
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  // Frontend
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description: "A responsive Netflix landing page clone built with HTML and CSS, replicating the streaming platform's UI with pixel-perfect accuracy.",
    image: netflixClone,
    category: "frontend",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Deeps1970/Netflix-Clone",
    live: "https://deeps1970.github.io/Netflix-Clone/",
  },
  {
    id: "login-tailwind",
    title: "Login Page",
    description: "A modern, responsive login page built with Tailwind CSS featuring clean form design and smooth transitions.",
    image: loginTailwind,
    category: "frontend",
    tech: ["HTML", "Tailwind CSS"],
    github: "https://github.com/Deeps1970/Login-Creds",
    live: "https://deeps1970.github.io/Login-Creds/",
  },
  {
    id: "minixplay",
    title: "MiniXPlay",
    description: "A mini media player application with a clean interface for playing audio and video content.",
    image: minixplay,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/MiniXPlayer",
    live: "https://deeps1970.github.io/MiniXPlayer/",
  },
  {
    id: "todo-list",
    title: "Todo List",
    description: "A task management application with add, delete, and complete functionality. Clean UI with persistent state.",
    image: todolist,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/Todo-List",
    live: "https://deeps1970.github.io/Todo-List/",
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    description: "An interactive quiz application with multiple-choice questions, score tracking, and results display.",
    image: quizapp,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/Quiz-App",
    live: "https://deeps1970.github.io/Quiz-App/",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application that fetches real-time data from a weather API and displays forecasts with a clean interface.",
    image: weatherapp,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Deeps1970/ApexPlanet-Task3-Internship",
    live: "https://deeps1970.github.io/ApexPlanet-Task3-Internship/",
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game with a clean UI, win detection, and game reset functionality.",
    image: tictactoe,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/ApexPlanet-Task2-Internship",
    live: "https://deeps1970.github.io/ApexPlanet-Task2-Internship/",
  },
  {
    id: "product-sorting",
    title: "Product Sorting",
    description: "A product listing page with sorting and filtering capabilities for an e-commerce-like experience.",
    image: productsorting,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/Product-Sorting",
    live: "https://deeps1970.github.io/Product-Sorting/",
  },
  // Full Stack
  {
    id: "inkverse",
    title: "InkVerse",
    description: "A full-stack blogging platform with rich text editing, user authentication, and dynamic content management.",
    image: inkverse,
    category: "fullstack",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Deeps1970/InkVerse",
    live: "https://inkverse-five.vercel.app/",
  },
  {
    id: "internlink",
    title: "InternLink",
    description: "A placement cell management system connecting students with internship opportunities. Features role-based access and application tracking.",
    image: internlink,
    category: "fullstack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Deeps1970/InternLink",
    live: "https://internlink-placementcell.vercel.app/",
  },
  {
    id: "trackpal",
    title: "TrackPal",
    description: "A real-time bus tracking application providing live location updates, route management, and estimated arrival times.",
    image: trackpal,
    category: "fullstack",
    tech: ["React", "Node.js", "Express", "Maps API"],
    github: "https://github.com/Deeps1970/TrackPal",
    live: "https://trackpal-bus.vercel.app/",
  },
  {
    id: "dashsphere",
    title: "DashSphere",
    description: "An admin dashboard with data visualization, analytics, and user management features built for scalability.",
    image: dashsphere,
    category: "fullstack",
    tech: ["PHP", "MySQL", "Chart.js"],
    github: "https://github.com/Deeps1970/DashSphere",
    live: "https://dashsphere.infinityfreeapp.com/",
  },
  // AI / ML
  {
    id: "copilot",
    title: "AI Life Copilot",
    description: "An AI-powered life assistant that uses machine learning to provide personalized recommendations and task automation.",
    image: copilot,
    category: "aiml",
    tech: ["Python", "React", "OpenAI API", "LangChain"],
    github: "https://github.com/Deeps1970/AI-Life-Copilot",
    live: "https://ai-life-copilot-hf.vercel.app/",
  },
];

export const categories = [
  { key: "frontend" as const, label: "Frontend (UI/UX)" },
  { key: "fullstack" as const, label: "Full Stack" },
  { key: "aiml" as const, label: "AI / ML" },
];
