"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const mockProjects = [
  { id: 1, title: "Apex Tower", category: "Commercial Construction", year: "2024", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Lumina Residences", category: "Luxury Development", year: "2023", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "The Foundation", category: "Infrastructure", year: "2025", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" }
];

export default function DevelopersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.2, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="min-h-screen bg-charcoal text-offwhite selection:bg-primary selection:text-black">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between p-6 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4 group">
          <Image src="/api/images?file=dev.jpg" alt="TPG Developers" width={40} height={40} className="rounded-full bg-white object-contain" />
          <span className="font-heading font-bold text-xl tracking-wider text-white">TPG DEVELOPERS</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-300">
          <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
          <Link href="/developers" className="text-primary">Developers</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative z-10 text-center px-4">
          <h1 ref={titleRef} className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-6 uppercase text-white">
            Engineering <br/> <span className="text-primary">The Future</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light tracking-wide">
            Structural precision, architectural excellence, and industrial-scale development.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Portfolio Mockup */}
      <section className="py-24 px-6 border-t border-gray-800">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-widest mb-12 text-center text-gray-200">Featured Projects</h2>
        
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {mockProjects.map((project) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] snap-center group relative h-[60vh] bg-black overflow-hidden border border-gray-800">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{project.category} // {project.year}</span>
                <h3 className="font-heading text-4xl text-white font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-12 text-center border-t border-gray-800 text-gray-500 text-sm tracking-widest uppercase">
        © 2026 TPG Developers. All Rights Reserved.
      </footer>
    </main>
  );
}
