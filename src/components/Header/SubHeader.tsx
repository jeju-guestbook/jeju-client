import React from 'react';
import { SubHeaderContainer, SubHeaderPre } from './SubHeader.style';

const SubHeader = () => {
  return (
    <SubHeaderContainer>
      <img src="/Dori.png" alt="Dori" />
      <SubHeaderPre>
        제주도의 어떤 지역이 궁금하세요?{'\n'}
        지도 내 스팟을 눌러보아요
      </SubHeaderPre>
    </SubHeaderContainer>
  );
};

export default SubHeader;
