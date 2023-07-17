import React, { useEffect } from 'react';
import { KakaoShareA } from './KakaoShare.style';

interface Props {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const KakaoShare = ({ url, title, description, imageUrl }: Props) => {
  useEffect(() => {
    if (window.Kakao) {
      console.log(
        {
          title,
          description,
          imageUrl,
          url,
        },
        '카카오 공유'
      );

      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl:
            imageUrl?.includes('base64') || !imageUrl
              ? 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png'
              : imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        // itemContent: {
        //   profileText: 'Kakao',
        //   profileImageUrl:
        //     'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        //   titleImageUrl:
        //     'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        //   titleImageText: 'Cheese cake',
        //   titleImageCategory: 'Cake',
        //   items: [
        //     {
        //       item: 'Cake1',
        //       itemOp: '1000원',
        //     },
        //     {
        //       item: 'Cake2',
        //       itemOp: '2000원',
        //     },
        //     {
        //       item: 'Cake3',
        //       itemOp: '3000원',
        //     },
        //     {
        //       item: 'Cake4',
        //       itemOp: '4000원',
        //     },
        //     {
        //       item: 'Cake5',
        //       itemOp: '5000원',
        //     },
        //   ],
        //   sum: 'Total',
        //   sumOp: '15000원',
        // },
        // social: {
        //   likeCount: 10,
        //   commentCount: 20,
        //   sharedCount: 30,
        // },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
          // {
          //   title: '앱으로 이동',
          //   link: {
          //     mobileWebUrl: 'https://developers.kakao.com',
          //     webUrl: 'https://developers.kakao.com',
          //   },
          // },
        ],
      });
    }
  }, []);

  return (
    <KakaoShareA id="kakaotalk-sharing-btn" href="javascript:;">
      <img src="/kakaoIcon.png" alt="카카오톡 공유 보내기 버튼" />
    </KakaoShareA>
  );
};

export default KakaoShare;
