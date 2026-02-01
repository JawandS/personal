"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './PageTransition.css';

export default function PageTransition({
  children,
  activeSection,
  gridSize = 12,
  pixelColor = '#60A5FA',
  animationDuration = 0.5,
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const contentRef = useRef(null);
  const [displayedSection, setDisplayedSection] = useState(activeSection);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevSectionRef = useRef(activeSection);

  // Build pixel grid
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    // Clear existing pixels using DOM methods
    while (pixelGridEl.firstChild) {
      pixelGridEl.removeChild(pixelGridEl.firstChild);
    }

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('page-transition__pixel');
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

  // Handle section change
  useEffect(() => {
    if (activeSection === prevSectionRef.current) return;

    const pixelGridEl = pixelGridRef.current;
    const contentEl = contentRef.current;
    if (!pixelGridEl || !contentEl) return;

    const pixels = pixelGridEl.querySelectorAll('.page-transition__pixel');
    if (!pixels.length) return;

    setIsTransitioning(true);
    gsap.killTweensOf(pixels);

    const totalPixels = pixels.length;
    const staggerDuration = animationDuration / totalPixels;

    // Phase 1: Pixels appear (cover screen)
    gsap.set(pixels, { display: 'none' });
    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    // Phase 2: Swap content mid-transition, then pixels disappear
    gsap.delayedCall(animationDuration, () => {
      setDisplayedSection(activeSection);
      prevSectionRef.current = activeSection;

      gsap.to(pixels, {
        display: 'none',
        duration: 0,
        delay: 0.1,
        stagger: {
          each: staggerDuration,
          from: 'random'
        },
        onComplete: () => setIsTransitioning(false)
      });
    });

  }, [activeSection, animationDuration]);

  // Render the correct content based on displayedSection
  const renderContent = () => {
    if (typeof children === 'function') {
      return children(displayedSection);
    }
    return children;
  };

  return (
    <div ref={containerRef} className="page-transition">
      <div ref={contentRef} className="page-transition__content">
        {renderContent()}
      </div>
      <div
        ref={pixelGridRef}
        className="page-transition__pixels"
        style={{
          pointerEvents: isTransitioning ? 'all' : 'none',
          visibility: isTransitioning ? 'visible' : 'hidden'
        }}
      />
    </div>
  );
}
