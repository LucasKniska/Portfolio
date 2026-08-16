export default function SnowyMountainBase() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, #fff3dd 0%, #ffdcc4 22%, #ffd0c2 38%, #eef2f4 62%, #f8f4ee 100%)",
      }}
    >
      <div
        className="absolute inset-x-0 top-[8%] left-1/2 -translate-x-1/2 h-40 w-40 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,232,180,0.9) 0%, rgba(255,214,168,0.35) 45%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <svg
        className="absolute bottom-0 left-0 w-full h-[46%]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,400 0,220 180,90 340,240 520,60 720,230 900,110 1080,250 1200,150 1200,400"
          fill="var(--color-mountain-far)"
          opacity="0.55"
        />
        <polygon
          points="0,400 0,220 180,90 340,240 520,60 720,230 900,110 1080,250 1200,150 1200,400"
          fill="none"
          stroke="var(--color-sunrise-gold)"
          strokeWidth="2"
          opacity="0.5"
        />
        <polygon
          points="0,400 0,300 220,180 460,320 680,170 940,310 1200,210 1200,400"
          fill="var(--color-mountain-near)"
          opacity="0.75"
        />
        <polygon
          points="0,400 0,300 220,180 460,320 680,170 940,310 1200,210 1200,400"
          fill="none"
          stroke="var(--color-sunrise-pink)"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
