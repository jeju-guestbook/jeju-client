import React from 'react';
import KakaoMap from '../components/KakaoMap/KakaoMap';
import { MapPageDiv } from './MapPage.style';
import SubHeader from '../components/Header/SubHeader';
import SubFooter from '../components/Footer/SubFooter';

const MapPage = () => {
  return (
    <MapPageDiv>
      <SubHeader />
      <KakaoMap />
      <SubFooter />
    </MapPageDiv>
  );
};

export default MapPage;
