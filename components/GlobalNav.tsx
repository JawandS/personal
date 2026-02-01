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
      baseColor="#60A5FA"
      pillColor="#0A1628"
      hoveredPillTextColor="#60A5FA"
      pillTextColor="#fff"
    />
  );
}
