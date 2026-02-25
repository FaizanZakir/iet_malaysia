import Image from "next/image";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Modern office building"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary font-medium mb-2">
                Discover IET Malaysia
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
                Who Are We?
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Intelligent Ecommerce Technologies Sdn Bhd, commonly known as "IET Malaysia", is a company incorporated and based in Malaysia.
              </p>
              <p>
                A leadership team with decades of experience spanning aviation, banking, technology, and international diplomacy drives IET Malaysia. Under the stewardship of a retired Malaysian Ambassador as Chairman, the company brings together strong governance, regional understanding, and a long-term institutional perspective.
              </p>
              <p>
                Our management team's diverse backgrounds enable us to approach e-commerce not just as a technology problem, but as a business ecosystem—where operations, trust, compliance, and execution matter as much as innovation.
              </p>
              <p className="font-medium text-foreground mt-4">The company is involved in:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Ecommerce</li>
                <li>Bespoke software development</li>
                <li>Large IT Projects Management</li>
                <li>Web Development</li>
                <li>Representing foreign IT companies in Malaysia</li>
              </ul>
              <p className="pt-2">
                We aim to partner with private organisations as well as government agencies to make services to the public more efficient, responsive and user-centric.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
