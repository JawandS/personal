"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { research } from "@/lib/data";

interface CardSlot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
  scale: number;
  opacity: number;
}

const makeSlot = (i: number, total: number): CardSlot => ({
  x: i * 40,
  y: -i * 25,
  z: -i * 80,
  zIndex: total - i,
  scale: 1 - i * 0.03,
  opacity: 1 - i * 0.15,
});

// Education card data
const educationCard = {
  title: "Education",
  institution: "William & Mary",
  period: "Aug 2023 – May 2026",
  degree: "B.S. Computer Science & Economics",
  gpa: "3.98/4.00",
  honors: ["Bennett Fellow", "Terry Glenn Scholar", "Cisco Student Success Award"],
};

// Combine research items with education
const allItems = [...research, { ...educationCard, isEducation: true }];

export default function ResearchCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [order, setOrder] = useState(() =>
    Array.from({ length: allItems.length }, (_, i) => i)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = allItems.length;

  const positionCards = useCallback(
    (animate = true) => {
      order.forEach((cardIndex, position) => {
        const el = cardRefs.current[cardIndex];
        if (!el) return;

        const slot = makeSlot(position, total);
        const duration = animate ? 0.8 : 0;

        gsap.to(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          scale: slot.scale,
          opacity: slot.opacity,
          zIndex: slot.zIndex,
          duration,
          ease: "power3.out",
        });
      });
    },
    [order, total]
  );

  useEffect(() => {
    positionCards(false);
  }, [positionCards]);

  const swapNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const frontCardIndex = order[0];
    const el = cardRefs.current[frontCardIndex];
    if (!el) {
      setIsAnimating(false);
      return;
    }

    gsap.to(el, {
      x: 800,
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setOrder((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setCurrentIndex((prev) => (prev + 1) % total);
        setIsAnimating(false);
      },
    });
  }, [isAnimating, order, total]);

  const swapPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const backCardIndex = order[order.length - 1];
    const el = cardRefs.current[backCardIndex];
    if (!el) {
      setIsAnimating(false);
      return;
    }

    gsap.set(el, { x: -800, opacity: 0, scale: 0.8, zIndex: total + 1 });

    gsap.to(el, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => {
        setOrder((prev) => {
          const last = prev[prev.length - 1];
          const rest = prev.slice(0, -1);
          return [last, ...rest];
        });
        setCurrentIndex((prev) => (prev - 1 + total) % total);
        setIsAnimating(false);
      },
    });
  }, [isAnimating, order, total]);

  useEffect(() => {
    if (!isAnimating) {
      positionCards(true);
    }
  }, [order, isAnimating, positionCards]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        swapNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        swapPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [swapNext, swapPrev]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 30) {
          swapNext();
        } else if (e.deltaY < -30) {
          swapPrev();
        }
      }, 50);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [swapNext, swapPrev]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          swapNext();
        } else {
          swapPrev();
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [swapNext, swapPrev]);

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        swapNext();
      }, 6000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [swapNext]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!autoPlayRef.current) {
      autoPlayRef.current = setInterval(() => {
        swapNext();
      }, 6000);
    }
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-8">
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-[420px] w-full max-w-2xl cursor-grab active:cursor-grabbing"
        style={{ perspective: "1200px" }}
      >
        {allItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onClick={() => i === order[0] && swapNext()}
            className="absolute left-1/2 top-1/2 h-[360px] w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl border border-blue-400/40 bg-slate-900/95 px-6 pt-6 pb-8 shadow-2xl backdrop-blur-md transition-colors hover:border-blue-400/60"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {"isEducation" in item ? (
              // Education card
              <>
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-100">{item.degree}</p>
                <p className="text-blue-200">
                  {item.institution} | {item.period}
                </p>
                <p className="mt-2 text-blue-300">GPA: {item.gpa}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.honors.map((honor, j) => (
                    <span
                      key={j}
                      className="rounded-lg border border-blue-400/50 bg-slate-800/60 px-3 py-1.5 text-sm text-gray-100"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              // Research card
              <>
                <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
                    {item.period}
                  </span>
                </div>
                <p className="text-lg text-blue-200">{item.institution}</p>
                <p className="mb-3 text-sm text-blue-300">
                  Advisor: {item.advisor}
                </p>
                <p className="text-gray-100">{item.description}</p>
                {item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg border border-blue-400/50 bg-slate-800/60 px-3 py-1.5 text-sm text-gray-100 transition-all hover:border-blue-300 hover:bg-slate-700/70"
                      >
                        {link.type === "package" ? "PyPI" : "GitHub"}:{" "}
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={swapPrev}
          disabled={isAnimating}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/50 bg-slate-800/50 text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-white disabled:opacity-50"
          aria-label="Previous"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {allItems.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-blue-400" : "w-2 bg-blue-400/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={swapNext}
          disabled={isAnimating}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/50 bg-slate-800/50 text-blue-300 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-white disabled:opacity-50"
          aria-label="Next"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
