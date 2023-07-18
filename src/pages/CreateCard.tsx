import CreateCardLayout from '../components/CreateCard/CreateCardLayout';
import * as Style from './CreateCard.style';

import ImgSave from '../components/ImgSave/ImgSave';
import usePostStore from '../lib/hook/store/usePostStore';
import KakaoShare from '../components/KakaoShare/KakaoShare';
import { postText } from '../lib/const/constant';
import { useEffect } from 'react';
import NativeShare from '../components/NativeShare/NativeShare';
import useAITextStore from '../lib/hook/store/useAITextStore';
import TextRegenerate from '../components/TextRegenerate/TextRegenerate';

// 우표를 생성하는 페이지
// 패스 파라미터로 받은 우표 id 를 통해 단건 조회 API 연동 필요
// AI 의 텍스트 재생성 구현 필요
// (개별 API 로 만들지 말고, 이 페이지를 접속하기전 POST API 를 재요청 후, gen_id 로 다시 GET API 요청 하기)
// 우표 보내기시 공유 구현 필요

function CreateCard() {
  // TODO : 우표 페이지를 위한 스토어 분리는 필요하지만, 시간이 없어서 ,,,
  const { imageUrl, imageFile, setContent } = usePostStore();
  const { aiText } = useAITextStore();

  useEffect(() => {
    setContent(aiText);
  }, [aiText]);

  return (
    <Style.Container>
      <div className="ContentWrap">
        <div id="CardFrame">
          <CreateCardLayout />
        </div>
        <Style.CreateCardTitle>
          <span>AI 생성&nbsp;</span>
          <span>랜덤 텍스트&nbsp;</span>
          <TextRegenerate />
        </Style.CreateCardTitle>
        <Style.CreateCardText>{aiText}</Style.CreateCardText>

        <Style.CardSubTitle>엽서 공유하기</Style.CardSubTitle>

        <Style.BtnContainer>
          <KakaoShare
            url={window.location.href}
            title={postText.title}
            description={aiText}
            imageUrl={imageUrl}
          />
          <NativeShare />
        </Style.BtnContainer>

        <ImgSave imageUrl={imageUrl} imageFile={imageFile} />
      </div>

      <img
        src="/Background/BackgroundConfirm.png"
        alt="background"
        id="CreateCard"
        className="BackgroundGradient"
      />
    </Style.Container>
  );
}

export default CreateCard;
