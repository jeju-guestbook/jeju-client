import CreateCardBtn from "../components/CreateCard/CreateCardBtn";
import CreateCardLayout from "../components/CreateCard/CreateCardLayout";
import RegenerateText from "../components/icons/RegenerateText";
import * as Style from "./CreateCard.style";

function CreateCard() {
  return (
    <Style.Container>
      <CreateCardLayout />
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
        <CreateCardBtn {...{ context: "저장하기" }} />
        <CreateCardBtn {...{ context: "우표 보내기" }} />
      </Style.BtnContainer>
    </Style.Container>
  );
}

export default CreateCard;
