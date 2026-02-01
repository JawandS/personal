"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Colors from CSS variables (Three.js needs hex values directly)
const colors = {
  purpleDeep: "#1E1033",
  purpleSoft: "#A855F7",
};

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
});

const DecryptedText = dynamic(() => import("@/components/DecryptedText"), {
  ssr: false,
});

const GlareHover = dynamic(() => import("@/components/GlareHover"), {
  ssr: false,
});

const CircularGallery = dynamic(
  () => import("@/components/CircularGallery"),
  { ssr: false }
);

const PageTransition = dynamic(
  () => import("@/components/PageTransition"),
  { ssr: false }
);

const navItems = [
  { image: "/nature.jpg", text: "About", id: "about" },
  { image: "/majormatch.png", text: "Projects", id: "projects" },
  { image: "/laptop.png", text: "Experience", id: "experience" },
  { image: "/server.png", text: "Research", id: "research" },
  { image: "/letters.png", text: "Contact", id: "contact" },
];

// Experience data from resume
const experiences = [
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
const projects = [
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
const research = [
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
const contact = {
  email: "JawandSingh@gmail.com",
  location: "Williamsburg, VA",
  linkedin: "https://linkedin.com/in/Jawand",
  github: "https://github.com/JawandS",
};

// Section content components
function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      className="fixed left-6 top-6 z-50 rounded-lg border-2 border-purple-500/50 bg-purple-900/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-purple-400 hover:bg-purple-500/20"
    >
      ← Back
    </button>
  );
}

function ExperienceSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-12 text-4xl font-bold text-white sm:text-5xl">Experience</h1>
      <div className="w-full max-w-3xl space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <span className="text-sm text-purple-300">{exp.period}</span>
            </div>
            <p className="mb-4 text-purple-200">
              {exp.company} • {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-purple-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-12 text-4xl font-bold text-white sm:text-5xl">Projects</h1>
      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <span className="text-sm text-purple-300">{project.year}</span>
            </div>
            <p className="mb-4 text-purple-100">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-100"
                >
                  Live Site →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-100"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-12 text-4xl font-bold text-white sm:text-5xl">Research</h1>
      <div className="w-full max-w-3xl space-y-6">
        {research.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <span className="text-sm text-purple-300">{item.period}</span>
            </div>
            <p className="text-purple-200">{item.institution}</p>
            <p className="mb-3 text-sm text-purple-300">Advisor: {item.advisor}</p>
            <p className="text-purple-100">{item.description}</p>
            {item.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-purple-400/50 bg-purple-800/30 px-3 py-1.5 text-sm text-purple-200 transition-all hover:border-purple-300 hover:bg-purple-700/40"
                  >
                    {link.type === "package" ? "PyPI" : "GitHub"}: {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
          <p className="text-lg text-purple-100">B.S. Computer Science & Economics</p>
          <p className="text-purple-200">William & Mary | Aug 2023 – May 2026</p>
          <p className="mt-2 text-purple-300">GPA: 3.98/4.00</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Bennett Fellow</span>
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Terry Glenn Scholar</span>
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Cisco Student Success Award</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center justify-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-12 text-4xl font-bold text-white sm:text-5xl">Contact</h1>
      <div className="w-full max-w-md space-y-4">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 rounded-xl border border-purple-500/30 bg-purple-900/20 p-4 backdrop-blur-sm transition-all hover:border-purple-400/50 hover:bg-purple-800/30"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="text-sm text-purple-300">Email</p>
            <p className="text-white">{contact.email}</p>
          </div>
        </a>
        <div className="flex items-center gap-4 rounded-xl border border-purple-500/30 bg-purple-900/20 p-4 backdrop-blur-sm">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-sm text-purple-300">Location</p>
            <p className="text-white">{contact.location}</p>
          </div>
        </div>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-purple-500/30 bg-purple-900/20 p-4 backdrop-blur-sm transition-all hover:border-purple-400/50 hover:bg-purple-800/30"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-sm text-purple-300">LinkedIn</p>
            <p className="text-white">linkedin.com/in/Jawand</p>
          </div>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-purple-500/30 bg-purple-900/20 p-4 backdrop-blur-sm transition-all hover:border-purple-400/50 hover:bg-purple-800/30"
        >
          <span className="text-2xl">🐙</span>
          <div>
            <p className="text-sm text-purple-300">GitHub</p>
            <p className="text-white">github.com/JawandS</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function AboutSection({ onBack }: { onBack: () => void }) {
  const languages = [
    { level: "Proficient", items: ["Python", "C/C++", "Bash", "RegEx"] },
    { level: "Familiar", items: ["Rust", "Java", "JavaScript", "HTML/CSS", "SQL"] },
    { level: "Novice", items: ["R", "MATLAB", "Kotlin", "Svelte"] },
  ];

  const tools = ["Linux", "Windows", "Git", "OpenAI API", "Claude Code", "Copilot", "eBPF", "LaTeX", "GIS", "VSCode", "PyCharm"];

  const certificates = [
    { name: "C++ Data Structures", year: "2024" },
    { name: "Cyber Foundations", year: "2023" },
    { name: "IBM AI Engineering", year: "2021" },
  ];

  const courses = {
    cs: ["Edge Computing", "Software Dev", "Algorithms", "Data Structures", "Computer Organization", "AI"],
    econ: ["Econometrics", "Game Theory", "Intermediate Macro/Micro"],
    math: ["Linear Algebra", "Statistics", "Calculus", "Operations Research"],
  };

  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl">About Me</h1>

      <div className="w-full max-w-3xl space-y-6">
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-purple-100">
            Software engineer with a background in economics and DoD secret clearance.
            Experienced in rapidly developing end-to-end software solutions leveraging
            LLMs and creating LLM-powered applications.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-purple-100">
            Currently pursuing a B.S. in Computer Science & Economics at William & Mary
            with a 3.98 GPA. I work across the full stack—from low-level C/C++ memory
            management and signal processing to modern web frontends and AI-powered backends.
          </p>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Languages</h3>
          <div className="space-y-4">
            {languages.map((group, i) => (
              <div key={i}>
                <p className="mb-2 text-sm font-medium text-purple-300">{group.level}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span
                      key={j}
                      className="rounded-lg border border-purple-400/30 bg-purple-800/30 px-3 py-1 text-sm text-purple-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="rounded-lg border border-purple-400/30 bg-purple-800/30 px-3 py-1 text-sm text-purple-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Certificates</h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, i) => (
              <span
                key={i}
                className="rounded-lg border border-purple-400/50 bg-purple-800/30 px-3 py-1.5 text-sm text-purple-100"
              >
                {cert.name} ({cert.year})
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Relevant Coursework</h3>
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Computer Science</p>
              <div className="flex flex-wrap gap-2">
                {courses.cs.map((course, i) => (
                  <span key={i} className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">{course}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Economics</p>
              <div className="flex flex-wrap gap-2">
                {courses.econ.map((course, i) => (
                  <span key={i} className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">{course}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Mathematics</p>
              <div className="flex flex-wrap gap-2">
                {courses.math.map((course, i) => (
                  <span key={i} className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Quick Facts</h3>
          <ul className="space-y-2 text-purple-100">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Based in Williamsburg, VA
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> DoD Secret Clearance holder
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Bennett Fellow & Terry Glenn Scholar (W&M Econ)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Cisco Student Success Award (W&M CS)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Applause & Spark Awards (MITRE)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Graduating May 2026
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SectionContent({ section, onBack }: { section: string; onBack: () => void }) {
  switch (section) {
    case "about":
      return <AboutSection onBack={onBack} />;
    case "experience":
      return <ExperienceSection onBack={onBack} />;
    case "projects":
      return <ProjectsSection onBack={onBack} />;
    case "research":
      return <ResearchSection onBack={onBack} />;
    case "contact":
      return <ContactSection onBack={onBack} />;
    default:
      return (
        <div className="relative z-30 flex h-full w-full flex-col items-center justify-center px-8">
          <BackButton onBack={onBack} />
          <h1 className="mb-8 text-5xl font-bold text-white capitalize">{section}</h1>
        </div>
      );
  }
}

export default function Home() {
  const [triggerGlare, setTriggerGlare] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleAnimationComplete = () => {
    // Pause after decrypt completes - let it breathe
    setTimeout(() => {
      // Trigger glare flash on text
      setTriggerGlare(true);
      // Wait for glare to complete, then pause before slide up
      setTimeout(() => {
        setAnimationComplete(true);
        // Gallery slides in after hero starts moving
        setTimeout(() => setShowGallery(true), 400);
      }, 800);
    }, 600);
  };

  const handleItemClick = useCallback((item: typeof navItems[0], index: number) => {
    setActiveSection(item.id);
    // Update URL without navigation (shallow routing)
    window.history.pushState({}, '', `/${item.id}`);
  }, []);

  const handleBack = useCallback(() => {
    setActiveSection(null);
    window.history.pushState({}, '', '/');
  }, []);

  return (
    <PageTransition
      activeSection={activeSection}
      gridSize={12}
      pixelColor={colors.purpleDeep}
      animationDuration={0.5}
    >
      {(currentSection: string | null) => (
        <div
          className="relative h-screen w-full overflow-hidden"
          style={{ backgroundColor: "var(--purple-deep)" }}
        >
          <div className="fixed inset-0">
            <Antigravity
              count={570}
              magnetRadius={8}
              ringRadius={18}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={2}
              lerpSpeed={0.1}
              color={colors.purpleSoft}
              autoAnimate={false}
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="sphere"
              fieldStrength={10}
            />
          </div>

          {currentSection ? (
            <SectionContent section={currentSection} onBack={handleBack} />
          ) : (
            <>
              {/* Hero Section - fades to top when animation completes */}
              <section
                className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center px-8 transition-all duration-[1200ms] ease-out ${
                  animationComplete
                    ? "justify-start pt-12 opacity-60 scale-75"
                    : "justify-center pb-24"
                }`}
              >
                <GlareHover
                  width="auto"
                  height="auto"
                  background="transparent"
                  borderRadius="8px"
                  borderColor="transparent"
                  glareColor="#A855F7"
                  glareOpacity={0.5}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={600}
                  active={triggerGlare}
                  className="pointer-events-auto"
                  style={{ padding: "1rem 2rem" }}
                >
                  <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                    <DecryptedText
                      text="Jawand Singh"
                      animateOn="view"
                      speed={50}
                      maxIterations={20}
                      sequential
                      revealDirection="start"
                      onComplete={handleAnimationComplete}
                    />
                  </h1>
                </GlareHover>
                <GlareHover
                  width="auto"
                  height="auto"
                  background="transparent"
                  borderRadius="8px"
                  borderColor="transparent"
                  glareColor="#A855F7"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={600}
                  active={triggerGlare}
                  className="pointer-events-auto mt-4"
                  style={{ padding: "0.5rem 1.5rem" }}
                >
                  <p
                    className="text-2xl tracking-wide md:text-3xl lg:text-4xl"
                    style={{ color: "var(--purple-lavender)" }}
                  >
                    <DecryptedText
                      text="Software Engineer"
                      animateOn="view"
                      speed={55}
                      maxIterations={18}
                      sequential
                      revealDirection="start"
                    />
                  </p>
                </GlareHover>
              </section>

              {/* Navigation Gallery - slides up from bottom */}
              <section
                className={`absolute inset-x-0 bottom-0 z-20 h-[70vh] transition-all duration-[1200ms] ease-out ${
                  showGallery
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <CircularGallery
                  items={navItems}
                  bend={1}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollSpeed={2}
                  scrollEase={0.05}
                  onItemClick={handleItemClick}
                />
              </section>
            </>
          )}
        </div>
      )}
    </PageTransition>
  );
}
