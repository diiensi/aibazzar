import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import { SellerProductCard } from "@/features/dashboard/SellerProductCard";
import { CustomersTable } from "@/features/dashboard/CustomersTable";
import { SELLER_PRODUCTS } from "@/features/dashboard/products.data";

export default function AddProductsPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text">All AI Products</h2>
          <Button size="sm">Add AI Products</Button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SELLER_PRODUCTS.map((p) => <SellerProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted">Showing 1-20 of 100 AI Products</p>
          <Pagination pages={3} current={1} />
        </div>
      </Card>

      <CustomersTable />
    </div>
  );
}