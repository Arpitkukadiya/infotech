"use client";
import { useState } from "react";
import { Star, Send } from "lucide-react";
import toast from "react-hot-toast";
import { BUSINESS } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return toast.error("Please fill all fields");
    setSending(true);

    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    reviews.push({ name, email, rating, message, date: new Date().toISOString() });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    trackEvent("review_submit", { rating });

    toast.success("Thank you! Redirecting to Google Reviews...");
    setTimeout(() => {
      window.open(`https://search.google.com/local/writereview?placeid=${BUSINESS.placeId}`, "_blank");
      setName(""); setEmail(""); setMessage(""); setRating(5); setSending(false);
    }, 1500);
  };

  return (
    <form onSubmit={submit} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
      <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Leave a Review</h3>
      <p className="text-slate-500 text-sm mb-5">Your feedback helps us grow. After submitting, you'll be redirected to Google to post your review.</p>

      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <button type="button" key={n} onClick={() => setRating(n)} aria-label={`${n} stars`}>
            <Star size={28} className={n <= rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
          </button>
        ))}
      </div>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-3 outline-none focus:border-electric" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-3 outline-none focus:border-electric" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Share your experience..." className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4 outline-none focus:border-electric resize-none" />

      <button type="submit" disabled={sending} className="btn w-full">
        {sending ? "Submitting..." : <><Send size={16} /> Submit & Review on Google</>}
      </button>
    </form>
  );
}