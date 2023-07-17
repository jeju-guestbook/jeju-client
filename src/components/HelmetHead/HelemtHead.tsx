import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const HelemtHead = () => {
  useEffect(() => {
    window.Kakao.init(import.meta.env.VITE_KAKAO_SDK_KEY);
  }, []);

  return (
    <Helmet>
      <meta name="description" content="" />
      <script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${
          import.meta.env.VITE_KAKAO_SDK_KEY
        }`}
      ></script>

      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
        integrity={import.meta.env.VITE_KAKAO_INTEGRITY}
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  );
};

export default HelemtHead;
