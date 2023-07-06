import * as Style from './Header.style';
import HeaderRightBtn from './HeaderRightBtn';
import BackIcon from '../icons/BackIcon';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <Style.HeaderBody>
      <Style.HeaderIcon
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackIcon />
      </Style.HeaderIcon>
      <Style.HeaderText>방명록 모음</Style.HeaderText>
      <HeaderRightBtn />
    </Style.HeaderBody>
  );
}

export default Header;
