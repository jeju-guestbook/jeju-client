import React from 'react';
import SharingIcon from '../icons/SharingIcon';
import { NativeShareButton } from './NativeShare.style';

const NativeShare = () => {
  return (
    <NativeShareButton
      onClick={() => {
        window.navigator.share({
          title: document.title,
          url: window.location.href,
        });
      }}
    >
      <SharingIcon />
    </NativeShareButton>
  );
};

export default NativeShare;
