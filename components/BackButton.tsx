"use client";

import { useTransition } from "./TransitionProvider";

export default function BackButton() {
  const { navigateWithTransition } = useTransition();

  return (
    <button
      onClick={() => navigateWithTransition("/")}
      className="fixed left-6 top-6 z-50 rounded-lg border-2 border-blue-500/50 bg-slate-800/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-500/20"
    >
      ← Back
    </button>
  );
}
