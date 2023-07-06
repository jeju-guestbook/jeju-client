import React from 'react';
import AddPostInput from './AddPost.style';
import usePostStore from '../../lib/hook/store/usePostStore';

const AddPost = () => {
  const { imageUrl, setImageFile, setImageUrl } = usePostStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e && e.target.files && e.target.files[0];

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

  return (
    <AddPostInput
      type="file"
      accept="image/*"
      value={imageUrl}
      onChange={onChange}
    />
  );
};

export default AddPost;
