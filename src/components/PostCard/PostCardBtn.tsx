import { PostCardBtnProps } from "../../types/PostCard"
import * as Style from "./PostCardBtn.style"

function PostCardBtn(props:PostCardBtnProps) {
    return <Style.BtnContainer>{props.context}</Style.BtnContainer>
}

export default PostCardBtn