import React from 'react';
import { KakaoShareButton } from './KakaoShare.style';

const KakaoShare = () => {
  const onClickKakaoShare = () => {
    console.log(window.Kakao, 'window.Kakao');

    if (window.Kakao) {
      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: document.title,
          description: `제주도의 푸르른 풍경 속에서 눈에 띄는 감귤 나무들이 햇볕에 반짝이며
          농장을 수놓습니다. 나무 가지에 매달린 풍성한 감귤들은 탱글탱글하게 ...`,
          imageUrl: `${window.location.origin}/test.jpeg`,
          link: {
            mobileWebUrl:
              'https://creative-empanada-b8c6f1.netlify.app/createcard/1',
            webUrl: 'https://creative-empanada-b8c6f1.netlify.app/createcard/1',
          },
        },
      });
    }
  };

  return <KakaoShareButton onClick={onClickKakaoShare}></KakaoShareButton>;
};

export default KakaoShare;
