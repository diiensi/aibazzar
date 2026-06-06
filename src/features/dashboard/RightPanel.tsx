import { MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { USERS_PER_MINUTE, SALES_BY_COUNTRY } from "@/features/dashboard/data";

export function RightPanel() {
  return (
    <Card className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">Users in last 30 minutes</p>
        <MoreVertical className="h-4 w-4 text-muted" />
      </div>
      <p className="mt-1 text-3xl font-bold text-text">21.5K</p>

      <p className="mt-4 text-xs text-muted">Users per minute</p>
      <div className="mt-2 flex h-12 items-end gap-1">
        {USERS_PER_MINUTE.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-primary" style={{ height: `${h}%` }} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="font-medium text-text">Sales by Country</p>
        <span className="text-sm text-muted">Sales</span>
      </div>
      <div className="mt-3 rounded-lg bg-slate-100 p-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🇮🇳</span>
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-text">
                {SALES_BY_COUNTRY.value} <span className="font-normal text-muted">{SALES_BY_COUNTRY.country}</span>
              </span>
              <span className="text-success">↑ {SALES_BY_COUNTRY.deltaPct}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-primary" style={{ width: `${SALES_BY_COUNTRY.barPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <Button variant="outline" className="mt-4 w-full">View Insight</Button>
    </Card>
  );
}