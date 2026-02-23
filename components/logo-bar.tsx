export function LogoBar() {
  const logos = [
    { name: "Microsoft", svg: (
      <svg viewBox="0 0 23 23" className="h-6 w-6">
        <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
        <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
        <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
        <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
      </svg>
    )},
    { name: "airbnb", svg: (
      <svg viewBox="0 0 102 32" className="h-6 w-auto" fill="#FF5A5F">
        <path d="M29.3 15.7c-.9-1.5-2.2-2.6-3.8-3.4-1.6-.8-3.3-1.2-5.2-1.2-1.9 0-3.6.4-5.2 1.2s-2.9 1.9-3.8 3.4c-.9 1.5-1.4 3.1-1.4 5s.5 3.5 1.4 5c.9 1.5 2.2 2.6 3.8 3.4 1.6.8 3.3 1.2 5.2 1.2 1.9 0 3.6-.4 5.2-1.2s2.9-1.9 3.8-3.4c.9-1.5 1.4-3.1 1.4-5s-.5-3.5-1.4-5zm-4.5 7.9c-.5.8-1.2 1.4-2.1 1.9-.9.5-1.8.7-2.9.7s-2-.2-2.9-.7c-.9-.5-1.6-1.1-2.1-1.9-.5-.8-.8-1.8-.8-2.9s.3-2.1.8-2.9c.5-.8 1.2-1.4 2.1-1.9.9-.5 1.8-.7 2.9-.7s2 .2 2.9.7c.9.5 1.6 1.1 2.1 1.9.5.8.8 1.8.8 2.9s-.3 2.1-.8 2.9z"/>
      </svg>
    )},
    { name: "OLA", svg: (
      <svg viewBox="0 0 60 24" className="h-5 w-auto">
        <circle cx="12" cy="12" r="10" fill="#1a1a1a"/>
        <text x="8" y="16" fill="white" fontSize="10" fontWeight="bold">O</text>
        <text x="26" y="18" fill="#1a1a1a" fontSize="16" fontWeight="bold">OLA</text>
      </svg>
    )},
    { name: "Walmart", svg: (
      <svg viewBox="0 0 120 32" className="h-6 w-auto">
        <text x="0" y="24" fill="#0071ce" fontSize="22" fontWeight="bold" fontFamily="Arial">Walmart</text>
        <g transform="translate(95, 6)">
          <circle cx="8" cy="8" r="2" fill="#ffc220"/>
          <circle cx="8" cy="0" r="2" fill="#ffc220"/>
          <circle cx="8" cy="16" r="2" fill="#ffc220"/>
          <circle cx="1" cy="4" r="2" fill="#ffc220"/>
          <circle cx="1" cy="12" r="2" fill="#ffc220"/>
          <circle cx="15" cy="4" r="2" fill="#ffc220"/>
          <circle cx="15" cy="12" r="2" fill="#ffc220"/>
        </g>
      </svg>
    )},
    { name: "Google", svg: (
      <svg viewBox="0 0 74 24" className="h-6 w-auto">
        <path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"/>
        <path fill="#EA4335" d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"/>
        <path fill="#FBBC05" d="M53 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"/>
        <path fill="#4285F4" d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81 1.55 0 2.66-.59 3.48-1.29v1.04c0 1.82-.98 2.86-2.73 2.86-1.34 0-2.17-.96-2.52-1.77l-2.22.92c.56 1.26 2.04 2.8 4.74 2.8 2.84 0 5.04-1.78 5.04-5.52V6.44h-2.3v.94c-.82-.77-1.93-1.19-3.49-1.19zm.25 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.03-3.52 1.51 0 3.03 1.43 3.03 3.52 0 2.07-1.52 3.52-2.78 3.52z"/>
        <path fill="#34A853" d="M58 .24h2.51v17.57H58z"/>
        <path fill="#EA4335" d="M67.64 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.52 2.2 1.26l-5.25 2.18c0-2.44 1.73-3.44 3.05-3.44z"/>
      </svg>
    )},
  ];

  return (
    <section className="py-8 lg:py-12 border-y border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-12">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            1000+ Big brands trust us
          </p>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
