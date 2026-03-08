export function NauticalLines({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Diagonal dashed line top-left to mid-right */}
        <line
          x1="5%"
          y1="0%"
          x2="60%"
          y2="100%"
          stroke="#253746"
          strokeWidth="0.5"
          strokeDasharray="8 6"
          opacity="0.08"
        />
        {/* Diagonal dashed line mid to bottom-right */}
        <line
          x1="40%"
          y1="0%"
          x2="95%"
          y2="80%"
          stroke="#253746"
          strokeWidth="0.5"
          strokeDasharray="8 6"
          opacity="0.08"
        />
        {/* Large arc right side */}
        <path
          d="M 100% 20% Q 70% 50%, 100% 80%"
          fill="none"
          stroke="#253746"
          strokeWidth="0.5"
          opacity="0.06"
        />
        {/* Smaller arc right side */}
        <path
          d="M 100% 30% Q 80% 55%, 100% 75%"
          fill="none"
          stroke="#253746"
          strokeWidth="0.5"
          opacity="0.06"
        />
        {/* Small dot */}
        <circle cx="92%" cy="55%" r="3" fill="#253746" opacity="0.08" />
        {/* Diagonal dashed line from left */}
        <line
          x1="0%"
          y1="30%"
          x2="35%"
          y2="0%"
          stroke="#253746"
          strokeWidth="0.5"
          strokeDasharray="8 6"
          opacity="0.06"
        />
      </svg>
    </div>
  );
}
