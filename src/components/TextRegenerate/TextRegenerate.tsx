import React from 'react';
import useAITextStore from '../../lib/hook/store/useAITextStore';
import useLoaderStore from '../../lib/hook/store/useLoaderStore';
import createCardMockUp from '../CreateCard/__createCardMockUp__';
import getRandomIdx from '../../lib/utils/getRandomIdx';
import Reload from '../icons/Reload';
import { TextRegenerateButton } from './TextRegenerate.style';

const TextRegenerate = () => {
  const { setAIText } = useAITextStore();
  const { setIsLoading } = useLoaderStore();

  return (
    <TextRegenerateButton
      id="ReloadBtn"
      onClick={() => {
        setIsLoading(true);

        setTimeout(() => {
          setAIText(
            createCardMockUp.AIText[getRandomIdx(createCardMockUp.AIText)]
          );
          setIsLoading(false);
        }, 3000);
      }}
    >
      <Reload />
    </TextRegenerateButton>
  );
};

export default TextRegenerate;
