/** Fond façon « Nuit étoilée » généré en SVG (remplaçable par une image). */
export default function PaintedBackground() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1140 560" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8F7FB5" />
          <stop offset=".45" stopColor="#C9B27A" />
          <stop offset="1" stopColor="#D9B24A" />
        </linearGradient>
        <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency=".012 .03" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="90" />
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="strokes">
          <feTurbulence type="fractalNoise" baseFrequency=".004 .09" numOctaves="2" seed="3" />
          <feColorMatrix type="matrix" values="0 0 0 0 .85  0 0 0 0 .7  0 0 0 0 .35  0 0 0 1.6 -.7" />
        </filter>
      </defs>
      <g filter="url(#paint)">
        <rect x="-100" y="-100" width="1340" height="760" fill="url(#sky)" />
        <ellipse cx="260" cy="150" rx="420" ry="90" fill="#7C6BA6" opacity=".7" />
        <ellipse cx="700" cy="70" rx="380" ry="70" fill="#9C8CC4" opacity=".7" />
        <circle cx="1020" cy="110" r="95" fill="#E9C54E" />
        <circle cx="1020" cy="110" r="150" fill="none" stroke="#F0D468" strokeWidth="30" opacity=".6" />
        <ellipse cx="900" cy="380" rx="420" ry="90" fill="#D2A93F" opacity=".8" />
        <ellipse cx="220" cy="420" rx="260" ry="120" fill="#C9A150" opacity=".8" />
        {[
          [270, 70, 38],
          [430, 210, 30],
          [780, 130, 32],
          [160, 330, 26],
        ].map(([cx, cy, radius]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={radius} fill="#EAD27A" />
        ))}
        <path d="M230 560C200 360 230 100 260 20c30 80 40 300 30 540Z" fill="#8C7433" opacity=".55" />
      </g>
      <rect width="1140" height="560" filter="url(#strokes)" opacity=".5" />
      <rect width="1140" height="560" fill="#E08B22" opacity=".16" />
    </svg>
  );
}