import Link from "next/link";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/utils/formatter";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalogue/${product.id}`}>
      <Card className="h-full transition hover:shadow-md">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-text">{product.name}</h3>
            <p className="text-xs text-muted">by {product.provider}</p>
          </div>
          <Badge variant="info">{product.category}</Badge>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-text">{product.rating}</span>
            <span className="text-muted">({product.reviews})</span>
          </div>
          <span className="text-sm font-semibold text-text">
            {product.price === 0 ? "Free" : `${formatCurrency(product.price)}/mo`}
          </span>
        </div>
      </Card>
    </Link>
  );
}