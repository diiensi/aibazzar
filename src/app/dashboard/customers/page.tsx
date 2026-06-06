import { CustomerStatCards } from "@/features/dashboard/CustomerStatCards";
import { RecentPurchaseTable } from "@/features/dashboard/RecentPurchaseTable";
import { ReportCard } from "@/features/dashboard/ReportCard";
import { RightPanel } from "@/features/dashboard/RightPanel";

export default function CustomersPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <CustomerStatCards />
      <RecentPurchaseTable />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <ReportCard />
        <RightPanel />
      </div>
    </div>
  );
}