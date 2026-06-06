"use client";
import { use } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/features/products/data";
import { formatCurrency } from "@/utils/formatter";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-16 text-center text-muted">
          Product not found. <Link href="/catalogue" className="text-primary underline">Back to catalogue</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link href="/catalogue" className="text-sm text-muted hover:text-text">&larr; Back to catalogue</Link>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text">{product.name}</h1>
            <p className="text-muted">by {product.provider}</p>
          </div>
          <Badge variant="info">{product.category}</Badge>
        </div>
        <p className="mt-6 text-text">{product.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-xl font-semibold text-text">
            {product.price === 0 ? "Free" : `${formatCurrency(product.price)}/mo`}
          </span>
          <Button>Try Demo</Button>
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>
    </>
  );
}