"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated orbs */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-float" />
      <div className="absolute top-[40%] -right-32 w-[600px] h-[600px] rounded-full bg-violet-500/20 blur-[140px] animate-float-reverse" />
      <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] animate-pulse-glow" />
      <div className="absolute top-[60%] left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[90px] animate-float" />
      <div className="absolute top-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-purple-500/15 blur-[110px] animate-pulse-glow" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(0,0,0,0.4)_100%)]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}