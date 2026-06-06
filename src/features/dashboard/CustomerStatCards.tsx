import { MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function CustomerStatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <Head label="Total Customers" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">2000</span>
          <span className="text-sm text-success">↑ 10.4%</span>
        </div>
        <p className="mt-1 text-xs text-muted">Previous 7days ($235)</p>
      </Card>

      <Card>
        <Head label="Customers Growth" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">76%</span>
          <span className="text-sm text-success">↑ 14.4%</span>
        </div>
        <p className="mt-1 text-xs text-muted">Previous 7days (7.6k)</p>
      </Card>

      <Card>
        <Head label="Customers Metrics" />
        <p className="text-xs text-muted">Last 7 days</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted">New Buyer</p>
            <p className="text-xl font-bold text-primary">509 <span className="text-xs font-normal text-muted">user 204</span></p>
          </div>
          <div className="border-l border-slate-200 pl-3">
            <p className="text-xs text-muted">Renewals</p>
            <p className="text-xl font-bold text-danger">94 <span className="text-xs font-normal text-danger">↓ 14.4%</span></p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Head({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-text">{label}</p>
      <MoreVertical className="h-4 w-4 text-muted" />
    </div>
  );
}