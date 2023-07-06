import React from 'react';
import { AddPostLocationPageDiv } from './AddPostLocationPage.style';
import LocationInput from '../components/AddPost/LocationInput';

// TODO: 자동완성으로 카카오 지도 API 호출해서 장소 자동완성 구현 필요

const AddPostLocationPage = () => {
  return (
    <AddPostLocationPageDiv>
      <LocationInput />
    </AddPostLocationPageDiv>
  );
};

export default AddPostLocationPage;
