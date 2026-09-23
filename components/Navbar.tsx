"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    if (!isDark) document.body.classList.remove("dark");

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            TechSecure
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all text-slate-300 hover:text-cyan-400"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={`tel:${BUSINESS.phone}`} className="btn !py-2.5 !px-6 text-sm">
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20 animate-slide-up">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-medium text-slate-200 hover:text-cyan-400 transition"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={toggleDark}
              className="py-2.5 text-left font-medium text-slate-200"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
            <a href={`tel:${BUSINESS.phone}`} className="btn w-full mt-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}