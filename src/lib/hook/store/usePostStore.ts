import { create } from 'zustand';

interface PostStore {
  imageUrl: string;
  setImageUrl: (value: string) => void;
  imageFile: File | null;
  setImageFile: (value: File) => void;
  locationData?: {
    x: number;
    y: number;
  };
  setLocationData: (value: { x: number; y: number }) => void;
  date: string;
  setDate: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
}

const usePostStore = create<PostStore>((set) => ({
  imageUrl: '',
  setImageUrl: (value: string) =>
    set((state) => ({
      ...state,
      imageUrl: value,
    })),
  imageFile: null,
  setImageFile: (value: File) =>
    set((state) => ({
      ...state,
      imageFile: value,
    })),
  date: '',
  setDate: (value: string) =>
    set((state) => ({
      ...state,
      date: value,
    })),

  setLocationData: (value: { x: number; y: number }) =>
    set((state) => ({
      ...state,
      location: value,
    })),
  content: '',
  setContent: (value: string) =>
    set((state) => ({
      ...state,
      content: value,
    })),
}));

export default usePostStore;
