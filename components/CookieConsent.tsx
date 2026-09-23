"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);

  const accept = () => { localStorage.setItem("cookie-consent", "true"); setShow(false); };

  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[90] bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 animate-slide-up">
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
        We use cookies to enhance your browsing experience and analyze traffic.
      </p>
      <div className="flex gap-2">
        <button onClick={accept} className="btn !py-2 !px-4 text-sm">Accept</button>
        <Link href="/contact" className="btn-outline !py-2 !px-4 text-sm rounded-full">Learn More</Link>
      </div>
    </div>
  );
}