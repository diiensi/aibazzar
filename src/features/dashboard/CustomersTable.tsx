import { Eye, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Pagination } from "@/components/ui/Pagination";
import { DropdownButton } from "@/components/ui/DropdownButton";
import { CUSTOMERS } from "@/features/dashboard/data";

export function CustomersTable() {
  return (
    <Card className="overflow-x-auto">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-text">Customers Directory</h2>
        <DropdownButton label="All Category" />
      </div>

      <table className="mt-4 w-full min-w-[860px] text-left text-sm">
        <thead className="text-muted">
          <tr className="border-b border-slate-200">
            <Th>Total AI Products</Th><Th>Profession</Th><Th>AI Product</Th><Th>Purchase</Th><Th>Total Spent</Th><Th>Last Orders</Th><Th>Status</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {CUSTOMERS.map((c, i) => (
            <tr key={i} className="border-b border-slate-100">
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={c.name} size={28} />
                  <div><p className="font-medium text-text">{c.name}</p><p className="text-xs text-muted">Customer ID: {c.id}</p></div>
                </div>
              </Td>
              <Td>{c.profession}</Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-surface text-xs">{c.product[0]}</div>
                  {c.product}
                </div>
              </Td>
              <Td>{c.plan}</Td>
              <Td>${c.spent.toLocaleString()}</Td>
              <Td>{c.lastOrder}</Td>
              <Td><Badge variant="info">{c.status}</Badge></Td>
              <Td><div className="flex gap-2 text-muted"><Eye className="h-4 w-4" /><Trash2 className="h-4 w-4" /></div></Td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted">Showing 1-20 of 1,234 Customer</p>
        <Pagination pages={3} current={1} />
      </div>
    </Card>
  );
}

function Th({ children }: { children: React.ReactNode }) { return <th className="pb-2 pr-4 font-medium">{children}</th>; }
function Td({ children }: { children: React.ReactNode }) { return <td className="py-3 pr-4 align-middle text-text">{children}</td>; }