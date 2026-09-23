"use client";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center relative z-10">
        <div className="relative inline-block mb-6">
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent animate-pulse-glow">
            404
          </h1>
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Lost in the Grid?
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          The page you're looking for has been moved or doesn't exist. Our cameras caught it wandering off...
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/services" className="btn-outline btn">
            <Search size={16} /> Browse Services
          </Link>
        </div>

        {/* Floating 404 decorations */}
        <div className="absolute -top-20 left-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-float" />
        <div className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-violet-400 animate-float-reverse" />
        <div className="absolute bottom-20 left-1/3 w-4 h-4 rounded-full bg-blue-400 animate-pulse-glow" />
      </div>
    </div>
  );
}