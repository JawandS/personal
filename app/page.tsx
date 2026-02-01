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
      <main className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-bold text-white">Jawand Singh</h1>
        <p className="mt-4 text-lg" style={{ color: "var(--purple-lavender)" }}>
          Software Engineer
        </p>
      </main>
    </div>
  );
}
