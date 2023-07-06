import { create } from 'zustand';

interface LoaderStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) =>
    set((state) => ({
      ...state,
      isLoading: value,
    })),
}));

export default useLoaderStore;
