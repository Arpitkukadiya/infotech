"use client";
import { useState } from "react";
import { MessageCircle, Phone, Navigation, MessageSquare, X } from "lucide-react";
import QueryModal from "./QueryModal";
import { BUSINESS } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
  href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    typeof window !== "undefined"
      ? `Hi ${BUSINESS.name}, I'm interested in ${window.location.pathname.replace("/", "") || "your services"}. Please share details.`
      : `Hi ${BUSINESS.name}, I'd like to know more about your services.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackEvent("whatsapp_click")}
  className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition relative"
  aria-label="WhatsApp"
>
  <MessageCircle />
  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
</a>
        <a
          href={`tel:${BUSINESS.phone}`}
          onClick={() => trackEvent("call_click")}
          className="w-14 h-14 rounded-full bg-electric text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Call"
        >
          <Phone />
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("directions_click")}
          className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Directions"
        >
          <Navigation />
        </a>
        <button
          onClick={() => { setOpen(true); trackEvent("query_modal_open"); }}
          className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Query"
        >
          <MessageSquare />
        </button>
      </div>
      <QueryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}