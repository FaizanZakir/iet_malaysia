import Image from "next/image";

export function ChairmanMessage() {
  return (
    <section id="chairman-message" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              {/* <p className="text-sm text-primary font-medium mb-2">
                Chairman&apos;s Message
              </p> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
              Chairman&apos;s Message
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              I am very happy to be appointed Chairman of Intelligent Ecommerce Technologies Sdn. Bhd. and to support its strategic direction during a period of accelerated digital transformation across Malaysia and the ASEAN region.
              </p>
              <p>
              IET Malaysia is an IT-focused organisation with active involvement in e-commerce, supporting the broader objectives of digital adoption, productivity enhancement, and sustainable business growth. As a former Ambassador of Malaysia, I believe these priorities are consistent with Malaysia’s national development agenda as well as ASEAN’s ongoing efforts to strengthen the regional digital economy.
              </p>
              <p>With a clear emphasis on technology enablement, governance, and operational discipline, IET Malaysia is committed to delivering reliable digital solutions and commercially viable platforms that meet the evolving needs of enterprises.</p>
              <p>Drawing from my experience in public service and international engagement, I strongly believe that successful technology enterprises must combine strategic clarity with strong institutional foundations. Accordingly, the Board places importance on transparency, risk management, regulatory alignment, and the development of capable leadership and talent.</p>
              <p>As Chairman, my role is to provide oversight and guidance to ensure that the Company remains aligned with its objectives, responsive to market developments, and committed to responsible growth. We look forward to working closely with stakeholders, partners, and clients as we expand our capabilities and contribute meaningfully to Malaysia’s and ASEAN’s digital progress.</p>
              <p><strong>Dato' Ahmad Anwar Bin Adnan</strong></p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/chairmen.jpg"
                alt="Chairman at desk"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
