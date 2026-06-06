export const STATS = {
  revenue: { value: 350000, deltaPct: 10.4, prev: 235 },
  purchases: { value: 10700, deltaPct: 14.6, prev: 7600 },
  activeCustomers: { active: 509, inactive: 94, deltaPct: 14.4 },
};

export const WEEKLY = [
  { day: "Sun", value: 18 }, { day: "Mon", value: 22 }, { day: "Tue", value: 30 },
  { day: "Wed", value: 14 }, { day: "Thu", value: 38 }, { day: "Fri", value: 28 },
  { day: "Sat", value: 34 },
];

export interface PurchaseRow {
  orderId: string; customer: string; email: string; product: string;
  plan: "Monthly" | "Yearly" | "One-Time"; total: number;
  status: "Active" | "Pending"; date: string;
}

export const PURCHASES: PurchaseRow[] = [
  { orderId: "#ORD-2345", customer: "Rajesh Kumar", email: "rajesh.k@gmail.com", product: "AI Shop Agent", plan: "Monthly", total: 4998, status: "Active", date: "Oct 21, 2025" },
  { orderId: "#ORD-2346", customer: "Rajesh Kumar", email: "rajesh.k@gmail.com", product: "AI Shop Agent", plan: "Yearly", total: 4998, status: "Pending", date: "Oct 21, 2025" },
  { orderId: "#ORD-2347", customer: "Rajesh Kumar", email: "rajesh.k@gmail.com", product: "AI Shop Agent", plan: "One-Time", total: 4998, status: "Pending", date: "Oct 21, 2025" },
];

export interface CustomerRow {
  name: string; id: string; profession: string; product: string;
  plan: string; spent: number; lastOrder: string; status: "Active" | "Inactive";
}

export const CUSTOMERS: CustomerRow[] = [
  { name: "Rajesh Kumar", id: "#CUST-001", profession: "Marketing", product: "Claude Code", plan: "Monthly", spent: 24960, lastOrder: "Oct 21, 2024", status: "Active" },
  { name: "Rajesh Kumar", id: "#CUST-002", profession: "Founder & CEO", product: "Gemini Image", plan: "Monthly", spent: 24960, lastOrder: "Oct 21, 2024", status: "Active" },
];