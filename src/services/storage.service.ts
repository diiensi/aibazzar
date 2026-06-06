export const storage = {
  get: (k: string) => (typeof window !== "undefined" ? localStorage.getItem(k) : null),
  set: (k: string, v: string) => { if (typeof window !== "undefined") localStorage.setItem(k, v); },
};