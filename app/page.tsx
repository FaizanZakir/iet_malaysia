import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
// import { LogoBar } from "@/components/logo-bar";
import { WhoWeAre } from "@/components/who-we-are";
import { MarqueeBanner } from "@/components/marquee-banner";
import { TrafficSolutions } from "@/components/traffic-solutions";
import { Team } from "@/components/team";
import { Reputation } from "@/components/reputation";
import { ChairmanMessage } from "@/components/chairman-message";
import { CTASection } from "@/components/cta-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Header />
      <Hero />
      {/* <LogoBar /> */}
      <MarqueeBanner />
      <WhoWeAre />
      
      {/* <TrafficSolutions /> */}
      <ChairmanMessage /> 
      <Team />
      {/* <Reputation /> */}
      
      {/* <CTASection /> */}
      <Contact />
      <Footer />
    </main>
  );
}
