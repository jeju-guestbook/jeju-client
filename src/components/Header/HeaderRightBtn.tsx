import React, { MouseEventHandler } from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';
import { useLocation, useNavigate } from 'react-router-dom';
import usePostStore from '../../lib/hook/store/usePostStore';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import getRouteType from '../../lib/modules/getRouteType';

const HeaderRightBtn = () => {
  const navigate = useNavigate();
  const { locationData } = usePostStore();

  const location = useLocation();
  const buttonText = getHeaderButtonText(location.pathname);

  const onClick: MouseEventHandler = (e) => {
    const routeType = getRouteType(location.pathname);

    if (routeType === 'addPostLocation') {
      if (locationData) {
        navigate('/addpost');
      } else {
        alert('장소를 입력해주세요.');
      }
    }
  };

  return (
    <HeaderRightButton type="button" onClick={onClick}>
      {buttonText}
    </HeaderRightButton>
  );
};

export default HeaderRightBtn;
