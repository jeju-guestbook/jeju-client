import { create } from 'zustand';
import createCardMockUp from '../../../components/CreateCard/__createCardMockUp__';
import getRandomIdx from '../../utils/getRandomIdx';

interface AITextStore {
  aiText: string;
  setAIText: (value: string) => void;
}

const useAITextStore = create<AITextStore>((set) => ({
  aiText: createCardMockUp.AIText[getRandomIdx(createCardMockUp.AIText)],
  setAIText: (value: string) =>
    set((state) => ({
      ...state,
      aiText: value,
    })),
}));

export default useAITextStore;
