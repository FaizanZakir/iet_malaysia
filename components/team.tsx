import Image from "next/image";

const teamMembers = [
  {
    name: "Dato' Ahmad Anwar Bin Adnan",
    role: "CHAIRMAN",
    image: "/images/team-1.jpg",
  },
  {
    name: "Syed K. Mukhtar",
    role: "CEO",
    image: "/images/team-2.jpg",
  },
  {
    name: "Mohammad Abdullah",
    role: "COO",
    image: "/images/team-3.jpg",
  },
  {
    name: "Dr Mohammed Omar A Alsayed",
    role: "DIRECTOR",
    image: "/images/team-4.jpg",
  },
];

export function Team() {
  return (
    <section className="py-16 lg:py-24 bg-[#f0f5fa]">
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
            Behind Every Successful Project Is A Skilled Team. At IET Malaysia, Our Executives Work Closely With Partners, Clients, And Communities To Turn Ideas Into Lasting Results.
          </p>
        </div>

        {/* Team Cards - Four in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              {/* Circular image with gray background ring */}
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-6">
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
          ))}
        </div>
      </div>
    </section>
  );
}
