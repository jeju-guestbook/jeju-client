import { create } from 'zustand';

interface KeywordSearchStore {
  keywordSearchData?: LocalKeywordSearchResponse;
  setKeywordSearchData: (value?: LocalKeywordSearchResponse) => void;
}

const useKeywordSearchStore = create<KeywordSearchStore>((set) => ({
  setKeywordSearchData: (value?: LocalKeywordSearchResponse) =>
    set((state) => ({
      ...state,
      keywordSearchData: value,
    })),
}));

export default useKeywordSearchStore;
