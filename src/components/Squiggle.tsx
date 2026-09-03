/**
 * Decorative hand-drawn organic line-art, echoing the reference design.
 * Fixed, non-interactive, low-opacity navy strokes on the cream ground.
 */
export default function Squiggle() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="var(--squiggle)"
        strokeWidth="1.5"
      >
        <path d="M120 140c140-70 250 40 200 150s-260 90-250-30 210-150 340-60 120 240-40 300-360 40-300-160 380-260 560-120 130 320-70 380" />
        <path d="M1180 80c120 40 170 190 60 260s-260-40-210-160 300-130 360 10-60 260-200 240" />
        <path d="M60 640c120-40 240 60 190 170s-250 60-240-50 200-80 300 10" />
        <path d="M980 560c130-30 250 70 190 190s-280 40-250-90 260-120 360 0" />
        <circle cx="1290" cy="470" r="120" />
        <circle cx="250" cy="360" r="150" />
      </svg>
    </div>
  );
}
