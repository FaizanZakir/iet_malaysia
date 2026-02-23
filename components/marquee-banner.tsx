'use client';

export function MarqueeBanner() {
  const text = "A Vision For Liveable And Affordable Homes.";
  
  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-primary-foreground font-medium text-lg"
          >
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
