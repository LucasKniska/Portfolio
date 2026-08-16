import type { ReactNode } from "react";

/** Renders `**bold**` segments in resume bullet text as <strong>. */
export function formatBullet(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold" style={{ color: "var(--color-ink)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
