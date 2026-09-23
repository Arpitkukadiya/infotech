"use client";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function LiveVisitorBadge() {
  const [count, setCount] = useState(12);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 15) + 8);
    setVisible(true);
    const interval = setInterval(() => {
      setCount((c) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(5, Math.min(40, c + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 shadow-lg animate-fade-in">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <Eye size={14} className="text-cyan-400" />
      <span className="text-xs font-medium text-slate-200">
        <span className="text-cyan-400 font-bold">{count}</span> viewing now
      </span>
    </div>
  );
}