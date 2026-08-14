import { useId } from 'react'

export function RouteDivider({ center = false }) {
  const gradientId = useId()
  return (
    <div className={center ? 'route-divider center' : 'route-divider'}>
      <svg viewBox="0 0 64 10">
        <path
          d="M0 8 C 18 8, 22 2, 34 2 S 54 8, 64 8"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0A4D9B" />
            <stop offset="1" stopColor="#F57C00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
