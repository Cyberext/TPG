"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const mockProperties = [
  { id: 1, name: "The Monolith Pavilion", location: "Pacific Palisades, CA", price: "$14.5M", size: "8,400 SQ FT", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Steel & Glass Loft", location: "Tribeca, NY", price: "$8.2M", size: "4,200 SQ FT", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Minimalist Cliffside", location: "Malibu, CA", price: "$22.0M", size: "12,000 SQ FT", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Urban Glasshouse", location: "Miami, FL", price: "$9.5M", size: "5,800 SQ FT", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop" }
];

export default function PropertiesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.1 }
    );

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-offwhite text-foreground">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between p-6 bg-white shadow-sm border-b border-gray-100">
        <Link href="/" className="flex items-center gap-4 group">
          <Image src="/api/images?file=tpg.jpg" alt="TPG Properties" width={40} height={40} className="rounded-full bg-white object-contain" />
          <span className="font-heading font-bold text-xl tracking-wider text-charcoal">TPG PROPERTIES</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-charcoal">
          <Link href="/properties" className="text-primary">Properties</Link>
          <Link href="/developers" className="hover:text-primary transition-colors">Developers</Link>
        </div>
      </nav>

      {/* Header */}
      <header ref={headerRef} className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">Curated Collection</h1>
        <p className="text-lg text-gray-500 max-w-2xl font-light">Explore our exclusive portfolio of minimalist, luxury real estate designed for the modern connoisseur.</p>
      </header>

      {/* Property Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockProperties.map((prop) => (
            <div key={prop.id} className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative h-80 w-full overflow-hidden">
                <Image 
                  src={prop.image} 
                  alt={prop.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-2xl font-bold">{prop.name}</h3>
                  <span className="text-primary-dark font-bold text-lg">{prop.price}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 uppercase tracking-widest">
                  <span>{prop.location}</span>
                  <span className="text-xs">{prop.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
