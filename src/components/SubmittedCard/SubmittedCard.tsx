import * as Style from "./SubmittedCard.style";
import TestImg from "../../public/Test/KakaoTalk_20230707_102642558.jpg";

import { SubmittedCardProps } from "../../types/Submitted";

function SubmittedCard(props: SubmittedCardProps) {
  return (
    <Style.SubmittedCardContainer>
      <img src={TestImg} alt={"TEST img"} />
      {/* <img src={props.imageUrl} alt={"TEST img"} /> */}
      {/* <Style.SubmittedFooter>{props.date}</Style.SubmittedFooter> */}
      <Style.SubmittedFooter>2023.07.07</Style.SubmittedFooter>
    </Style.SubmittedCardContainer>
  );
}

export default SubmittedCard;
