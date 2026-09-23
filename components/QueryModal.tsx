"use client";
import { useState } from "react";
import { X, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { SERVICES } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import Confetti from "react-confetti";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(5, "Please add a message"),
  honeypot: z.string().max(0).optional(),
});
type FormData = z.infer<typeof schema>;

export default function QueryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // ✅ MOVED INSIDE
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setLoading(true);
    try {
      const stored = JSON.parse(localStorage.getItem("queries") || "[]");
      stored.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem("queries", JSON.stringify(stored));

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, data as any, publicKey);
      }

      trackEvent("query_submit", { service: data.service });
      toast.success("Query sent! We'll contact you shortly.");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
      reset();
      onClose();
    } catch (e) {
      console.error(e);
      toast.error("Failed to send. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* ✅ Confetti moved INSIDE the JSX, not as a stray expression */}
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 1000}
          height={typeof window !== "undefined" ? window.innerHeight : 800}
          recycle={false}
          numberOfPieces={250}
          colors={["#06b6d4", "#8b5cf6", "#3b82f6", "#67e8f9", "#c4b5fd"]}
        />
      )}

      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-slate-900/95 backdrop-blur-xl rounded-3xl max-w-lg w-full p-8 relative animate-slide-up border border-cyan-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 text-slate-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-bold mb-2 text-white">
            Get a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Free Quote
            </span>
          </h2>
          <p className="text-slate-400 mb-6 text-sm">
            Fill this form and we'll reach out within 30 minutes.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              {...register("honeypot")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <select
                {...register("service")}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white focus:border-cyan-500 outline-none transition"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 outline-none resize-none transition"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" disabled={loading} className="btn w-full">
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Query
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}