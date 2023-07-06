import React, { useEffect } from 'react';
import usePostStore from '../../lib/hook/store/usePostStore';
import { AddPostInput, AddPostLabel } from './AddPostFloatBtn.style';
import { useNavigate } from 'react-router-dom';

const AddPostFloatBtn = () => {
  const { imageUrl, imageFile, setImageFile, setImageUrl } = usePostStore();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e && e.target.files && e.target.files[0];

    console.log(e.target.files, 'e.target.files');

    if (!e.target.files || !imgFile) {
      console.error('이미지 파일이 감지되지 않음');
      return undefined;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onload = () => {
      setImageUrl(reader.result as string);
      setImageFile(imgFile);
    };
  };

  useEffect(() => {
    if (imageFile && imageUrl) {
      navigate('/addpostlocation');
    }
  }, [imageUrl, imageFile]);

  return (
    <AddPostLabel>
      <AddPostInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </AddPostLabel>
  );
};

export default AddPostFloatBtn;
