import { bio, education, skillGroups, contact } from "../../data/about";

export default function AboutMe() {
  return (
    <section className="px-6 sm:px-10 pb-16 max-w-3xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl border p-6 sm:p-9"
        style={{ boxShadow: "var(--shadow-pane)", background: "var(--color-surface)", borderColor: "var(--color-border)", backdropFilter: "blur(10px)" }}
      >
        <span
          className="absolute inset-x-0 top-0 h-1"
          style={{ background: "var(--color-accent)", boxShadow: "0 0 16px 2px var(--color-accent)" }}
        />

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-soft)]">About</p>
        <h2 className="mt-3 text-2xl sm:text-3xl text-[var(--color-ink)]" style={{ fontFamily: "var(--font-display)" }}>
          Hi, I'm Lucas.
        </h2>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">{bio}</p>

        <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg text-[var(--color-ink)] font-semibold">{education.school}</h3>
            <span className="text-sm text-[var(--color-ink-soft)]">{education.location}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <p className="text-[var(--color-ink-muted)] italic">{education.degree}</p>
            <span className="text-sm text-[var(--color-ink-soft)] italic">{education.dateRange}</span>
          </div>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            <span className="text-[var(--color-ink-soft)]">Coursework: </span>
            {education.coursework.join(", ")}
          </p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
            <span className="text-[var(--color-ink-soft)]">Activities: </span>
            {education.activities.join(" · ")}
          </p>
        </div>

        <div className="mt-8 border-t pt-6 grid gap-5 sm:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-ink-soft)]">{group.label}</p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-ink-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ borderColor: "var(--color-border)" }}>
          <a href={`mailto:${contact.email}`} className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline decoration-dotted">
            {contact.email}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline decoration-dotted">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline decoration-dotted">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
