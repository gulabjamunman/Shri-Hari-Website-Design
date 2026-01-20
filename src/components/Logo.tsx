const Logo = ({ className = "", size = 48 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring / compass frame */}
      <circle cx="50" cy="50" r="46" stroke="hsl(var(--crimson))" strokeWidth="3" fill="none" />
      
      {/* Compass points - gold */}
      <path
        d="M50 4 L54 15 L50 12 L46 15 Z"
        fill="hsl(var(--gold))"
      />
      <path
        d="M50 96 L54 85 L50 88 L46 85 Z"
        fill="hsl(var(--gold))"
      />
      <path
        d="M4 50 L15 54 L12 50 L15 46 Z"
        fill="hsl(var(--gold))"
      />
      <path
        d="M96 50 L85 54 L88 50 L85 46 Z"
        fill="hsl(var(--gold))"
      />
      
      {/* Stylized S in center */}
      <path
        d="M35 30 
           C35 25, 45 20, 55 22
           C70 25, 72 35, 65 42
           L40 58
           C33 63, 35 73, 50 76
           C60 78, 68 74, 68 70"
        stroke="hsl(var(--crimson))"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Inner decorative ring */}
      <circle cx="50" cy="50" r="38" stroke="hsl(var(--gold))" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );
};

export default Logo;
