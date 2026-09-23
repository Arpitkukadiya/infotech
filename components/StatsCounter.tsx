"use client";
import { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";
import { STATS } from "@/lib/data";

export default function StatsCounter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((s, i) => {
        const Icon = (Icons as any)[s.icon] || Icons.Star;
        return (
          <div
            key={i}
            className="text-center p-6 rounded-3xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-cyan-500/50 transition-all hover:-translate-y-1"
          >
            <Icon className="mx-auto mb-3 text-cyan-400" size={32} />
            <Counter target={s.value} visible={visible} suffix={s.suffix} />
            <p className="text-sm text-slate-400 mt-1">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function Counter({
  target,
  visible,
  suffix = "+",
}: {
  target: number;
  visible: boolean;
  suffix?: string;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setN(target);
        clearInterval(timer);
      } else setN(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return (
    <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
      {n}
      {suffix}
    </div>
  );
}