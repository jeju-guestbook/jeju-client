import * as Style from './Header.style';
import { useLocation } from 'react-router-dom';
import HeaderRightBtn from './HeaderRightBtn';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import BackIcon from '../icons/BackIcon';

function Header() {
  return (
    <Style.HeaderBody>
      <Style.HeaderIcon>
        <BackIcon />
      </Style.HeaderIcon>
      <Style.HeaderText>방명록 모음</Style.HeaderText>
      <HeaderRightBtn />
    </Style.HeaderBody>
  );
}

export default Header;
