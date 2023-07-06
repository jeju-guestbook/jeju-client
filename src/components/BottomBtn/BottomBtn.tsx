import { BottomBtnProps } from "../../types/BottomBtn"
import * as Style from "./BottomBtn.style"

function BottomBtn(props:BottomBtnProps) {
    return <Style.BottomBtnBody onClick={props.handler}>{props.content}</Style.BottomBtnBody>
}

export default BottomBtn