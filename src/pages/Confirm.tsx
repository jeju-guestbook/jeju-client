import * as Style from './Confirm.style';

import BackgroundConfirm from '../../public/Background/BackgroundConfirm.png';
import BottomBtn from '../components/BottomBtn/BottomBtn';
import { BtnProps } from '../types/BtnProps';
import { useNavigate } from 'react-router-dom';

// 우표를 생성할것인지 묻는 페이지
// 우표를 생성 API 연동 필요
// 응답으로 받은 우표 id 로 페이지 라우팅 필요

function Confirm() {
  const navigate = useNavigate();
  const btnProps: BtnProps = {
    content: '우표 만들러가기',
    handler: () => {
      navigate(`/createcard/${1}`);
    },
  };

  return (
    <Style.ConfirmContainer>
      <Style.ConfirmContent>
        <img src="/ConfirmImg.png" alt="안내 이미지" />
        <Style.ConfirmTitle>우표도 만들어볼까요?</Style.ConfirmTitle>
        <Style.ConfirmText>
          AI가 생성한 제주도 이야기를 읽어보아요.
          <br />
          랜덤으로 이야기가 계속 바뀐답니다!
        </Style.ConfirmText>{' '}
        <Style.ConfirmBottom>
          <BottomBtn {...btnProps} />
        </Style.ConfirmBottom>
      </Style.ConfirmContent>

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
