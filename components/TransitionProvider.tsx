"use client";

import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import "./PageTransition.css";

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
}

interface TransitionProviderProps {
  children: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationDuration?: number;
}

export default function TransitionProvider({
  children,
  gridSize = 12,
  pixelColor = "#1E1033",
  animationDuration = 0.5,
}: TransitionProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingNavRef = useRef<string | null>(null);

  // Build pixel grid on mount
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    while (pixelGridEl.firstChild) {
      pixelGridEl.removeChild(pixelGridEl.firstChild);
    }

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("page-transition__pixel");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  // Handle route change complete - uncover
  useEffect(() => {
    if (!pendingNavRef.current) return;
    if (pathname !== pendingNavRef.current) return;

    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    const pixels = pixelGridEl.querySelectorAll(".page-transition__pixel");
    if (!pixels.length) return;

    const totalPixels = pixels.length;
    const staggerDuration = animationDuration / totalPixels;

    // Uncover animation
    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: 0.15,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
      onComplete: () => {
        setIsTransitioning(false);
        pendingNavRef.current = null;
      },
    });
  }, [pathname, animationDuration]);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (isTransitioning) return;
      if (href === pathname) return;

      const pixelGridEl = pixelGridRef.current;
      if (!pixelGridEl) {
        router.push(href);
        return;
      }

      const pixels = pixelGridEl.querySelectorAll(".page-transition__pixel");
      if (!pixels.length) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);
      pendingNavRef.current = href;

      const totalPixels = pixels.length;
      const staggerDuration = animationDuration / totalPixels;

      // Cover animation
      gsap.set(pixels, { display: "none" });
      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
        onComplete: () => {
          router.push(href);
        },
      });
    },
    [router, pathname, isTransitioning, animationDuration]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div
        ref={pixelGridRef}
        className="page-transition__pixels"
        style={{
          pointerEvents: isTransitioning ? "all" : "none",
          visibility: isTransitioning ? "visible" : "hidden",
        }}
      />
    </TransitionContext.Provider>
  );
}
