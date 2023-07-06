import { create } from 'zustand';

interface LandingStore {
  isLanding: boolean;
  setIsLanding: (value: boolean) => void;
}

const useLandingStore = create<LandingStore>((set) => ({
  isLanding: true,
  setIsLanding: (value: boolean) =>
    set((state) => ({
      ...state,
      isLanding: value,
    })),
}));

export default useLandingStore;
