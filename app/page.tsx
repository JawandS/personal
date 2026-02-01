"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { navItems } from "@/lib/data";
import { useTransition } from "@/components/TransitionProvider";

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

export default function Home() {
  const { navigateWithTransition } = useTransition();
  const [triggerGlare, setTriggerGlare] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setTriggerGlare(true);
      setTimeout(() => {
        setAnimationComplete(true);
        setTimeout(() => setShowGallery(true), 400);
      }, 800);
    }, 600);
  };

  const handleItemClick = (item: typeof navItems[0]) => {
    navigateWithTransition(`/${item.id}`);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Section */}
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
          glareColor="#60A5FA"
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
          glareColor="#60A5FA"
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
            style={{ color: "var(--blue-sky)" }}
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

      {/* Navigation Gallery */}
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
    </div>
  );
}
