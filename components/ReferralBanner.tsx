"use client";
import { useState, useEffect } from "react";
import { Gift, Copy, Check, X } from "lucide-react";
import toast from "react-hot-toast";

export default function ReferralBanner() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    // Generate or retrieve referral code
    let stored = localStorage.getItem("referral_code");
    if (!stored) {
      stored = "TECH" + Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem("referral_code", stored);
    }
    setCode(stored);

    // Show after 15 seconds if not dismissed
    const dismissed = localStorage.getItem("referral_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Referral code copied! Share & earn ₹500");
    setTimeout(() => setCopied(false), 2000);
  };

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("referral_dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-slide-up">
      <div className="relative rounded-3xl p-5 bg-slate-900/95 backdrop-blur-xl border border-violet-500/40 shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-white"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
            <Gift className="text-white" size={20} />
          </div>
          <div>
            <div className="font-bold text-white">Refer & Earn ₹500</div>
            <div className="text-xs text-slate-400">Share with friends</div>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-4">
          Get ₹500 off your next service when a friend uses your code:
        </p>

        <button
          onClick={copyCode}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-slate-800 border border-violet-500/30 hover:border-violet-500/60 transition group"
        >
          <span className="font-mono font-bold text-violet-300 tracking-wider">
            {code}
          </span>
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-slate-400 group-hover:text-violet-300" />
          )}
        </button>
      </div>
    </div>
  );
}