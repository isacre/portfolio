import image from "@/assets/projects/iManage.png";
import copy from "@/assets/projects/copy.png";
import fixMyCar from "@/assets/projects/fixMyCar.png";

export const ProjectsData = [
  {
    name: "Fix My Car AI",
    description:
      "RAG based AI assitant for car repair and maintenance",
    longDescription:
      "Fix My Car AI is a RAG based AI assistant for car repair and maintenance. It uses the knowledge base on a vector database and the LLM to answer questions about car repair and maintenance.",
    href: "https://github.com/isacre/fix-my-car-ai",
    github: "https://github.com/isacre/fix-my-car-ai",
    liveDemo: null,
    image: fixMyCar,
    video: "https://youtu.be/GIsSCbKAi7U",
    technologies: [
      "Langchain",
      "Langgraph",
      "ChromaDB",
      "OpenAI",
      "Docker"
    ],
    features: [
      "RAG based AI assistant for car repair and maintenance",
      "Knowledge base on a vector database",
      "LLM to answer questions about car repair and maintenance",
    ],
  },
  {
    name: "iManage",
    description:
      "White label solution for booking management by small businesses",
    longDescription:
      "iManage is a comprehensive white-label booking management solution designed specifically for small businesses. The platform provides an intuitive interface for managing appointments, customer data, and business operations. Built with modern web technologies, it offers seamless integration with Google Calendar and secure payment processing through Stripe.",
    href: "https://github.com/isacre/i-manage",
    github: "https://github.com/isacre/i-manage",
    liveDemo: null,
    image: image,
    video: "https://youtu.be/Ys5FP0LKm3E",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Python",
      "PostgreSQL",
      "Google Calendar API",
      "Stripe",
    ],
    features: [
      "Real-time appointment scheduling and management",
      "Google Calendar integration for seamless scheduling and reminders",
      "Secure payment processing with Stripe",
      "White-label customization for different businesses",
      "Responsive design for mobile and desktop",
      "Automatic booking expiration and completion with cron job scripts",
    ],
  },
  {
    name: "Quick Copy Extension",
    description:
      "Chrome extension that allows you to copy text to the clipboard easily.",
    longDescription:
      "Chrome extension that allows you to copy text to the clipboard easily. Developed to make my life easier when applying for jobs.",
    href: "https://github.com/isacre/quick-copy-extension",
    github: "https://github.com/isacre/quick-copy-extension",
    video: "https://youtu.be/I161l23dY8I",
    liveDemo: null,
    image: copy,
    technologies: ["TypeScript", "Chrome Extension API", "React"],
    features: [
      "Save title/link to future use",
      "Delete links",
      "Copy text to the clipboard",
    ],
  },
];
