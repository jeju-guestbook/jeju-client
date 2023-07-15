// @ts-nocheck
import { useState } from "react";

import * as Style from "./Submitted.style";
import SubmittedCard from "../components/SubmittedCard/SubmittedCard";
import SubmittedCardBack from "../components/SubmittedCard/SubmittedCardBack";
import { changeSubmitted } from "../lib/modules/changeSubmited";

import SharingIcon from '../components/icons/SharingIcon';
import KakaoIcon from '../public/kakaoIcon.png';
import usePostStore from '../lib/hook/store/usePostStore';
import { SubmittedBackProps, SubmittedCardProps } from '../types/Submitted';
import BackgroundSubmitted from '../public/Background/BackgroundSubmitted.png';
import ImgSave from '../components/ImgSave/ImgSave';
function Submitted() {
  const { imageUrl, imageFile, date, content } = usePostStore();
  const [isClicked, setIsClicked] = useState(false);

  const cardInfo: SubmittedCardProps = {
    imageUrl: imageUrl,
    imageFile: imageFile,
    date: date,
  };

  const cardBackInfo: SubmittedBackProps = {
    content: content,
    date: date,
  };

  // const submittedBottom: BtnProps = {
  //   content: <><SaveBtn />저장하기</>,
  //   handler: () => {},
  // };

  return (
    <Style.SubmittedContainer>
      <div>
        <div onClick={() => changeSubmitted({ isClicked, setIsClicked })}>
          {isClicked ? (
            <SubmittedCardBack {...cardBackInfo} />
          ) : (
            <SubmittedCard {...cardInfo} />
          )}
        </div>

        <Style.SubmittedSubTitle>포토카드 공유하기</Style.SubmittedSubTitle>

        <Style.SharingBtnGroup>
          <img
            src={KakaoIcon}
            alt="kakao Sharing"
            onClick={() => {
              if (window.Kakao) {
                window.Kakao.Share.createDefaultButton({
                  container: "#kakaotalk-sharing-btn",
                  objectType: "feed",
                  content: {
                    title: document.title,
                    description: `제주도의 푸르른 풍경 속에서 눈에 띄는 감귤 나무들이 햇볕에 반짝이며
                    농장을 수놓습니다. 나무 가지에 매달린 풍성한 감귤들은 탱글탱글하게 ...`,
                    imageUrl: `${window.location.origin}/test.jpeg`,
                    link: {
                      mobileWebUrl:
                        "https://creative-empanada-b8c6f1.netlify.app/createcard/1",
                      webUrl:
                        "https://creative-empanada-b8c6f1.netlify.app/createcard/1",
                    },
                  },
                });
              }
            }}
          />
          <SharingIcon
            onClick={() => {
              window.navigator.share({
                title: document.title,
                url: window.location.href,
              });
            }}
          />
          {/* <img src="/test.jpeg"></img> */}
        </Style.SharingBtnGroup>
      </div>

      {/* <Style.SubmittedBottom>
        <BottomBtn {...submittedBottom} />
      </Style.SubmittedBottom> */}

      <img
        src={BackgroundSubmitted}
        alt="background"
        id="Submitted"
        className="BackgroundGradient"
      />
      <ImgSave />
    </Style.SubmittedContainer>
  );
}

export default Submitted;
