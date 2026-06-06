import { StatCards } from "@/features/dashboard/StatCards";
import { RecentPurchaseTable } from "@/features/dashboard/RecentPurchaseTable";
import { ReportCard } from "@/features/dashboard/ReportCard";
import { RightPanel } from "@/features/dashboard/RightPanel";
import { CustomersTable } from "@/features/dashboard/CustomersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <StatCards />
      <RecentPurchaseTable />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <ReportCard />
        <RightPanel />
      </div>
      <CustomersTable />
    </div>
  );
}