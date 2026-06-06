"use client";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/layouts/Navbar";
import { SearchInput } from "@/components/ui/SearchInput";
import { Checkbox } from "@/components/ui/Checkbox";
import { ProductCard } from "@/features/products/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/features/products/data";
import { cn } from "@/utils/helpers";

const PRICING = ["Free", "Subscription", "One-time", "Usage-based"] as const;

export default function CataloguePage() {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [pricing, setPricing] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const results = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.provider.toLowerCase().includes(query.toLowerCase());
      const matchesCat = cats.length === 0 || cats.includes(p.category);
      const matchesPricing = pricing.length === 0 || pricing.includes(p.pricing);
      const matchesRating = p.rating >= minRating;
      return matchesQuery && matchesCat && matchesPricing && matchesRating;
    });
  }, [query, cats, pricing, minRating]);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl font-bold text-text">Explore AI Products</h1>
        <p className="mt-1 text-muted">Discover, compare, and try verified AI tools.</p>

        <div className="mt-6 max-w-xl">
          <SearchInput
            placeholder="Search by name, provider, or use case…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside className="space-y-6">
            <FilterGroup title="Category">
              {CATEGORIES.map((c) => (
                <Checkbox key={c} label={c} checked={cats.includes(c)} onChange={() => toggle(cats, setCats, c)} />
              ))}
            </FilterGroup>

            <FilterGroup title="Pricing">
              {PRICING.map((p) => (
                <Checkbox key={p} label={p} checked={pricing.includes(p)} onChange={() => toggle(pricing, setPricing, p)} />
              ))}
            </FilterGroup>

            <FilterGroup title="Minimum rating">
              <div className="flex gap-2">
                {[0, 4, 4.5].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={cn(
                      "rounded-md border px-3 py-1 text-sm",
                      minRating === r ? "border-primary bg-primary/5 text-primary" : "border-slate-300 text-text"
                    )}
                  >
                    {r === 0 ? "Any" : `${r}+`}
                  </button>
                ))}
              </div>
            </FilterGroup>
          </aside>

          {/* Results */}
          <section>
            <p className="mb-4 text-sm text-muted">{results.length} products</p>
            {results.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 p-12 text-center text-muted">
                No products match your filters.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-text">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}