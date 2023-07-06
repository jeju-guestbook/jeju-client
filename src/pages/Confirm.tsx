import * as Style from "./Confirm.style";

import ConfirmImg from "../public/ConfirmImg.png";
import BackgroundConfirm from "../public/Background/BackgroundConfirm.png";
import BottomBtn from "../components/BottomBtn/BottomBtn";
import { BottomBtnProps } from "../types/BottomBtn";

function Confirm() {
  const btnProps: BottomBtnProps = {
    content: "우표 만들러가기",
    handler: null,
  };

  return (
    <Style.ConfirmContainer>
      <Style.ConfirmContent>
        <img src={ConfirmImg} alt="안내 이미지" />

        <Style.ConfirmTitle>우표도 만들어볼까요?</Style.ConfirmTitle>
        <Style.ConfirmText>
          AI가 생성한 제주도 이야기를 읽어보아요.
          <br />
          랜덤으로 이야기가 계속 바뀐답니다!
        </Style.ConfirmText>
      </Style.ConfirmContent>

      <BottomBtn {...btnProps} />
      <img
        src={BackgroundConfirm}
        alt="background"
        id="Confirm"
        className="BackgroundGradient"
      />
    </Style.ConfirmContainer>
  );
}

export default Confirm;
