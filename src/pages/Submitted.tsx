import { useState } from 'react';

import * as Style from './Submitted.style';
import SubmittedCard from '../components/SubmittedCard/SubmittedCard';
import SubmittedCardBack from '../components/SubmittedCard/SubmittedCardBack';
import { changeSubmitted } from '../lib/modules/changeSubmited';

import SharingIcon from '../components/icons/SharingIcon';
import usePostStore from '../lib/hook/store/usePostStore';
import { SubmittedBackProps, SubmittedCardProps } from '../types/Submitted';
import BackgroundSubmitted from '../../public/Background/BackgroundSubmitted.png';
import ImgSave from '../components/ImgSave/ImgSave';
import KakaoShare from '../components/KakaoShare/KakaoShare';
import { useParams } from 'react-router-dom';

function Submitted() {
  const {submittedId} = useParams()
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
          <KakaoShare />
          <SharingIcon
            onClick={() => {
              window.navigator.share({
                title: document.title,
                url: window.location.href,
              });
            }}
          />
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
