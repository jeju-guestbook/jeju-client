import { useState } from "react";

import * as Style from "./Submitted.style";
import SubmittedCard from "../components/SubmittedCard/SubmittedCard";
import SubmittedCardBack from "../components/SubmittedCard/SubmittedCardBack";
import { changeSubmitted } from "../lib/modules/changeSubmited";

import SharingIcon from "../components/icons/SharingIcon";
import KakaoIcon from "../public/kakaoIcon.png"

function Submitted() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Style.SubmittedContainer
      onClick={() => changeSubmitted({ isClicked, setIsClicked })}
    >
      <div>{isClicked ? <SubmittedCardBack /> : <SubmittedCard />}</div>

      <Style.SharingBtnGroup>
        <SharingIcon />
        <img src={KakaoIcon} alt="kakao Sharing" />
      </Style.SharingBtnGroup>
    </Style.SubmittedContainer>
  );
}

export default Submitted;
