import CreateCardBtn from '../components/CreateCard/CreateCardBtn';
import CreateCardLayout from '../components/CreateCard/CreateCardLayout';
import RegenerateText from '../components/icons/RegenerateText';
import * as Style from './CreateCard.style';

import BackgroundConfirm from '../public/Background/BackgroundConfirm.png';
import { BtnProps } from '../types/BtnProps';
import { useNavigate } from 'react-router-dom';

function CreateCard() {
  const navigate = useNavigate();

  const goMain: BtnProps = {
    content: '처음으로',
    handler: () => {
      navigate('/');
    },
  };

  const sharingCard: BtnProps = {
    content: '우표 보내기',
    handler: () => {},
  };

  const contText =
    `제주도의 푸르른 풍경 속에서 눈에 띄는 감귤 나무들이 햇볕에 반짝이며
  농장을 수놓습니다. 나무 가지에 매달린 풍성한 감귤들은 탱글탱글하게
  익어가는 모습이 마치 작은 태양들처럼 보입니다. 그들의 화사한 주황색이
  푸른 잎사귀와 대비되며 아름다운 조화를 이룹니다. 감귤의 피부를 까보면,
  속이 채워진 즙이 가득한 구슬들이 드러납니다. 그 맛은 달콤하면서도
  약간의 쌉싸름함이 가미되어 있어, 상큼하고 풍부한 맛을 선사합니다.
  이렇게 맛있는 감귤을 맛보기 위해 많은 사람들이 제주도를 찾아옵니다.
  제주도의 감귤은 신선함을 그대로 담은 듯한 맛과 향 때문에 많은 사람들이
  좋아하며, 그 특유의 달큰한 맛은 그 어떤 과일과도 비교할 수 없는
  독특함을 자랑합니다. 따뜻한 태양 아래에서 자란 제주도의 감귤은 한 입
  베어먹을 때마다 그 진정한 맛과 향을 선사합니다.`.substring(0, 80) + '...';

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
        <Style.CreateCardText>{contText}</Style.CreateCardText>

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
