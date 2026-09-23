"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "CCTV Installation Demo", thumb: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600" },
  { id: "dQw4w9WgXcQ", title: "DVR Setup Tutorial", thumb: "https://images.unsplash.com/photo-1591808763002-7b3e4f1c3a1e?w=600" },
  { id: "dQw4w9WgXcQ", title: "Client Testimonial", thumb: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" },
];

export default function VideoShowcase() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {VIDEOS.map((v) => (
          <button
            key={v.title}
            onClick={() => setActive(v.id)}
            className="group relative aspect-video rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
          >
            <img
              src={v.thumb}
              alt={v.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/30 transition">
                <Play className="text-white fill-white ml-1" size={24} />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <h3 className="font-bold text-white text-lg">{v.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${active}?autoplay=1`}
            className="w-full max-w-4xl aspect-video rounded-2xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video"
          />
        </div>
      )}
    </>
  );
}