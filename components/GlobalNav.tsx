"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const PillNavNext = dynamic(() => import("@/components/PillNavNext"), {
  ssr: false,
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function GlobalNav() {
  const pathname = usePathname();

  // Don't show nav on home page (has its own gallery navigation)
  if (pathname === "/") return null;

  return (
    <PillNavNext
      items={navItems}
      baseColor="#A855F7"
      pillColor="#1E1033"
      hoveredPillTextColor="#A855F7"
      pillTextColor="#fff"
    />
  );
}
