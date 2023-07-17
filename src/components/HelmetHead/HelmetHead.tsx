import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePostStore from '../../lib/hook/store/usePostStore';

const HelmetHead = () => {
  const { content, imageUrl } = usePostStore();

  return (
    <Helmet>
      <meta name="description" content={content} />
      <meta name="og:description" content={content} />
      <meta name="og:image" content={imageUrl ? imageUrl : '/Hamduck.jpeg'} />
    </Helmet>
  );
};

export default HelmetHead;
