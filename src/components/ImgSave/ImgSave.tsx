import React from 'react';
import { ImgSaveA } from './ImgSave.style';
import SaveBtn from '../icons/SaveBtn';

interface Props {
  imageUrl?: string;
  imageFile: File | null;
}

const ImgSave = ({ imageUrl, imageFile }: Props) => {
  return (
    <ImgSaveA href={imageUrl || ''} download={imageFile?.name}>
      <SaveBtn />
      저장하기
    </ImgSaveA>
  );
};

export default ImgSave;
