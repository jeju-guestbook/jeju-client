import * as Style from "./LogCompo.style";

import TestImg from "../../public/TestImg.png";
import { GuestbookResponse } from "../../types/GuestBookAll";

function LogCompo(props: GuestbookResponse) {
  const date = props.createdAt.slice(0, 10).split("-").join("/");

  return (
    <Style.LogContainer>
      <img src={TestImg} alt={props.userText} />
      <Style.LogText>
        <div>{date}</div>
        <div>{props.userText}</div>
      </Style.LogText>
    </Style.LogContainer>
  );
}

export default LogCompo;
