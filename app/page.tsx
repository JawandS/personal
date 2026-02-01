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
  { image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop", text: "About", id: "about" },
  { image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop", text: "Projects", id: "projects" },
  { image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=600&fit=crop", text: "Experience", id: "experience" },
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop", text: "Research", id: "research" },
  { image: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?w=800&h=600&fit=crop", text: "Contact", id: "contact" },
];

// Experience data from resume
const experiences = [
  {
    title: "Software Engineer Contractor",
    company: "Lieberthal & Associates, LLC",
    period: "September 2025 – Present",
    location: "Remote",
    items: [
      "Provided software support on CAS and SOA funded research",
      "Created a validation tool for LLM performance on claims analysis",
      "Analyzing biased ML models using synthetic healthcare data",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "MITRE",
    period: "May 2024 – September 2025",
    location: "McLean, VA",
    items: [
      "Refactored C/C++ and Python programs for memory management and signal processing",
      "Developed app for ICD PDF to JSON conversion leveraging LLMs, SQLite, Python, and Flask",
      "Performed attack surface analysis using Rust and Svelte",
      "Implemented a cost model in Python with a UI and Excel integration",
    ],
  },
  {
    title: "Programming Instructor",
    company: "CodAKid",
    period: "September 2023 – May 2024",
    location: "Remote",
    items: [
      "Taught fundamentals of programming in Java, Python, and Kotlin to students of varying experience levels",
    ],
  },
  {
    title: "Information Security Engineering Intern",
    company: "Appian",
    period: "June 2023 – August 2023",
    location: "McLean, VA",
    items: [
      "Enhanced threat analysis by consolidating intelligence from 10 HTML/RSS feeds on an Appian app",
      "Supported security engineering by helping deploy Bash script updates to production",
    ],
  },
];

// Projects data from resume
const projects = [
  {
    name: "MajorMatch.me",
    year: "2025–Present",
    description: "Production application using Cloudflare, Railway, Next.js, FastAPI, Redis, Postgres. Connects students to majors.",
    link: null,
  },
  {
    name: "OmniChat",
    year: "2025",
    description: "Abstracts multiple LLM APIs in a Flask + Tailwind app.",
    link: "https://github.com/JawandS/omni_chat",
  },
  {
    name: "MysticScribe",
    year: "2025",
    description: "Multi-agent CrewAI-based chapter generation system.",
    link: "https://github.com/JawandS/MysticScribe",
  },
  {
    name: "NameMateAI",
    year: "2023",
    description: "Acquired 10K+ users through SEO and targeted Google Ads.",
    link: "https://github.com/JawandS/NameMate",
  },
];

// Research data from resume
const research = [
  {
    title: "Economics Research",
    institution: "William & Mary",
    period: "2024–2026",
    description: "Developed Python packages for experimental economics and macroeconomic modeling.",
    packages: [
      { name: "econ-llm", url: "https://pypi.org/project/econ-llm/" },
      { name: "macroecon-tools", url: "https://pypi.org/project/macroecon-tools/" },
    ],
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
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-100"
              >
                View on GitHub →
              </a>
            )}
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
      <div className="w-full max-w-3xl space-y-8">
        {research.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <span className="text-sm text-purple-300">{item.period}</span>
            </div>
            <p className="mb-4 text-purple-200">{item.institution}</p>
            <p className="mb-4 text-purple-100">{item.description}</p>
            <div className="flex flex-wrap gap-3">
              {item.packages.map((pkg, j) => (
                <a
                  key={j}
                  href={pkg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-purple-400/50 bg-purple-800/30 px-3 py-1.5 text-sm text-purple-200 transition-all hover:border-purple-300 hover:bg-purple-700/40"
                >
                  📦 {pkg.name}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
          <p className="text-lg text-purple-100">B.S. Computer Science & Economics</p>
          <p className="text-purple-200">William & Mary • Aug 2023 – May 2026</p>
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
  const skills = [
    { category: "Languages", items: ["Python", "C/C++", "Bash", "JavaScript", "TypeScript", "Rust", "SQL", "Java"] },
    { category: "Frameworks", items: ["Next.js", "React", "Flask", "FastAPI", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "Linux", "Docker", "OpenAI API", "Claude Code", "LaTeX"] },
  ];

  return (
    <div className="relative z-30 flex min-h-full w-full flex-col items-center px-4 py-20 sm:px-8">
      <BackButton onBack={onBack} />
      <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl">About Me</h1>

      <div className="w-full max-w-3xl space-y-8">
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-purple-100">
            I&apos;m a software engineer with a passion for building end-to-end solutions,
            particularly leveraging LLMs and modern web technologies. Currently pursuing
            a B.S. in Computer Science & Economics at William & Mary with a 3.98 GPA.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-purple-100">
            I thrive on rapidly developing full-stack applications and have experience
            across the spectrum—from low-level C/C++ memory management to modern React
            frontends and AI-powered backends.
          </p>
        </div>

        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <p className="mb-2 text-sm font-medium text-purple-300">{skill.category}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
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
          <h3 className="mb-4 text-xl font-bold text-white">Quick Facts</h3>
          <ul className="space-y-2 text-purple-100">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Based in Williamsburg, VA
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Secret Clearance holder
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> Bennett Fellow & Terry Glenn Scholar
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
