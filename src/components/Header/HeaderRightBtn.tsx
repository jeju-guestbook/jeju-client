import React, { MouseEventHandler } from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';
import { useLocation } from 'react-router-dom';
import usePostStore from '../../lib/hook/store/usePostStore';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import getRouteType from '../../lib/modules/getRouteType';

const HeaderRightBtn = () => {
  const { locationData, imageFile, date, content } = usePostStore();

  const location = useLocation();
  const buttonText = getHeaderButtonText(location.pathname);

  const onClick: MouseEventHandler = (e) => {
    const routeType = getRouteType(location.pathname);

    if (routeType === 'addPost') {
      const temp1 = imageFile;
      const temp2 = date;
      const temp3 = content;
      const temp4 = locationData;

      const asd = {
        temp1,
        temp2,
        temp3,
        temp4,
      };
      console.log(asd, 'formData');

      if (imageFile && date && content && locationData) {
        // TODO: API 호출후 성공하면 createPost 로 보내주기
        // navigate('/');
        alert(
          `imageFile: ${imageFile ? 'true' : 'false'} 
          date: ${date}
          content: ${content}
          locationData: ${locationData?.place_name || ''}`
        );
      } else {
        alert(`
        모든 항목을 입력해주세요. 
        imageFile: ${imageFile ? 'true' : 'false'} 
        date: ${date}
        content: ${content}
        locationData: ${locationData?.place_name || ''}`);
      }
    }
  };

  return (
    <>
      {buttonText && (
        <HeaderRightButton type="button" onClick={onClick}>
          {buttonText}
        </HeaderRightButton>
      )}
    </>
  );
};

export default HeaderRightBtn;
