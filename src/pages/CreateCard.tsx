import CreateCardLayout from '../components/CreateCard/CreateCardLayout';
// import RegenerateText from '../components/icons/RegenerateText';
import * as Style from './CreateCard.style';

import { BtnProps } from '../types/BtnProps';
import SharingIcon from '../components/icons/SharingIcon';
// import BottomBtn from '../components/BottomBtn/BottomBtn';
import SaveBtn from '../components/icons/SaveBtn';
import Reload from '../components/icons/Reload';
import ImgSave from '../components/ImgSave/ImgSave';
import usePostStore from '../lib/hook/store/usePostStore';
import KakaoShare from '../components/KakaoShare/KakaoShare';
import { photoCardText } from '../lib/const/constant';
import createCardMockUp from '../components/CreateCard/__createCardMockUp__';
import getRandomIdx from '../lib/utils/getRandomIdx';
import { useState } from 'react';
import useLoaderStore from '../lib/hook/store/useLoaderStore';

// 우표를 생성하는 페이지
// 패스 파라미터로 받은 우표 id 를 통해 단건 조회 API 연동 필요
// AI 의 텍스트 재생성 구현 필요
// (개별 API 로 만들지 말고, 이 페이지를 접속하기전 POST API 를 재요청 후, gen_id 로 다시 GET API 요청 하기)
// 우표 보내기시 공유 구현 필요

function CreateCard() {
  // const navigate = useNavigate();
  const { imageUrl, imageFile } = usePostStore();
  const { setIsLoading } = useLoaderStore();
  const [contText, setContText] = useState(
    createCardMockUp.AIText[getRandomIdx(createCardMockUp.AIText)]
  );

  // const goMain: BtnProps = {
  //   content: "처음으로",
  //   handler: () => {
  //     navigate("/");
  //   },
  // };

  // const sharingCard: BtnProps = {
  //   content: "우표 보내기",
  //   handler: () => {},
  // };

  const saveBottom: BtnProps = {
    content: (
      <>
        <SaveBtn />
        저장하기
      </>
    ),
    handler: () => {},
  };

  const reloadBottom: BtnProps = {
    content: (
      <>
        <Reload />
        다시하기
      </>
    ),
    handler: () => {},
  };

  return (
    <Style.Container>
      <div className="ContentWrap">
        <div id="CardFrame">
          <CreateCardLayout />
        </div>
        <Style.CreateCardTitle>
          <span>AI 생성&nbsp;</span>
          <span>랜덤 텍스트&nbsp;</span>
          <span
            id="ReloadBtn"
            onClick={() => {
              setIsLoading(true);

              setTimeout(() => {
                setContText(
                  createCardMockUp.AIText[getRandomIdx(createCardMockUp.AIText)]
                );
                setIsLoading(false);
              }, 3000);
            }}
          >
            <Reload />
          </span>
        </Style.CreateCardTitle>
        <Style.CreateCardText>{contText}</Style.CreateCardText>

        <Style.CardSubTitle>엽서 공유하기</Style.CardSubTitle>

        <Style.BtnContainer>
          <KakaoShare
            url={window.location.href}
            title={photoCardText.title}
            description={contText}
            imageUrl={imageUrl}
          />
          <SharingIcon
            onClick={() => {
              window.navigator.share({
                title: document.title,
                url: window.location.href,
              });
            }}
          />
        </Style.BtnContainer>

        {/* <Style.CardBottom>
          <BottomBtn {...reloadBottom} />
          <BottomBtn {...saveBottom} />
        </Style.CardBottom> */}

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
