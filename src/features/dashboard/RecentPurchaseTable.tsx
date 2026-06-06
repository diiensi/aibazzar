import { Eye, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Pagination } from "@/components/ui/Pagination";
import { DropdownButton } from "@/components/ui/DropdownButton";
import { PURCHASES } from "@/features/dashboard/data";

export function RecentPurchaseTable() {
  return (
    <Card className="overflow-x-auto">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-text">Recent Purchase</h2>
        <div className="flex gap-2">
          <DropdownButton label="All Status" active />
          <DropdownButton label="Last 30 days" />
        </div>
      </div>

      <table className="mt-4 w-full min-w-[860px] text-left text-sm">
        <thead className="text-muted">
          <tr className="border-b border-slate-200">
            <Th>Total AI Products</Th><Th>Customer</Th><Th>AI Product</Th><Th>Purchase</Th><Th>Total</Th><Th>Payment</Th><Th>Status</Th><Th>Date</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {PURCHASES.map((r, i) => (
            <tr key={i} className="border-b border-slate-100">
              <Td><span className="text-primary">{r.orderId}</span></Td>
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={r.customer} size={28} />
                  <div><p className="font-medium text-text">{r.customer}</p><p className="text-xs text-muted">{r.email}</p></div>
                </div>
              </Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-surface text-xs">{r.product[0]}</div>
                  <div><p className="text-text">{r.product}</p><p className="text-xs text-muted">{r.productSub}</p></div>
                </div>
              </Td>
              <Td>{r.plan}</Td>
              <Td>{r.total.toLocaleString()}</Td>
              <Td><Badge variant="success">{r.payment}</Badge></Td>
              <Td><Badge variant={r.status === "Active" ? "info" : "warning"}>{r.status}</Badge></Td>
              <Td>{r.date}</Td>
              <Td><div className="flex gap-2 text-muted"><Eye className="h-4 w-4" /><Trash2 className="h-4 w-4" /></div></Td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted">Showing 1-20 of 1,234 orders</p>
        <Pagination pages={3} current={1} />
      </div>
    </Card>
  );
}

function Th({ children }: { children: React.ReactNode }) { return <th className="pb-2 pr-4 font-medium">{children}</th>; }
function Td({ children }: { children: React.ReactNode }) { return <td className="py-3 pr-4 align-middle text-text">{children}</td>; }