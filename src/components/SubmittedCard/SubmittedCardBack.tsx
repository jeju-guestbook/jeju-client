import { SubmittedBackProps } from "../../types/Submitted";
import * as Style from "./SubmittedCardBack.style";

function SubmittedCardBack(props: SubmittedBackProps) {
  return (
    <Style.BackContainer>
      <div />
      초록초록하다
      <br />
      여기 군데군데 귤나무가 있대
      <br />
      겨울되면 보이겠지?
      {/* {props.content} */}
      <Style.BackDate>2023.07.07</Style.BackDate>
      {/* <Style.BackDate>{props.date}</Style.BackDate> */}
    </Style.BackContainer>
  );
}

export default SubmittedCardBack;
