import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePostStore from '../../lib/hook/store/usePostStore';

const HelmetHead = () => {
  const { content } = usePostStore();
  return (
    <Helmet>
      <meta name="description" content={content} />
      <meta name="og:description" content={content} />
    </Helmet>
  );
};

export default HelmetHead;
