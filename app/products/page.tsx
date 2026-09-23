"use client";
import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["All", "Cameras", "DVRs", "Laptops", "Phones", "Accessories"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="container-x py-20">
      <div className="text-center mb-12">
        <h1 className="section-title">Our Products</h1>
        <p className="section-sub">Quality gadgets at honest prices — all with warranty.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filter === c ? "bg-electric text-white shadow-lg" : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-electric"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}