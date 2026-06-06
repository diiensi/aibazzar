"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { WEEKLY } from "@/features/dashboard/data";

export function RevenueChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={WEEKLY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} stroke="#64748b" />
          <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="#64748b" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fill="url(#fill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}