"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Dato' Ahmad Anwar Bin Adnan",
    role: "CHAIRMAN",
    image: "/images/team-1.jpg",
    detail:
      "Former Malaysian Ambassador with extensive experience in international diplomacy and governance. Leads strategic direction and board oversight at IET Malaysia.",
  },
  {
    name: "Syed K. Mukhtar",
    role: "CEO",
    image: "/images/team-2.jpg",
    detail:
      "Drives company vision and growth across ASEAN. Background in technology and business development with a focus on scalable e-commerce solutions.",
  },
  {
    name: "Mohammad Abdullah",
    role: "COO",
    image: "/images/team-3.jpg",
    detail:
      "Oversees day-to-day operations and execution. Brings expertise in project delivery, process optimization, and cross-functional team leadership.",
  },
  {
    name: "Dr Mohammed Omar A Alsayed",
    role: "DIRECTOR",
    image: "/images/team-4.jpg",
    detail:
      "Director with strong focus on technology strategy and governance. Contributes to institutional development and long-term strategic planning.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-[#f0f5fa]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Row - Title Left, Description Right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-16">
          <div>
            <p className="text-sm text-primary font-medium mb-3">
              Decision Makers
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
              Meet Our Executive
              <br />
              Team
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-md lg:text-right lg:pt-8">
            Behind Every Successful Project Is A Skilled Team. At IET Malaysia,
            Our Executives Work Closely With Partners, Clients, And Communities
            To Turn Ideas Into Lasting Results.
          </p>
        </div>

        {/* Team Cards - Flip on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group h-[320px] lg:h-[360px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center text-center [backface-visibility:hidden]">
                  <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-6 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-[#e8eef4]" />
                    <div className="absolute inset-2 rounded-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-serif font-semibold text-foreground text-lg lg:text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white/95 shadow-lg p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="font-serif font-semibold text-foreground text-base lg:text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">
                    {member.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
