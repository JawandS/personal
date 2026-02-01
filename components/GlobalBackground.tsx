"use client";

import dynamic from "next/dynamic";
import { colors } from "@/lib/data";

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Antigravity
        count={570}
        magnetRadius={8}
        ringRadius={18}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={2}
        lerpSpeed={0.1}
        color={colors.blueBright}
        autoAnimate={false}
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="sphere"
        fieldStrength={10}
      />
    </div>
  );
}
