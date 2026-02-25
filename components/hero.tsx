import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              IET Malaysia
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold leading-tight text-foreground text-balance">
            Intelligent Ecommerce  <br />Technologies Sdn. Bhd. </h1>
            
            <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
            <strong> Technology. Governance. Regional Scale.</strong></p>
            <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
            <strong>Intelligent Ecommerce Technologies Sdn. Bhd. (IET Malaysia)</strong> is a Malaysia-based technology company focused on building, operating, and scaling e-commerce businesses across the ASEAN region.
            </p>
            
            <div className="flex items-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-5 text-sm font-medium">
                <Link href="#who-we-are">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Traffic Light */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Houses Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/iel1-20-281-29.jpg"
                  alt="IET Malaysia banner"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  style={{ objectPosition: "70% 15%", height: "350px" }}
                />
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
