import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  { id: "p1", name: "ChatFlow Pro", provider: "Nimbus AI", category: "Chatbots", description: "Drop-in conversational assistant for support teams.", price: 49, pricing: "Subscription", rating: 4.8, reviews: 1280 },
  { id: "p2", name: "VisionForge", provider: "PixelWorks", category: "Image Tools", description: "Generate and edit product imagery from text prompts.", price: 29, pricing: "Usage-based", rating: 4.6, reviews: 842 },
  { id: "p3", name: "AgentDeck", provider: "Loop Labs", category: "AI Agents", description: "Build and deploy autonomous task agents in minutes.", price: 0, pricing: "Free", rating: 4.4, reviews: 510 },
  { id: "p4", name: "CodePilot X", provider: "DevStream", category: "Developer Tools", description: "AI pair-programmer with repo-aware completions.", price: 19, pricing: "Subscription", rating: 4.9, reviews: 2310 },
  { id: "p5", name: "FlowBot", provider: "Cogni", category: "Automation", description: "No-code automation across 200+ apps with AI steps.", price: 99, pricing: "One-time", rating: 4.3, reviews: 367 },
  { id: "p6", name: "SupportGenie", provider: "HelpStack", category: "Chatbots", description: "Resolve tickets automatically with a trained agent.", price: 39, pricing: "Subscription", rating: 4.5, reviews: 690 },
  { id: "p7", name: "RenderMind", provider: "PixelWorks", category: "Image Tools", description: "Batch image upscaling and background removal.", price: 0, pricing: "Free", rating: 4.2, reviews: 222 },
  { id: "p8", name: "AutoQA", provider: "DevStream", category: "Developer Tools", description: "Generate and run test suites from your codebase.", price: 59, pricing: "Usage-based", rating: 4.7, reviews: 980 },
];

export const CATEGORIES: Product["category"][] = [
  "AI Agents", "Chatbots", "Image Tools", "Developer Tools", "Automation",
];