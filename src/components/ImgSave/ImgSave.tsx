import React from 'react';
import { ImgSaveA } from './ImgSave.style';
import usePostStore from '../../lib/hook/store/usePostStore';

const ImgSave = () => {
  const { imageUrl, imageFile } = usePostStore();

  return (
    <ImgSaveA href={imageUrl} download={imageFile?.name}>
      저장하기
    </ImgSaveA>
  );
};

export default ImgSave;
