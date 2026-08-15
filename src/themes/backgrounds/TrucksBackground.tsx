const TRUCKS = [
  { x: 120, scale: 1 },
  { x: 520, scale: 0.85 },
  { x: 900, scale: 1.1 },
];

function TruckSilhouette({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`} opacity="0.9">
      <rect x="0" y="18" width="26" height="26" rx="3" fill="var(--color-trucks)" />
      <rect x="30" y="4" width="64" height="40" rx="3" fill="none" stroke="var(--color-trucks)" strokeWidth="2.5" />
      <circle cx="14" cy="46" r="7" fill="none" stroke="var(--color-trucks)" strokeWidth="2.5" />
      <circle cx="78" cy="46" r="7" fill="none" stroke="var(--color-trucks)" strokeWidth="2.5" />
    </g>
  );
}

export default function TrucksBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-x-0 bottom-[16%] w-[200%] h-6 animate-road-drift"
        style={{ animationPlayState: isActive ? "running" : "paused" }}
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <rect key={i} x={i * 40} y="9" width="20" height="2" fill="var(--color-trucks)" opacity="0.65" />
        ))}
      </svg>
      <svg className="absolute bottom-[9%] left-0 w-full h-24" viewBox="0 0 1080 90" preserveAspectRatio="xMidYMax slice">
        {TRUCKS.map((t, i) => (
          <g key={i} transform={`translate(${t.x}, ${90 - 54 * t.scale})`}>
            <TruckSilhouette scale={t.scale} />
          </g>
        ))}
      </svg>
    </div>
  );
}
