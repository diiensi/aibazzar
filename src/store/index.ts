import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api.store";
import authReducer from "./auth.store";
import onboardingReducer from "./onboarding.store";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    onboarding: onboardingReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;