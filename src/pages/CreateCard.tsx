import CreateCardBtn from "../components/CreateCard/CreateCardBtn";
import CreateCardLayout from "../components/CreateCard/CreateCardLayout";
import RegenerateText from "../components/icons/RegenerateText";
import * as Style from "./CreateCard.style";

import BackgroundConfirm from "../public/Background/BackgroundConfirm.png";
import { BtnProps } from "../types/BtnProps";
import { useNavigate } from "react-router-dom";

function CreateCard() {
  const navigate = useNavigate();

  const goMain:BtnProps = {
    content: "처음으로",
    handler:()=>{
      navigate('/map')
    }
  }

  const sharingCard:BtnProps = {
    content:"우표 보내기",
    handler:()=>{}
  }

  return (
    <Style.Container>
      <div>
        <div>
          <CreateCardLayout />
        </div>
        <Style.CreateCardTitle>
          <span>AI 생성&nbsp;</span>
          <span>랜덤 텍스트&nbsp;</span>
          <span>
            <RegenerateText />
          </span>
        </Style.CreateCardTitle>
        <Style.CreateCardText>
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </Style.CreateCardText>

        <Style.BtnContainer>
          <CreateCardBtn {...goMain} />
          <CreateCardBtn {...sharingCard} />
        </Style.BtnContainer>
      </div>

      <img
        src={BackgroundConfirm}
        alt="background"
        id="CreateCard"
        className="BackgroundGradient"
      />
    </Style.Container>
  );
}

export default CreateCard;
