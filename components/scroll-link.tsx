"use client";

import type React from "react";

import type { ReactNode } from "react";

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollLink({
  href,
  children,
  className = "",
}: ScrollLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Remove the # from the href
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Update URL without page reload
      window.history.pushState(null, "", href);
    }
  };

  return (
    <a href={href} onClick={handleScroll} className={className}>
      {children}
    </a>
  );
}
