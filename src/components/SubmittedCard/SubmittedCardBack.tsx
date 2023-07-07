import { SubmittedBackProps } from "../../types/Submitted";
import * as Style from "./SubmittedCardBack.style";

function SubmittedCardBack(props: SubmittedBackProps) {
  return (
    <Style.BackContainer>
      <div />
      {props.content}
      <Style.BackDate>{props.date}</Style.BackDate>
    </Style.BackContainer>
  );
}

export default SubmittedCardBack;
