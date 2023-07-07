import React, { useEffect } from 'react';
import useLandingStore from '../../lib/hook/store/useLandingStore';
import { LandingPopupDiv } from './LandingPopup.style';
import { useLocation } from 'react-router-dom';

const LandingPopup = () => {
  const { isLanding, setIsLanding } = useLandingStore();
  const location = useLocation();
  const onAniEnd = () => {
    setIsLanding(false);
  };

  return (
    <>
      {isLanding && location.pathname === '/' && (
        <LandingPopupDiv
          className="LandingPopupWrap"
          onAnimationEnd={onAniEnd}
        />
      )}
    </>
  );
};

export default LandingPopup;
