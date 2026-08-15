function Rover() {
  return (
    <g stroke="var(--color-space)" strokeWidth="2.5" fill="none">
      <rect x="-16" y="-8" width="32" height="14" rx="3" fill="var(--color-space)" fillOpacity="0.85" stroke="none" />
      <circle cx="-11" cy="8" r="5" />
      <circle cx="11" cy="8" r="5" />
      <line x1="0" y1="-8" x2="0" y2="-18" />
      <circle cx="0" cy="-20" r="2.5" fill="var(--color-space)" stroke="none" />
    </g>
  );
}

export default function SpaceBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-[15%] left-0 w-[200%] h-16 animate-rover-drift"
        style={{ animationPlayState: isActive ? "running" : "paused" }}
        viewBox="0 0 800 40"
        preserveAspectRatio="xMidYMid slice"
      >
        {[0, 1].map((rep) => (
          <g key={rep} transform={`translate(${rep * 400}, 20) scale(1.6)`}>
            <line x1="0" y1="0" x2="250" y2="0" stroke="var(--color-space)" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.55" />
            <Rover />
            {[18, 30, 42].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="var(--color-space)" strokeWidth="1.5" opacity={0.5 - r / 120} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
