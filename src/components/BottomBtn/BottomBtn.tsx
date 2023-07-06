import { BtnProps } from "../../types/BtnProps"
import * as Style from "./BottomBtn.style"

function BottomBtn(props:BtnProps) {
    return <Style.BottomBtnBody onClick={props.handler}>{props.content}</Style.BottomBtnBody>
}

export default BottomBtn