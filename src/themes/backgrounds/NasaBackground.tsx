function Drone() {
  return (
    <g stroke="var(--color-nasa)" strokeWidth="2.5" fill="none">
      <line x1="-30" y1="-20" x2="30" y2="20" />
      <line x1="30" y1="-20" x2="-30" y2="20" />
      {[
        [-30, -20],
        [30, -20],
        [-30, 20],
        [30, 20],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="9" fill="rgba(67,56,202,0.18)" />
      ))}
      <rect x="-10" y="-8" width="20" height="16" rx="3" fill="var(--color-nasa)" fillOpacity="1" stroke="none" />
    </g>
  );
}

export default function NasaBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[68%] top-[22%]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 animate-radar-ping"
          style={{ borderColor: "var(--color-nasa)", animationPlayState: isActive ? "running" : "paused" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 animate-radar-ping"
          style={{
            borderColor: "var(--color-nasa)",
            animationPlayState: isActive ? "running" : "paused",
            animationDelay: "1.8s",
          }}
        />
        <svg
          width="180"
          height="130"
          viewBox="-40 -30 80 60"
          className="relative animate-drone-bob"
          style={{ animationPlayState: isActive ? "running" : "paused" }}
        >
          <Drone />
        </svg>
      </div>
    </div>
  );
}
