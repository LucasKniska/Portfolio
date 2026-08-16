import type { Project } from "../../types/project";
import { themeRegistry } from "../../themes/registry";

interface TimelineProps {
  internships: Project[];
  projects: Project[];
  activeId: string | null;
  onSelect: (project: Project) => void;
}

function TimelineGroup({
  label,
  entries,
  activeId,
  onSelect,
}: {
  label: string;
  entries: Project[];
  activeId: string | null;
  onSelect: (project: Project) => void;
}) {
  const sorted = [...entries].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--color-ink-soft)] mb-3">
        {label}
      </p>
      <div className="relative pl-4">
        <div className="absolute left-[3px] top-1 bottom-1 w-px" style={{ background: "var(--color-border)" }} />
        <ul className="space-y-4">
          {sorted.map((entry) => {
            const theme = themeRegistry[entry.category];
            const isActive = entry.id === activeId;
            return (
              <li key={entry.id}>
                <button type="button" onClick={() => onSelect(entry)} className="group relative block text-left w-full">
                  <span
                    className="absolute -left-4 top-1.5 h-2 w-2 rounded-full transition-transform"
                    style={{
                      background: isActive ? theme.accent : "var(--color-ink-soft)",
                      boxShadow: isActive ? `0 0 8px 2px ${theme.accent}` : "none",
                      transform: isActive ? "scale(1.4)" : "scale(1)",
                    }}
                  />
                  <span
                    className="block text-[11px] tabular-nums"
                    style={{ color: isActive ? "var(--color-ink)" : "var(--color-ink-soft)" }}
                  >
                    {entry.sortDate.slice(0, 4)}
                  </span>
                  <span
                    className="block text-sm leading-snug"
                    style={{
                      color: isActive ? "var(--color-ink)" : "var(--color-ink-muted)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {entry.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Timeline({ internships, projects, activeId, onSelect }: TimelineProps) {
  return (
    <aside className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 w-52 z-20 space-y-7">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-soft)]">Timeline</p>
      <TimelineGroup label="Professional Experience" entries={internships} activeId={activeId} onSelect={onSelect} />
      <TimelineGroup label="Projects" entries={projects} activeId={activeId} onSelect={onSelect} />
    </aside>
  );
}
