const CANDLES = Array.from({ length: 24 }, (_, i) => {
  const up = i % 3 !== 0;
  const bodyH = 14 + ((i * 37) % 44);
  const wickH = bodyH + 10 + ((i * 13) % 14);
  return { up, bodyH, wickH, x: i * 42 };
});

export default function FinanceBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-[10%] left-0 w-[200%] h-[32%] animate-chart-drift"
        style={{ animationPlayState: isActive ? "running" : "paused" }}
        viewBox="0 0 2016 220"
        preserveAspectRatio="xMidYMax slice"
      >
        {[0, 1].map((rep) => (
          <g key={rep} transform={`translate(${rep * 1008}, 0)`}>
            {CANDLES.map((c, i) => (
              <g key={i} transform={`translate(${c.x + 20}, ${220 - c.wickH})`}>
                <line
                  x1="10"
                  x2="10"
                  y1="0"
                  y2={c.wickH}
                  stroke={c.up ? "var(--color-finance)" : "var(--color-finance-down)"}
                  strokeWidth="2.5"
                  opacity="0.85"
                />
                <rect
                  x="2"
                  y={(c.wickH - c.bodyH) / 2}
                  width="16"
                  height={c.bodyH}
                  rx="2"
                  fill={c.up ? "var(--color-finance)" : "var(--color-finance-down)"}
                  opacity="0.8"
                />
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
