import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { StatCard } from "@/features/dashboard/StatCard";
import { RevenueChart } from "@/features/dashboard/RevenueChart";
import { STATS, PURCHASES, CUSTOMERS } from "@/features/dashboard/data";
import { formatCurrency } from "@/utils/formatter";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-text">Dashboard</h1>

      {/* Stat cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StatCard label="Total Revenue · Last 7 days" value={formatCurrency(STATS.revenue.value)} sub="Sales" deltaPct={STATS.revenue.deltaPct} />
        <StatCard label="Total Purchase · Last 7 days" value={`${(STATS.purchases.value / 1000).toFixed(1)}K`} sub="Purchase" deltaPct={STATS.purchases.deltaPct} />
        <StatCard label="Active Customers · Last 7 days" value={`${STATS.activeCustomers.active}`} sub={`${STATS.activeCustomers.inactive} inactive`} deltaPct={STATS.activeCustomers.deltaPct} />
      </div>

      {/* Recent purchases */}
      <Card className="mt-6 overflow-x-auto">
        <h2 className="mb-4 font-semibold text-text">Recent Purchase</h2>
        <table className="w-full text-left text-sm">
          <thead className="text-muted">
            <tr className="border-b border-slate-200">
              <Th>Order</Th><Th>Customer</Th><Th>Product</Th><Th>Plan</Th><Th>Total</Th><Th>Status</Th><Th>Date</Th>
            </tr>
          </thead>
          <tbody>
            {PURCHASES.map((r) => (
              <tr key={r.orderId} className="border-b border-slate-100">
                <Td>{r.orderId}</Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <Avatar name={r.customer} size={28} />
                    <div>
                      <p className="font-medium text-text">{r.customer}</p>
                      <p className="text-xs text-muted">{r.email}</p>
                    </div>
                  </div>
                </Td>
                <Td>{r.product}</Td>
                <Td>{r.plan}</Td>
                <Td>{formatCurrency(r.total)}</Td>
                <Td><Badge variant={r.status === "Active" ? "success" : "warning"}>{r.status}</Badge></Td>
                <Td>{r.date}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Weekly report */}
      <Card className="mt-6">
        <h2 className="mb-4 font-semibold text-text">Report for this week</h2>
        <RevenueChart />
      </Card>

      {/* Customers directory */}
      <Card className="mt-6 overflow-x-auto">
        <h2 className="mb-4 font-semibold text-text">Customers Directory</h2>
        <table className="w-full text-left text-sm">
          <thead className="text-muted">
            <tr className="border-b border-slate-200">
              <Th>Customer</Th><Th>Profession</Th><Th>Product</Th><Th>Plan</Th><Th>Total Spent</Th><Th>Last Order</Th><Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.id} className="border-b border-slate-100">
                <Td>
                  <div className="flex items-center gap-2">
                    <Avatar name={c.name} size={28} />
                    <div>
                      <p className="font-medium text-text">{c.name}</p>
                      <p className="text-xs text-muted">{c.id}</p>
                    </div>
                  </div>
                </Td>
                <Td>{c.profession}</Td>
                <Td>{c.product}</Td>
                <Td>{c.plan}</Td>
                <Td>{formatCurrency(c.spent)}</Td>
                <Td>{c.lastOrder}</Td>
                <Td><Badge variant={c.status === "Active" ? "success" : "default"}>{c.status}</Badge></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="pb-2 pr-4 font-medium">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="py-3 pr-4 align-middle text-text">{children}</td>;
}