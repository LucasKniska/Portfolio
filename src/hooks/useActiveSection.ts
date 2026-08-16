import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids currently sits in a thin band near
 * the vertical center of the viewport. Returns null when none of them do
 * (e.g. scrolled back up above all of them).
 */
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track intersection state per id ourselves — a callback's `entries` only
    // contains elements whose state just *changed*, so reacting to that batch
    // alone can never re-derive "nothing is intersecting anymore".
    const intersecting = new Map<string, boolean>(elements.map((el) => [el.id, false]));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set((entry.target as HTMLElement).id, entry.isIntersecting);
        }
        const next = ids.find((id) => intersecting.get(id));
        setActiveId(next ?? null);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}
