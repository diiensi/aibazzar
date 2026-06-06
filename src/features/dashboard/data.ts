export const STATS = {
  revenue: { display: "$350K", prev: "$235", deltaPct: 10.4 },
  purchases: { display: "10.7K", prev: "7.6k", deltaPct: 14.4 },
  customers: { active: 509, activeUsers: 204, inactive: 94, inactiveDeltaPct: -14.4 },
};

export const REPORT_METRICS = [
  { label: "Customers", value: "52k", active: true },
  { label: "Total AI Products", value: "3.5k" },
  { label: "Stock AI Products", value: "2.5k" },
  { label: "Out of Stock", value: "0.5k" },
  { label: "Revenue", value: "250k" },
];

export const WEEKLY = [
  { day: "Sun", value: 14 }, { day: "Mon", value: 15 }, { day: "Tue", value: 28 },
  { day: "Wed", value: 14 }, { day: "Thu", value: 30 }, { day: "Fri", value: 22 },
  { day: "Sat", value: 30 },
];

export const USERS_PER_MINUTE = [40,60,30,80,50,70,45,90,55,65,35,75,50,85,40,60,70,45,80,55,65,50,75,60];

export const SALES_BY_COUNTRY = { country: "India", value: "30k", deltaPct: 25.8, barPct: 65 };

export interface PurchaseRow {
  orderId: string; customer: string; email: string; product: string; productSub: string;
  plan: "Monthly" | "Yearly" | "One-Time"; total: number; payment: "Paid";
  status: "Active" | "Processing"; date: string;
}
export const PURCHASES: PurchaseRow[] = [
  { orderId:"#AIORD-2345", customer:"Rajesh Kumar", email:"rajesh.k@gmail.com", product:"AI Shop Agent", productSub:"Chatgpt", plan:"Monthly", total:4998, payment:"Paid", status:"Active", date:"Oct 21,2025" },
  { orderId:"#AIORD-2346", customer:"Rajesh Kumar", email:"rajesh.k@gmail.com", product:"AI Shop Agent", productSub:"Chatgpt", plan:"Yearly", total:4998, payment:"Paid", status:"Processing", date:"Oct 21,2025" },
  { orderId:"#AIORD-2347", customer:"Rajesh Kumar", email:"rajesh.k@gmail.com", product:"AI Shop Agent", productSub:"Chatgpt", plan:"One-Time", total:4998, payment:"Paid", status:"Processing", date:"Oct 21,2025" },
];

export interface CustomerRow {
  name: string; id: string; profession: string; product: string;
  plan: string; spent: number; lastOrder: string; status: "Active" | "Inactive";
}
export const CUSTOMERS: CustomerRow[] = [
  { name:"Rajesh Kumar", id:"#CUST-001", profession:"Marketing", product:"Claude Code", plan:"Monthly", spent:24560, lastOrder:"Oct 21,2024", status:"Active" },
  { name:"Rajesh Kumar", id:"#CUST-001", profession:"Founder & CEO", product:"Gemini Image", plan:"Monthly", spent:24560, lastOrder:"Oct 21,2024", status:"Active" },
];