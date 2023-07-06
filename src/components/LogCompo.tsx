import * as Style from "./LogCompo.style";

import TestImg from "../public/TestImg.png";

function LogCompo() {
  return (
    <Style.LogContainer>
      <img src={TestImg} alt={"TEST img"} />
      <Style.LogText>
        <div>2023/07/05</div>
        <div>
          제주도 감귤농장 체험한 날! 엄청 큼지막하고 달콤하고 좋더라ㅎㅎ
        </div>
      </Style.LogText>
    </Style.LogContainer>
  );
}

export default LogCompo;
