import inkverse from "@/assets/projects/inkverse.png";
import trackpal from "@/assets/projects/trackpal.png";
import dashsphere from "@/assets/projects/dashsphere.png";
import todolist from "@/assets/projects/todolist.png";
import quizapp from "@/assets/projects/quizapp.png";
import weatherapp from "@/assets/projects/weatherapp.png";
import tictactoe from "@/assets/projects/tictactoe.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "fullstack";
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  // Full Stack
  {
    id: "inkverse",
    title: "InkVerse",
    description: "A club website with rich content management, user engagement features, and dynamic content.",
    image: inkverse,
    category: "fullstack",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Deeps1970/InkVerse",
    live: "https://inkverse-five.vercel.app/",
  },
  {
    id: "trackpal",
    title: "TrackPal",
    description: "A bus tracker prototype built for Smart India Hackathon, providing real-time location updates and route management.",
    image: trackpal,
    category: "fullstack",
    tech: ["React", "Node.js", "Express", "Maps API"],
    github: "https://github.com/Deeps1970/TrackPal",
    live: "https://trackpal-bus.vercel.app/",
  },
  {
    id: "dashsphere",
    title: "DashSphere",
    description: "A project dashboard with data visualization, analytics, and management features built for scalability.",
    image: dashsphere,
    category: "fullstack",
    tech: ["PHP", "MySQL", "Chart.js"],
    github: "https://github.com/Deeps1970/DashSphere",
    live: "https://dashsphere.infinityfreeapp.com/",
  },
  // Frontend
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
    description: "A weather application fetching real-time data from the OpenWeatherMap API with a clean forecast display.",
    image: weatherapp,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    github: "https://github.com/Deeps1970/ApexPlanet-Task3-Internship",
    live: "https://deeps1970.github.io/ApexPlanet-Task3-Internship/",
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game with win detection, clean UI, and game reset functionality.",
    image: tictactoe,
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deeps1970/ApexPlanet-Task2-Internship",
    live: "https://deeps1970.github.io/ApexPlanet-Task2-Internship/",
  },
];

export const categories = [
  { key: "fullstack" as const, label: "Full Stack" },
  { key: "frontend" as const, label: "Frontend" },
];
