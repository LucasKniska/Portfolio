import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "../../types/project";
import { themeRegistry } from "../../themes/registry";
import ProjectPane from "./ProjectPane";

interface ProjectCarouselProps {
  title: string;
  sectionId: string;
  items: Project[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectCarousel({ title, sectionId, items, activeIndex, onIndexChange }: ProjectCarouselProps) {
  const [direction, setDirection] = useState(1);
  const prevIndexRef = useRef(activeIndex);
  const reduceMotion = useReducedMotion();
  const project = items[activeIndex];
  const theme = themeRegistry[project.category];

  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev !== activeIndex) {
      const forwardWrap = prev === items.length - 1 && activeIndex === 0;
      const backwardWrap = prev === 0 && activeIndex === items.length - 1;
      let dir = activeIndex > prev ? 1 : -1;
      if (forwardWrap) dir = 1;
      if (backwardWrap) dir = -1;
      setDirection(dir);
    }
    prevIndexRef.current = activeIndex;
  }, [activeIndex, items.length]);

  function goNext() {
    onIndexChange((activeIndex + 1) % items.length);
  }

  function goPrev() {
    onIndexChange((activeIndex - 1 + items.length) % items.length);
  }

  return (
    <section id={sectionId} className="px-6 sm:px-10 pb-16 max-w-3xl mx-auto scroll-mt-10">
      <h2
        className="text-2xl sm:text-3xl mb-6 text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>

      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={project.id}
          custom={direction}
          initial={{ opacity: 0, x: reduceMotion ? 0 : direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduceMotion ? 0 : -direction * 60 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
        >
          <ProjectPane project={project} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label={`Previous, ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          style={{ borderColor: "var(--color-border)" }}
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex gap-1.5">
          {items.map((item, i) => (
            <span
              key={item.id}
              className="h-1 w-8 rounded-full transition-colors"
              style={{
                background: i === activeIndex ? theme.accent : "rgba(44,53,66,0.12)",
                boxShadow: i === activeIndex ? `0 0 10px 1px ${theme.accent}` : "none",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label={`Next, ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          style={{ borderColor: "var(--color-border)" }}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
