"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";
import { SERVICES, PRODUCTS, TESTIMONIALS, BUSINESS } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsCounter from "@/components/StatsCounter";
import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";
import TypingTagline from "@/components/TypingTagline";
import VideoShowcase from "@/components/VideoShowcase";

export default function HomePage() {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="container-x py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
              Trusted IT & Security Partner
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight min-h-[4.5rem] md:min-h-[6rem]">
  <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent mb-2">
    Smart Tech.
  </span>
  <TypingTagline />
</h1>
            <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-lg leading-relaxed">
              Complete CCTV installation, DVR/NVR setup, laptop & phone repair,
              and gadget sales — delivered at your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/services"
                className="btn"
                onClick={() => trackEvent("hero_services_click")}
              >
                Explore Services →
              </Link>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn"
                onClick={() => trackEvent("directions_click")}
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-violet-500/30 blur-3xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800"
              alt="CCTV camera"
              className="relative rounded-3xl shadow-2xl w-full animate-float border border-cyan-500/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-cyan-500/30 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold text-white">1000+ Clients</div>
                  <div className="text-xs text-slate-400">Trusted since 2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="container-x py-20 reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            Professional installation, repair, and support for all your tech needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-20 reveal">
        <div className="container-x">
          <StatsCounter />
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="container-x py-20 reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-sub">
            Top-quality cameras, DVRs, laptops, and gadgets at competitive prices.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="btn">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>
     {/* ============ VIDEO SHOWCASE ============ */}
<section className="container-x py-20 reveal">
  <div className="text-center mb-12">
    <h2 className="section-title">Watch Us In Action</h2>
    <p className="section-sub">
      See our installations, tutorials, and client stories.
    </p>
  </div>
  <VideoShowcase />
</section>
      {/* ============ WHY US ============ */}
      <section className="container-x py-20 reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-sub">
            Trusted, timely, and professional — every step of the way.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Verified Professionals", desc: "Skilled & background-checked technicians." },
            { icon: Clock, title: "On-Time Service", desc: "We respect your time and arrive punctually." },
            { icon: Users, title: "1000+ Happy Customers", desc: "Trusted by homes and businesses across India." },
          ].map((w, i) => (
            <div key={i} className="card text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <w.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{w.title}</h3>
              <p className="text-slate-400 text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 reveal">
        <div className="container-x">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-sub">Real reviews from real customers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container-x py-20 reveal">
        <div className="relative rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-violet-700">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Ready to Secure Your World?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a free consultation from our experts. Fast response,
              transparent pricing, guaranteed satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                onClick={() => trackEvent("call_click")}
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-none"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}