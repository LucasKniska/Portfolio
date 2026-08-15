export default function SolarEclipseBackground({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-x-0 top-[6%] flex justify-center overflow-hidden">
      <div
        className="w-52 h-52 rounded-full animate-corona-pulse"
        style={{
          animationPlayState: isActive ? "running" : "paused",
          background:
            "radial-gradient(circle, #1a1006 32%, var(--color-eclipse) 35%, rgba(225,29,72,0.55) 44%, transparent 64%)",
          boxShadow: "0 0 130px 26px rgba(225,29,72,0.32)",
        }}
      />
    </div>
  );
}
