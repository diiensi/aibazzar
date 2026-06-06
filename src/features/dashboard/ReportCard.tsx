"use client";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { WEEKLY, REPORT_METRICS } from "@/features/dashboard/data";
import { cn } from "@/utils/helpers";

export function ReportCard() {
  const [range, setRange] = useState<"This week" | "Last week">("This week");
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-text">Report for this week</h2>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md bg-surface p-0.5 text-sm">
            {(["This week", "Last week"] as const).map((r) => (
              <button key={r} onClick={() => setRange(r)} className={cn("rounded px-3 py-1", range === r ? "bg-white text-text shadow-sm" : "text-muted")}>
                {r}
              </button>
            ))}
          </div>
          <MoreVertical className="h-4 w-4 text-muted" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {REPORT_METRICS.map((m) => (
          <div key={m.label}>
            <p className={cn("text-xl font-bold", m.active ? "text-primary" : "text-text")}>{m.value}</p>
            <p className={cn("text-xs", m.active ? "border-b-2 border-primary pb-1 text-primary" : "text-muted")}>{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={WEEKLY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="rfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} stroke="#64748b" />
            <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="#64748b" tickFormatter={(v) => `${v}k`} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fill="url(#rfill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}