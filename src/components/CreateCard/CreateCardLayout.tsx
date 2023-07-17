import CreateCardFrame from '../icons/CreateCardFrame';
// import TestImg from '../../public/Test/KakaoTalk_20230707_102642558.jpg';

import * as Style from './CreateCardLayout.style';
import usePostStore from '../../lib/hook/store/usePostStore';

function CreateCardLayout() {
  const { imageUrl } = usePostStore();
  return (
    <Style.CreateCardContainer>
      <CreateCardFrame />
      <img className="PostCardImg" src={imageUrl} />
    </Style.CreateCardContainer>
  );
}

export default CreateCardLayout;
