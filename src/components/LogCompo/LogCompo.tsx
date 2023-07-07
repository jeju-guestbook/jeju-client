import * as Style from "./LogCompo.style";

import TestImg from "../../public/TestImg.png";
import { GuestbookResponse } from "../../types/GuestBookAll";
import { useEffect } from "react";

function LogCompo(props: GuestbookResponse) {
  const date = props.createdAt.slice(0, 10).split("-").join("/");
  const blob = new Blob([...props.image.split('')], { type: "image/png" });
  const imgUrl = window.URL.createObjectURL(blob);

  console.log(blob);

  useEffect(() => {
    return () => {
      window.URL.revokeObjectURL(imgUrl);
    };
  }, []);

  return (
    <Style.LogContainer>
      <img src={imgUrl} alt={props.userText} />
      <Style.LogText>
        <div>{date}</div>
        <div>{props.userText}</div>
      </Style.LogText>
    </Style.LogContainer>
  );
}

export default LogCompo;
