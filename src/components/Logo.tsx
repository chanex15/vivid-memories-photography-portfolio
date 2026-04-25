interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  light?: boolean;
}

export default function Logo({ className = '', size = 'md', withText = true, light = false }: LogoProps) {
  const dimensions = {
    sm: { svg: 'h-8 w-8', text: 'text-lg' },
    md: { svg: 'h-12 w-12', text: 'text-2xl' },
    lg: { svg: 'h-16 w-16', text: 'text-3xl font-bold' },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${dimensions.svg} overflow-visible group`}>
        {/* Abstract water ripple backgrounds behind logo */}
        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Main SVG Logo */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 filter drop-shadow-md cursor-pointer transform group-hover:rotate-12 transition-transform duration-500"
        >
          <defs>
            <linearGradient id="vmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" /> {/* Facebook Blue */}
              <stop offset="60%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#f97316" /> {/* Warm Accent */}
            </linearGradient>
            
            <linearGradient id="vmWater" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>

            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Water Ripple Layer */}
          <path
            d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            stroke="url(#vmWater)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 8"
            className="animate-[spin_40s_linear_infinite]"
          />

          {/* Aperture / Shutter / Ripple rings */}
          <circle cx="50" cy="50" r="42" stroke="url(#vmGradient)" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="50" cy="50" r="35" stroke="url(#vmGradient)" strokeWidth="0.5" strokeOpacity="0.3" />
          
          {/* Main "V" and "M" interlocking lines */}
          <path
            d="M20,35 L40,75 L60,35"
            stroke="url(#vmGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
          />
          <path
            d="M45,35 L60,70 L75,35"
            stroke="url(#vmGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
          />
          
          {/* Central lens flare / highlight */}
          <circle cx="50" cy="52" r="3" fill="#ffffff" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="50" cy="52" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col select-none">
          <span
            className={`${dimensions.text} font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
              light
                ? 'from-white via-slate-200 to-blue-200'
                : 'from-blue-900 via-blue-800 to-orange-600'
            }`}
          >
            Vivid Memories
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.2em] font-medium ${
              light ? 'text-blue-200' : 'text-blue-600'
            }`}
          >
            Photography
          </span>
        </div>
      )}
    </div>
  );
}
