"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

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
  { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop", text: "Projects", id: "projects" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", text: "Work", id: "work" },
  { image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop", text: "Research", id: "research" },
  { image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop", text: "Contact", id: "contact" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", text: "About", id: "about" },
];

// Section content components
function SectionContent({ section, onBack }: { section: string; onBack: () => void }) {
  return (
    <div className="relative z-30 flex h-full w-full flex-col items-center justify-center px-8">
      <h1 className="mb-8 text-5xl font-bold text-white capitalize">{section}</h1>
      <p className="mb-8 max-w-2xl text-center text-xl text-purple-200">
        This is the {section} section. Add your content here.
      </p>
      <button
        onClick={onBack}
        className="rounded-lg border-2 border-purple-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-purple-500/20"
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
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
