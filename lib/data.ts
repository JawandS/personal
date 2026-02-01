// Experience data from resume
export const experiences = [
  {
    title: "Founder & CEO",
    company: "MajorMatch",
    period: "October 2025 – Present",
    location: "Remote",
    items: [
      "Leading a small team to develop B2B and B2C marketing content",
      "Created a full-stack production web app with 200+ usages",
      "Working on GTM strategy, including cold emails and sales calls",
    ],
  },
  {
    title: "Software Engineer Contractor",
    company: "Lieberthal & Associates, LLC",
    period: "September 2025 – Present",
    location: "Remote",
    items: [
      "CAS Contract: Processing unstructured synthetic claims data using LLMs (OpenAI API, Ollama)",
      "Created a GUI for synthetic data generation and a validation/analytics site",
      "SOA Contract: Creating a model card generation tool for ML bias investigation",
      "Investigating synthetic data generation with Synthea",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "MITRE",
    period: "May 2024 – September 2025",
    location: "McLean, VA",
    items: [
      "Created two full-stack web applications; delivered one to Sponsor with integrated LLM parsing",
      "Refactored signal processing algorithms and multithreaded C programs with systemd processes",
      "Developed data transformation system in Rust with Svelte Kit visualization",
      "Implemented a cost model in Python with HTML/CSS UI and automated input parsing",
      "Won a machine learning hackathon; balanced three concurrent projects",
    ],
  },
  {
    title: "Programming Instructor",
    company: "CodAKid",
    period: "September 2023 – May 2024",
    location: "Remote",
    items: [
      "Taught fundamentals of programming in Java, Python, and Scratch to students of varying experience levels",
    ],
  },
  {
    title: "Information Security Engineering Intern",
    company: "Appian",
    period: "June 2023 – August 2023",
    location: "McLean, VA",
    items: [
      "Improved threat analysis by consolidating intelligence from HTML/RSS feeds on an Appian web app",
      "Provided engineering support on Bash scripts and pushed changes to production",
    ],
  },
];

// Projects data from resume
export const projects = [
  {
    name: "MajorMatch.me",
    year: "2025–Present",
    description: "Full-stack production app connecting students to majors. Built with Next.js on Cloudflare Pages, FastAPI, Postgres, and Redis on Railway. 200+ usages.",
    github: null,
    live: "https://MajorMatch.me",
  },
  {
    name: "OmniChat",
    year: "2025",
    description: "UI to unify multiple LLM APIs using Flask + Tailwind dev stack.",
    github: "https://github.com/JawandS/omni_chat",
    live: null,
  },
  {
    name: "MysticScribe",
    year: "2025",
    description: "Agentic framework using CrewAI to generate fiction chapters with human-in-the-loop feedback.",
    github: "https://github.com/JawandS/MysticScribe",
    live: null,
  },
  {
    name: "NameMateAI",
    year: "2022–2023",
    description: "Name generation web app leveraging OpenAI API (GPT-3.5) built on Wix Velo. Captured 10K+ users through SEO and Google Ads.",
    github: "https://github.com/JawandS/NameMate",
    live: null,
  },
  {
    name: "Birthday Card Generator",
    year: "2024",
    description: "HTML/CSS + Flask web app for birthday card generation powered by DALL-E 3 for image generation.",
    github: "https://github.com/JawandS/birthday-card",
    live: null,
  },
  {
    name: "Open Course List Reader",
    year: "2023",
    description: "Automated detection and notification system for the W&M course list. (Deprecated)",
    github: "https://github.com/JawandS/WM_OCL_Reader",
    live: null,
  },
];

// Research data from resume
export const research = [
  {
    title: "Honor's Thesis",
    institution: "William & Mary, Computer Science",
    advisor: "Prof. Sidi Lu",
    period: "June 2025 – Present",
    description: "Investigating inflation forecasting using an ABM model. Using LLMs for software development and applications.",
    links: [
      { name: "macroeconvue", url: "https://github.com/JawandS/macroeconvue", type: "github" },
    ],
  },
  {
    title: "Student Researcher",
    institution: "William & Mary, Economics",
    advisor: "Prof. Robert Hicks & Prof. Lisa Anderson",
    period: "January 2025 – January 2026",
    description: "Leveraging prompt engineering to research LLMs as agents in experimental economics and game theory. Created a web agent and platform to automate experiment execution and data collection.",
    links: [
      { name: "econ-llm", url: "https://pypi.org/project/econ-llm/", type: "package" },
    ],
  },
  {
    title: "Research Assistant",
    institution: "William & Mary, Economics",
    advisor: "Prof. Nathaniel Throckmorton",
    period: "June 2024 – May 2025",
    description: "Developing an open-source Python package that extends Pandas DataFrame and Series. Using generative AI to translate computational macroeconomics models from MATLAB to Python.",
    links: [
      { name: "macroecon-tools", url: "https://pypi.org/project/macroecon-tools/", type: "package" },
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    institution: "William & Mary, Secure Platforms Lab",
    advisor: "Prof. Adwait Nadkarni",
    period: "August 2023 – May 2024",
    description: "Used web scraping and natural language processing to analyze the security/privacy of campaign sites. Drafted a journal extension and maintained a research repository.",
    links: [],
  },
  {
    title: "Research Intern",
    institution: "George Mason University, Computer Science",
    advisor: "Prof. Songqing Chen",
    period: "May 2022 – June 2023",
    description: "Measured, analyzed, and visualized eBPF tracing overhead on Ubuntu servers using bpftrace and Python. Visualized TensorFlow behavior using context switch tracing during program execution.",
    links: [],
  },
];

// Contact info
export const contact = {
  email: "JawandSingh@gmail.com",
  location: "Williamsburg, VA",
  linkedin: "https://linkedin.com/in/Jawand",
  github: "https://github.com/JawandS",
};

// About page data
export const aboutData = {
  languages: [
    { level: "Proficient", items: ["Python", "C/C++", "Bash", "RegEx"] },
    { level: "Familiar", items: ["Rust", "Java", "JavaScript", "HTML/CSS", "SQL"] },
    { level: "Novice", items: ["R", "MATLAB", "Kotlin", "Svelte"] },
  ],
  tools: ["Linux", "Windows", "Git", "OpenAI API", "Claude Code", "Copilot", "eBPF", "LaTeX", "GIS", "VSCode", "PyCharm"],
  certificates: [
    { name: "C++ Data Structures", year: "2024" },
    { name: "Cyber Foundations", year: "2023" },
    { name: "IBM AI Engineering", year: "2021" },
  ],
  courses: {
    cs: ["Edge Computing", "Software Dev", "Algorithms", "Data Structures", "Computer Organization", "AI"],
    econ: ["Econometrics", "Game Theory", "Intermediate Macro/Micro"],
    math: ["Linear Algebra", "Statistics", "Calculus", "Operations Research"],
  },
  quickFacts: [
    "Based in Williamsburg, VA",
    "DoD Secret Clearance holder",
    "Bennett Fellow & Terry Glenn Scholar (W&M Econ)",
    "Cisco Student Success Award (W&M CS)",
    "Applause & Spark Awards (MITRE)",
    "Graduating May 2026",
  ],
};

// Colors for Three.js (needs hex values directly)
export const colors = {
  purpleDeep: "#1E1033",
  purpleSoft: "#A855F7",
};

// Navigation items
export const navItems = [
  { image: "/nature.jpg", text: "About", id: "about" },
  { image: "/majormatch.png", text: "Projects", id: "projects" },
  { image: "/laptop.png", text: "Experience", id: "experience" },
  { image: "/server.png", text: "Research", id: "research" },
  { image: "/letters.png", text: "Contact", id: "contact" },
];
