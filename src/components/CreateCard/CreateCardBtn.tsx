import { CreateCardBtnProps } from "../../types/CreateCard"
import * as Style from "./CreateCardBtn.style"

function CreateCardBtn(props:CreateCardBtnProps) {
    return <Style.BtnContainer>{props.context}</Style.BtnContainer>
}

export default CreateCardBtn