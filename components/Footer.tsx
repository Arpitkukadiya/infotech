import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-200 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Tech<span className="text-electric">Secure</span>
          </h3>
          <p className="text-sm text-slate-400">{BUSINESS.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-electric">Services</Link></li>
            <li><Link href="/products" className="hover:text-electric">Products</Link></li>
            <li><Link href="/about" className="hover:text-electric">About Us</Link></li>
            <li><Link href="/testimonials" className="hover:text-electric">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-electric shrink-0" /> {BUSINESS.address}</li>
            <li className="flex gap-2"><Phone size={16} className="text-electric" /> {BUSINESS.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="text-electric" /> {BUSINESS.email}</li>
            <li className="flex gap-2"><Clock size={16} className="text-electric" /> {BUSINESS.hours}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Get Directions</h4>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}