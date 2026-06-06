import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  displayName: string;
  title: string;
  about: string;
  languages: string[];
  skills: string[];
  isTeam: boolean | null;
  portfolioLinks: string[];
}

const initialState: OnboardingState = {
  displayName: "",
  title: "",
  about: "",
  languages: [],
  skills: [],
  isTeam: null,
  portfolioLinks: [],
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    updateProfile: (s, a: PayloadAction<Partial<OnboardingState>>) => { Object.assign(s, a.payload); },
    setIsTeam: (s, a: PayloadAction<boolean>) => { s.isTeam = a.payload; },
    addPortfolioLink: (s, a: PayloadAction<string>) => { s.portfolioLinks.push(a.payload); },
  },
});

export const { updateProfile, setIsTeam, addPortfolioLink } = onboardingSlice.actions;
export default onboardingSlice.reducer;