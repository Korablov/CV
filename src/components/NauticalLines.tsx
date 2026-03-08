export function NauticalLines({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {/* Diagonal dashed line top-left to mid-right */}
        <line
          x1="70"
          y1="0"
          x2="860"
          y2="900"
          stroke="#253746"
          strokeWidth="1"
          strokeDasharray="10 8"
          opacity="0.12"
        />
        {/* Diagonal dashed line mid to bottom-right */}
        <line
          x1="580"
          y1="0"
          x2="1370"
          y2="720"
          stroke="#253746"
          strokeWidth="1"
          strokeDasharray="10 8"
          opacity="0.1"
        />
        {/* Large arc right side */}
        <path
          d="M 1440 180 Q 1010 450, 1440 720"
          fill="none"
          stroke="#253746"
          strokeWidth="1"
          opacity="0.1"
        />
        {/* Smaller arc right side */}
        <path
          d="M 1440 270 Q 1150 495, 1440 675"
          fill="none"
          stroke="#253746"
          strokeWidth="1"
          opacity="0.08"
        />
        {/* Small dot */}
        <circle cx="1325" cy="495" r="4" fill="#253746" opacity="0.15" />
        {/* Diagonal dashed line from left */}
        <line
          x1="0"
          y1="270"
          x2="505"
          y2="0"
          stroke="#253746"
          strokeWidth="1"
          strokeDasharray="10 8"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}
