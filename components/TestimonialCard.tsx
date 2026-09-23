import { Star } from "lucide-react";

export default function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="card">
      <div className="flex gap-1 mb-3">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-300 mb-5 italic text-sm leading-relaxed">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-white">
          {t.name.split(" ").map((n: string) => n[0]).join("")}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-xs text-slate-400">{t.role}</div>
        </div>
      </div>
    </div>
  );
}