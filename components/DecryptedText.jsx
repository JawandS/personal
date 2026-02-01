"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  revealDirection = "start",
  sequential = false,
  useOriginalCharsOnly = false,
  onComplete = () => {},
}) => {
  const getInitialEncrypted = () => {
    return text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : characters[Math.floor(Math.random() * characters.length)]
      )
      .join("");
  };

  const [displayText, setDisplayText] = useState(getInitialEncrypted);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const getRandomChar = useCallback(
    (originalChar) => {
      if (originalChar === " ") return " ";
      if (useOriginalCharsOnly) {
        const chars = text.replace(/\s/g, "");
        return chars[Math.floor(Math.random() * chars.length)];
      }
      return characters[Math.floor(Math.random() * characters.length)];
    },
    [characters, text, useOriginalCharsOnly]
  );

  const animate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iterations = 0;
    const textArray = text.split("");
    const revealedIndices = new Set();

    intervalRef.current = setInterval(() => {
      const newText = textArray
        .map((char, index) => {
          if (revealedIndices.has(index)) return char;
          if (char === " ") return " ";
          return getRandomChar(char);
        })
        .join("");

      setDisplayText(newText);
      iterations++;

      // Reveal characters based on direction
      if (sequential) {
        const revealCount = Math.floor(
          (iterations / maxIterations) * textArray.length
        );
        for (let i = 0; i < revealCount; i++) {
          const index =
            revealDirection === "start"
              ? i
              : revealDirection === "end"
                ? textArray.length - 1 - i
                : Math.floor(Math.random() * textArray.length);
          revealedIndices.add(index);
        }
      }

      if (iterations >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
        setHasAnimated(true);
        onComplete();
      }
    }, speed);
  }, [
    text,
    speed,
    maxIterations,
    getRandomChar,
    isAnimating,
    sequential,
    revealDirection,
    onComplete,
  ]);

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              animate();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn, animate, hasAnimated]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      animate();
    }
  };

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
    >
      {displayText.split("").map((char, index) => (
        <span
          key={index}
          className={`${className} ${char !== text[index] ? encryptedClassName : ""}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default DecryptedText;
