import PostCardFrame from "../icons/PostCardFrame";
import TestImg from "../../public/TestImg.png";

import * as Style from "./PostCardLayout.style";

function PostCardLayout() {
  return (
    <Style.PostCardContainer>
      <Style.PostCardImg>
        <img src={TestImg} alt={"TEST img"} />
        <img src={TestImg} alt={"TEST img"} />
      </Style.PostCardImg>
      <div>
      <PostCardFrame />
      </div>
    </Style.PostCardContainer>
  );
}

export default PostCardLayout;
