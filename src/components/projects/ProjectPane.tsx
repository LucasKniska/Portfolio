import type { Project } from "../../types/project";
import { themeRegistry } from "../../themes/registry";
import { formatBullet } from "../../lib/formatBullet";

export default function ProjectPane({ project }: { project: Project }) {
  const theme = themeRegistry[project.category];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-6 sm:p-9"
      style={{
        boxShadow: "var(--shadow-pane-active)",
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        backdropFilter: "blur(10px)",
      }}
    >
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: theme.accent,
          boxShadow: `0 0 16px 2px ${theme.accent}`,
        }}
      />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: theme.accent }}>
        {project.kind === "internship" ? "Internship" : "Project"}
      </p>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3
          className="text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
        >
          {project.title}
        </h3>
        {project.location && (
          <span className="text-sm shrink-0" style={{ color: "var(--color-ink-soft)" }}>
            {project.location}
          </span>
        )}
      </div>
      <div className="mt-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <p className="italic" style={{ color: "var(--color-ink-muted)" }}>
          {project.role}
        </p>
        <span className="text-sm italic shrink-0" style={{ color: "var(--color-ink-soft)" }}>
          {project.dateRange}
        </span>
      </div>

      <p
        className="mt-4 text-[15px] leading-relaxed border-l-2 pl-3"
        style={{ color: "var(--color-ink-muted)", borderColor: theme.accent, fontFamily: "var(--font-display)" }}
      >
        {project.story}
      </p>

      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {project.highlights.map((highlight, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-snug"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: theme.accent }} />
            <span>{formatBullet(highlight)}</span>
          </li>
        ))}
      </ul>

      {project.tags && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-[11px] px-2 py-1 rounded-full border"
              style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {project.links && (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline decoration-dotted"
              style={{ color: theme.accent }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
