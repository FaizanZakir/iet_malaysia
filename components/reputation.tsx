import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Expertise In Two Core Industries",
    description: "Seamless Integration Of Urban Mobility And Real Estate Development.",
    cta: "Browse All",
    image: "/images/expertise.jpg",
  },
  {
    number: "02",
    title: "Proven Track Record",
    description: "Successfully Delivered Nationwide Projects With Measurable Results.",
    cta: "Learn More",
    image: "/images/track-record.jpg",
  },
  {
    number: "03",
    title: "Innovation & Quality",
    description: "Using Modern Technologies, Strict Safety Standards, And Premium Construction.",
    cta: "Get An Estimate",
    image: "/images/innovation.jpg",
  },
];

export function Reputation() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-primary font-medium mb-2">Our Reputation</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance max-w-2xl">
            Trusted By Government, Industry & Communities
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.number} className="space-y-4">
              <span className="text-sm text-primary font-medium">
                {feature.number}
              </span>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
              >
                {feature.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mt-4">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
