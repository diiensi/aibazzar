import { MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { STATS } from "@/features/dashboard/data";

export function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHead label="Total Revenue" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{STATS.revenue.display}</span>
          <span className="text-sm text-text">Sales <span className="text-success">↑ {STATS.revenue.deltaPct}%</span></span>
        </div>
        <p className="mt-1 text-xs text-muted">Previous 7days ({STATS.revenue.prev})</p>
      </Card>

      <Card>
        <CardHead label="Total Purchase" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{STATS.purchases.display}</span>
          <span className="text-sm text-text">Purchase <span className="text-success">↑ {STATS.purchases.deltaPct}%</span></span>
        </div>
        <p className="mt-1 text-xs text-muted">Previous 7days ({STATS.purchases.prev})</p>
      </Card>

      <Card>
        <CardHead label="Active Customers" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted">Active</p>
            <p className="text-xl font-bold text-primary">
              {STATS.customers.active} <span className="text-xs font-normal text-muted">user {STATS.customers.activeUsers}</span>
            </p>
          </div>
          <div className="border-l border-slate-200 pl-3">
            <p className="text-xs text-muted">Unactive</p>
            <p className="text-xl font-bold text-danger">
              {STATS.customers.inactive} <span className="text-xs font-normal text-danger">↓ {Math.abs(STATS.customers.inactiveDeltaPct)}%</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function CardHead({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-text">{label}</p>
      <MoreVertical className="h-4 w-4 text-muted" />
    </div>
  );
}