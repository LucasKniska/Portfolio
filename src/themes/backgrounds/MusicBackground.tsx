const NOTES = Array.from({ length: 10 }, (_, i) => ({
  left: `${6 + i * 9.5}%`,
  delay: `${i * 1.1}s`,
  duration: `${9 + (i % 4)}s`,
  size: 18 + (i % 3) * 8,
}));

export default function MusicBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-[18%] flex flex-col gap-6 opacity-40">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-[1.5px] w-full bg-[var(--color-music)]" />
        ))}
      </div>
      {NOTES.map((n, i) => (
        <span
          key={i}
          className="absolute bottom-0 animate-note-float text-[var(--color-music)] opacity-90"
          style={{
            left: n.left,
            fontSize: n.size,
            animationDelay: n.delay,
            animationDuration: n.duration,
            animationPlayState: isActive ? "running" : "paused",
          }}
        >
          {i % 2 === 0 ? "♪" : "♫"}
        </span>
      ))}
    </div>
  );
}
