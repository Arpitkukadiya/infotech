"use client";
import { useState } from "react";
import { X } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
  "https://images.unsplash.com/photo-1591808763002-7b3e4f1c3a1e?w=800",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
];

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="container-x py-20">
      <div className="text-center mb-12">
        <h1 className="section-title">Our Work Gallery</h1>
        <p className="section-sub">Recent installations and projects from our team.</p>
      </div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project ${i + 1}`}
            loading="lazy"
            onClick={() => setActive(src)}
            className="w-full rounded-2xl cursor-pointer hover:opacity-90 transition break-inside-avoid"
          />
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 text-white p-2" aria-label="Close"><X size={28} /></button>
          <img src={active} alt="Preview" className="max-h-[90vh] max-w-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}