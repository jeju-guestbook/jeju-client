import * as Style from './Header.style';
import HeaderRightBtn from './HeaderRightBtn';
import BackIcon from '../icons/BackIcon';
import { useLocation, useNavigate } from 'react-router-dom';
import getHeaderDomainText from '../../lib/modules/getHeaderDomainText';
import getRouteType from '../../lib/modules/getRouteType';
import Logo from '../icons/Logo';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const domainText = getHeaderDomainText(location.pathname);
  const routeType = getRouteType(location.pathname);

  return (
    <Style.HeaderBody>
      <Style.HeaderIcon
        onClick={() => {
          navigate(-1);
        }}
      >
        {(location.pathname !== '/') && <BackIcon />}
      </Style.HeaderIcon>
      {domainText && <Style.HeaderText>{domainText}</Style.HeaderText>}
      {routeType === 'map' && <Logo />}
      <HeaderRightBtn />
    </Style.HeaderBody>
  );
}

export default Header;
