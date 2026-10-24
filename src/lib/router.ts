import { useEffect, useState } from "react";

function normalize(hash: string) {
  const h = (hash || "").replace(/^#/, "").split("?")[0];
  if (!h || h === "/") return "/";
  return h.startsWith("/") ? h : `/${h}`;
}

export function useRoute() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : normalize(window.location.hash)
  );

  useEffect(() => {
    const onHash = () => setPath(normalize(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return path;
}

export function navigate(path: string) {
  const current = normalize(window.location.hash);
  if (current === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = path;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: "smooth" });
}
