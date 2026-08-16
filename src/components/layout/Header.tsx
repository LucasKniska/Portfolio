export default function Header() {
  return (
    <header className="px-6 pt-16 pb-10 sm:px-10 sm:pt-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-soft)]">
        Portfolio
      </p>
      <h1
        className="mt-3 text-4xl sm:text-6xl text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Lucas Kniska
      </h1>
      <p className="mt-4 text-[var(--color-ink-muted)] max-w-xl mx-auto">
        AI infrastructure &amp; systems design — Stanford CS.
      </p>
    </header>
  );
}
