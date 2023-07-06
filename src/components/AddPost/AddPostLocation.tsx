import React from 'react';
import { AddPostInputWrapDiv } from './AddPostLocation.style';

const AddPostLocation = () => {
  const [value, setValue] = React.useState('');
  return (
    <AddPostInputWrapDiv>
      <label className="LocationLabel">
        어디로 다녀오셨나요?
        <input
          className="LocationInput"
          type="text"
          placeholder="다녀온 장소 입력하기"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </label>
    </AddPostInputWrapDiv>
  );
};

export default AddPostLocation;
