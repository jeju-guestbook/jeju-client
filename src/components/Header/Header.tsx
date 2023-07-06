import { ReactComponent as BackIcon } from './icons/backIcon.svg';
import * as Style from './Header.style';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderRightBtn from './HeaderRightBtn';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';

function Header() {
  const location = useLocation();

  const buttonText = getHeaderButtonText(location.pathname);

  return (
    <Style.HeaderBody>
      <Style.HeaderIcon>
        <BackIcon />
      </Style.HeaderIcon>
      <Style.HeaderText>방명록 모음</Style.HeaderText>
      <HeaderRightBtn text={buttonText} />
    </Style.HeaderBody>
  );
}

export default Header;
