export function RouteDivider() {
  return (
    <div className="route-divider">
      <svg viewBox="0 0 64 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--orange)" />
          </linearGradient>
        </defs>
        <path
          d="M0 8 Q 16 2, 32 8 T 64 8"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
