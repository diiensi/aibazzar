import type { ID, AccountType } from "./common";
export interface User {
  id: ID;
  email: string;
  username: string;
  role: AccountType;
  displayName?: string;
  avatar?: string;
  country?: string;
}
