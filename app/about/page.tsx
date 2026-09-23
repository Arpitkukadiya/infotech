import { Target, Eye, Award, Users } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="container-x py-20">
      <div className="text-center mb-16">
        <h1 className="section-title">About {BUSINESS.name}</h1>
        <p className="section-sub">Your trusted IT & security partner since 2015.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" alt="Team working" className="rounded-3xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Our Story</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Founded in 2015, {BUSINESS.name} has grown from a small repair shop to one of the region's most trusted IT service providers. We specialize in security systems, gadget sales, and on-site technical support.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Our mission is simple — make technology accessible, secure, and reliable for every home and business.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: Target, title: "Our Mission", desc: "Deliver reliable, affordable tech solutions with exceptional service." },
          { icon: Eye, title: "Our Vision", desc: "Become India's most trusted name in IT & security services." },
          { icon: Award, title: "Our Values", desc: "Integrity, quality, and customer-first thinking in everything we do." },
        ].map((c, i) => (
          <div key={i} className="card text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-4">
              <c.icon size={28} />
            </div>
            <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{c.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <h2 className="section-title">Our Journey</h2>
      </div>
      <div className="relative max-w-3xl mx-auto">
        {[
          { year: "2015", title: "Founded", desc: "Started as a small repair shop in New Delhi." },
          { year: "2018", title: "Expanded Services", desc: "Added CCTV installation and DVR setup." },
          { year: "2021", title: "1000+ Clients", desc: "Crossed the 1000-customer milestone." },
          { year: "2025", title: "Pan-India Presence", desc: "Now serving 80+ cities with on-site support." },
        ].map((m, i) => (
          <div key={i} className="flex gap-6 mb-8">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-electric text-white flex items-center justify-center font-bold text-lg shadow-lg">
              {m.year}
            </div>
            <div className="pt-3">
              <h3 className="font-bold text-lg text-navy dark:text-white">{m.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}