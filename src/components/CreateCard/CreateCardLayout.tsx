import CreateCardFrame from '../icons/CreateCardFrame';
import TestImg from '../../public/Test/KakaoTalk_20230707_102642558.jpg';

import * as Style from './CreateCardLayout.style';

function CreateCardLayout() {
  return (
    <Style.CreateCardContainer>
      <CreateCardFrame />
      <img src={TestImg} />
      <img src={TestImg} />
    </Style.CreateCardContainer>
  );
}

export default CreateCardLayout;
