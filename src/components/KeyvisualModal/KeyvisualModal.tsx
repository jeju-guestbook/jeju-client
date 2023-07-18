import React, { useEffect } from 'react';
import useLandingStore from '../../lib/hook/store/useLandingStore';
import { KeyvisualModalDiv } from './KeyvisualModal.style';
import { useLocation } from 'react-router-dom';
import useOnceEffect from '../../lib/hook/useOnceEffect';

const KeyvisualModal = () => {
  const { isLanding, setIsLanding } = useLandingStore();
  const location = useLocation();
  const onAniEnd = () => {
    setIsLanding(false);
  };

  useOnceEffect(() => {
    if (location.pathname !== '/') {
      setIsLanding(false);
    }
  }, [location]);

  return (
    <>
      {isLanding && location.pathname === '/' && (
        <KeyvisualModalDiv
          className="KeyvisualModalWrap"
          onAnimationEnd={onAniEnd}
        />
      )}
    </>
  );
};

export default KeyvisualModal;
