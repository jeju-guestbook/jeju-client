import { BtnProps } from "../../types/BtnProps";
import * as Style from "./CreateCardBtn.style";

function CreateCardBtn(props: BtnProps) {
  return (
    <Style.BtnContainer onClick={props.handler}>
      {props.content}
    </Style.BtnContainer>
  );
}

export default CreateCardBtn;
