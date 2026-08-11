"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(
      subheadlineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden text-foreground">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-4 group">
          <Image 
            src="/api/images?file=tpg.jpg" 
            alt="TPG Properties" 
            width={48} 
            height={48} 
            className="rounded-full bg-white object-contain transition-transform group-hover:scale-105" 
          />
          <Image 
            src="/api/images?file=dev.jpg" 
            alt="TPG Developers" 
            width={48} 
            height={48} 
            className="rounded-full bg-white object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-heading font-bold text-xl tracking-wider text-white">TPG GROUP</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-white">
          <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
          <Link href="/developers" className="hover:text-primary transition-colors">Developers</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury Property"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-white mt-12">
          <h1 
            ref={headlineRef}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Curated Luxury Estates
          </h1>
          <p 
            ref={subheadlineRef}
            className="text-lg md:text-2xl font-light tracking-wide text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            A luxury architectural digital ecosystem for real estate, development, construction, and modern living.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/properties" className="px-10 py-4 bg-primary text-black font-semibold tracking-wider hover:bg-primary-dark transition-colors duration-300 w-full sm:w-auto text-sm uppercase">
              Explore Properties
            </Link>
            <Link href="/developers" className="px-10 py-4 bg-transparent border border-white text-white font-semibold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-sm uppercase">
              TPG Developers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
