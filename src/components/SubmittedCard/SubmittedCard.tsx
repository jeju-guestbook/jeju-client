import * as Style from "./SubmittedCard.style";
import TestImg from "../../public/TestImg.png";

function SubmittedCard() {
  return (
    <Style.SubmittedCardContainer>
      <img src={TestImg} alt={"TEST img"} />
      <Style.SubmittedFooter>2023.07.06</Style.SubmittedFooter>
    </Style.SubmittedCardContainer>
  );
}

export default SubmittedCard;
