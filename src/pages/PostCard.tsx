import PostCardBtn from "../components/PostCard/PostCardBtn";
import PostCardFrame from "../components/icons/PostCardFrame";
import * as Style from "./PostCard.style";

function PostCard() {
  return (
    <Style.Container>
      <PostCardFrame />
      <Style.PostCardTitle>
        <span>AI 생성&nbsp;</span>
        <span>랜덤 텍스트</span>
      </Style.PostCardTitle>
      <Style.PostCardText>
        안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
      </Style.PostCardText>

      <Style.BtnContainer>
        <PostCardBtn {...{context:"저장하기"}} />
        <PostCardBtn {...{context:"우표 보내기"}} />
      </Style.BtnContainer>
    </Style.Container>
  );
}

export default PostCard;
