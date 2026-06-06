export interface SellerProduct {
  id: string;
  name: string;
  tags: string[];
  price: number;          // per month, USD
  cover: string;          // tailwind gradient classes for the cover band
}

export const SELLER_PRODUCTS: SellerProduct[] = [
  { id: "claude-code",  name: "Claude Code",  tags: ["Coding agent", "Shopping agent"],   price: 146, cover: "bg-gradient-to-br from-orange-100 to-rose-100" },
  { id: "gemini-image", name: "Gemini Image", tags: ["Image create", "Google tool"],      price: 214, cover: "bg-gradient-to-br from-slate-900 to-blue-900" },
  { id: "rocket-new",   name: "Rocket.new",   tags: ["Coding agent", "Healthcare agent"], price: 120, cover: "bg-gradient-to-br from-sky-900 to-slate-800" },
  { id: "sarvam-edge",  name: "Sarvam Edge",  tags: ["Coding agent", "Shopping agent"],   price: 146, cover: "bg-gradient-to-br from-indigo-400 to-orange-200" },
];