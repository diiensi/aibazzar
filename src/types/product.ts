export type ProductCategory =
  | "AI Agents" | "Chatbots" | "Image Tools" | "Developer Tools" | "Automation";

export type PricingModel = "Free" | "Subscription" | "One-time" | "Usage-based";

export interface Product {
  id: string;
  name: string;
  provider: string;
  category: ProductCategory;
  description: string;
  price: number;          // 0 = free
  pricing: PricingModel;
  rating: number;         // 0–5
  reviews: number;
}