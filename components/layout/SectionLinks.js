"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SectionLinks() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ block: "start" });
    window.history.replaceState(window.history.state, "", pathname + window.location.search);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest("a[href]");
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!id || id === "top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
        window.history.replaceState(window.history.state, "", window.location.pathname);
        return;
      }

      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
      window.history.replaceState(window.history.state, "", window.location.pathname);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
