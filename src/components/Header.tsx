import {ReactComponent as BackIcon} from "./icons/backIcon.svg"
import * as Style from './Header.style'

function Header() {
    return <Style.HeaderBody>
        <Style.HeaderIcon><BackIcon /></Style.HeaderIcon>
        <Style.HeaderText>방명록 모음</Style.HeaderText>
        <Style.HeaderIcon>올리기</Style.HeaderIcon>
    </Style.HeaderBody>
}

export default Header