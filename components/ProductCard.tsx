"use client";
import { ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";
import { trackEvent } from "@/lib/analytics";

export default function ProductCard({ product }: { product: any }) {
  const enquire = () => {
    trackEvent("product_enquire", { product: product.name });
    toast.success(`Enquiry sent for ${product.name}`);
    const stored = JSON.parse(localStorage.getItem("queries") || "[]");
    stored.push({ type: "product", product: product.name, date: new Date().toISOString() });
    localStorage.setItem("queries", JSON.stringify(stored));
  };

  return (
    <div className="card !p-0 overflow-hidden group">
      <div className="aspect-square overflow-hidden bg-slate-800 relative">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent uppercase tracking-widest">
          {product.category}
        </span>
        <h3 className="font-bold text-lg mt-1 text-white">{product.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{product.specs}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {product.price}
          </span>
          <button
            onClick={enquire}
            className="btn !py-2 !px-4 text-xs"
          >
            <ShoppingBag size={14} /> Enquire
          </button>
        </div>
      </div>
    </div>
  );
}