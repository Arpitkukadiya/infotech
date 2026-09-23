"use client";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { trackEvent } from "@/lib/analytics";

export default function ServiceCard({ service }: { service: any }) {
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;

  const bookNow = () => {
    trackEvent("service_book", { service: service.title });
    toast.success(`Booking request for ${service.title}. We'll call you shortly!`);
    const stored = JSON.parse(localStorage.getItem("queries") || "[]");
    stored.push({ type: "service", service: service.title, date: new Date().toISOString() });
    localStorage.setItem("queries", JSON.stringify(stored));
  };

  return (
    <div className="card group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          {service.price}
        </span>
        <button
          onClick={bookNow}
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition"
        >
          Book Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}