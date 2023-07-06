import * as Style from './Header.style';
import { useLocation } from 'react-router-dom';
import HeaderRightBtn from './HeaderRightBtn';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import BackIcon from '../icons/BackIcon';

function Header() {
  const location = useLocation();

  console.log(location, 'location');

  const buttonText = getHeaderButtonText(location.pathname);

  console.log(buttonText, 'buttonText');

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
