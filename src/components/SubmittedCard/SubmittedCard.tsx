import * as Style from "./SubmittedCard.style";
// import TestImg from "../../public/TestImg.png";
import { SubmittedCardProps } from "../../types/Submitted";

function SubmittedCard(props:SubmittedCardProps) {
  return (
    <Style.SubmittedCardContainer>
      <img src={props.imageUrl} alt={"TEST img"} />
      <Style.SubmittedFooter>{props.date}</Style.SubmittedFooter>
    </Style.SubmittedCardContainer>
  );
}

export default SubmittedCard;
