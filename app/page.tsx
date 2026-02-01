"use client";

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

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full"
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
      <main className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center px-8 pb-24">
        <GlareHover
          width="auto"
          height="auto"
          background="transparent"
          borderRadius="8px"
          borderColor="transparent"
          glareColor="#A855F7"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          className="pointer-events-auto"
          style={{ padding: "1rem 2rem" }}
        >
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            <DecryptedText
              text="Jawand Singh"
              animateOn="view"
              speed={100}
              maxIterations={35}
              sequential
              revealDirection="start"
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
          glareOpacity={0.2}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
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
              speed={110}
              maxIterations={30}
              sequential
              revealDirection="start"
            />
          </p>
        </GlareHover>
      </main>
    </div>
  );
}
