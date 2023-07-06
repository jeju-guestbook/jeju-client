import React, { useEffect } from 'react';
import useLandingStore from '../../lib/hook/store/useLandingStore';

const LandingPopup = () => {
  const { isLanding } = useLandingStore();

  useEffect(() => {}, []);

  return <>{isLanding && <div className="LandingPopupWrap" />}</>;
};

export default LandingPopup;
