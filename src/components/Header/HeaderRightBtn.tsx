import React, { MouseEventHandler } from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';
import { useLocation, useNavigate } from 'react-router-dom';
import usePostStore from '../../lib/hook/store/usePostStore';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import getRouteType from '../../lib/modules/getRouteType';
import getHeaderNextButtonText from '../../lib/modules/getHeaderNextButtonText';
import { GuestbookAddRequest } from '../../types/GuestBookAll';
import { axiosAddPost } from '../../lib/utils/axiosAddPost';
import req from '../../lib/requests/apiRequest';

const HeaderRightBtn = () => {
  const { locationData, imageFile, date, content } = usePostStore();

  const navigate = useNavigate();
  const location = useLocation();
  const buttonText = getHeaderButtonText(location.pathname);
  const buttonNextText = getHeaderNextButtonText(location.pathname);

  const upload: MouseEventHandler = async (e) => {
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
      if (imageFile && date && content) {
        // if (imageFile && date && content && locationData) {
        // TODO: API 호출후 성공하면 createPost 로 보내주기
        // 성공했어요
        const result = await req.postCreate({
          datetime: date,
          image: imageFile,
          user_text: content,
        });
      }
    }
  };

  const moveCreateCard = () => {
    navigate('/confirm');
  };

  return (
    <>
      {buttonText && (
        <HeaderRightButton type="button" onClick={upload}>
          {buttonText}
        </HeaderRightButton>
      )}
      {buttonNextText && (
        <HeaderRightButton
          type="button"
          onClick={moveCreateCard}
          className="Submitted"
        >
          다음
        </HeaderRightButton>
      )}
    </>
  );
};

export default HeaderRightBtn;
