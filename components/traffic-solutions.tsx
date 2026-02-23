"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  "Traffic Management Systems",
  "Highway Safety & Equipment",
  "Toll Plaza Solutions",
  "Intelligent Transportation Systems (ITS)",
];

const slides = [
  { id: 1, src: "/images/traffic-1.jpg", alt: "Traffic management system" },
  { id: 2, src: "/images/traffic-2.jpg", alt: "Highway equipment" },
  { id: 3, src: "/images/traffic-3.jpg", alt: "Toll plaza" },
];

export function TrafficSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-primary font-medium mb-2">
                Traffic Solutions
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
                Traffic Malaysia
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Traffic Malaysia Provides Cutting-Edge Traffic Engineering, Safety Systems, And Road Mobility Solutions. We Help Cities Move Better And Safer.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              Learn More
            </Button>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="text-sm text-muted-foreground ml-2">
                0{currentSlide + 1}/0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={slides[currentSlide].src || "/placeholder.svg"}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
