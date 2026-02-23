import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white text-balance">
          Partner With Us
          </h2>
          
          <p className="text-white/70 leading-relaxed">
          As ASEAN’s digital economy continues to grow, IET Malaysia is positioned to be a trusted partner for businesses, investors, and public and private institutions seeking to participate in the region’s e-commerce future.
          <br/>
          <strong>Let’s build intelligent commerce for ASEAN—together.</strong>
          </p>
          
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-medium">
          Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
