import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AccountType = "buyer" | "seller" | null;

interface AuthState {
  email: string;
  username: string;
  accountType: AccountType;
}

const initialState: AuthState = { email: "", username: "", accountType: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (s, a: PayloadAction<string>) => { s.email = a.payload; },
    setUsername: (s, a: PayloadAction<string>) => { s.username = a.payload; },
    setAccountType: (s, a: PayloadAction<AccountType>) => { s.accountType = a.payload; },
  },
});

export const { setEmail, setUsername, setAccountType } = authSlice.actions;
export default authSlice.reducer;