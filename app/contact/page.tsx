"use client";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BUSINESS } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error("Please fill all required fields");
    setLoading(true);
    const stored = JSON.parse(localStorage.getItem("queries") || "[]");
    stored.push({ ...form, type: "contact", date: new Date().toISOString() });
    localStorage.setItem("queries", JSON.stringify(stored));
    trackEvent("contact_submit");
    setTimeout(() => {
      toast.success("Message sent! We'll contact you soon.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setLoading(false);
    }, 800);
  };

  const input = "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-electric outline-none";

  return (
    <div className="container-x py-20">
      <div className="text-center mb-14">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-sub">We'd love to hear from you. Reach out any way you like.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <MapPin className="text-electric mb-3" />
          <h3 className="font-bold mb-1 text-navy dark:text-white">Address</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{BUSINESS.address}</p>
        </div>
        <div className="card">
          <Phone className="text-electric mb-3" />
          <h3 className="font-bold mb-1 text-navy dark:text-white">Phone</h3>
          <a href={`tel:${BUSINESS.phone}`} className="text-sm text-electric">{BUSINESS.phone}</a>
        </div>
        <div className="card">
          <Mail className="text-electric mb-3" />
          <h3 className="font-bold mb-1 text-navy dark:text-white">Email</h3>
          <a href={`mailto:${BUSINESS.email}`} className="text-sm text-electric">{BUSINESS.email}</a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={submit} className="card">
          <h3 className="text-xl font-bold text-navy dark:text-white mb-5">Send a Message</h3>
          <div className="space-y-4">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name *" className={input} />
            <div className="grid grid-cols-2 gap-3">
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email *" className={input} />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className={input} />
            </div>
            <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className={input} />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Your message *" className={`${input} resize-none`} />
            <button type="submit" disabled={loading} className="btn w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="card !p-0 overflow-hidden">
          <iframe src={BUSINESS.mapEmbed} className="w-full h-[400px] lg:h-full" loading="lazy" title="Location map" />
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("directions_click")}
          className="btn"
        >
          <Navigation size={16} /> Get Directions
        </a>
      </div>
    </div>
  );
}