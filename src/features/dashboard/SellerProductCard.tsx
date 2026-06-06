import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { SellerProduct } from "@/features/dashboard/products.data";
import { cn } from "@/utils/helpers";

export function SellerProductCard({ product }: { product: SellerProduct }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* cover */}
      <div className={cn("relative flex h-36 items-center justify-center", product.cover)}>
        <span className="text-xl font-bold text-white drop-shadow">{product.name}</span>
        <button className="absolute right-2 top-2 rounded-md bg-white/90 p-1 text-text">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      {/* body */}
      <div className="p-4">
        <h3 className="font-semibold text-text">{product.name}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.tags.map((t) => <Badge key={t} variant="info">{t}</Badge>)}
        </div>

        <p className="mt-3 text-xs text-muted">Pricing</p>
        <p className="text-xl font-bold text-primary">
          ${product.price} <span className="text-sm font-normal text-muted">per month</span>
        </p>

        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1">Try Now</Button>
          <Button size="sm" variant="outline" className="flex-1">Insights</Button>
        </div>
      </div>
    </div>
  );
}