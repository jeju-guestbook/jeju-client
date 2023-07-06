import CreateCardFrame from "../icons/CreateCardFrame";
import TestImg from "../../public/TestImg.png";

import * as Style from "./CreateCardLayout.style";

function CreateCardLayout() {
  return (
    <Style.CreateCardContainer>
      <Style.CreateCardImg>
        <img src={TestImg} alt={"TEST img"} />
        <img src={TestImg} alt={"TEST img"} />
      </Style.CreateCardImg>
      <div>
      <CreateCardFrame />
      </div>
    </Style.CreateCardContainer>
  );
}

export default CreateCardLayout;
