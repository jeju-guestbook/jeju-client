import React, { MouseEventHandler } from 'react';
import { HeaderRightButton } from './HeaderRightBtn.style';
import { useLocation, useNavigate } from 'react-router-dom';
import usePostStore from '../../lib/hook/store/usePostStore';
import getHeaderButtonText from '../../lib/modules/getHeaderButtonText';
import getRouteType from '../../lib/modules/getRouteType';
import getHeaderNextButtonText from '../../lib/modules/getHeaderNextButtonText';
import req from '../../lib/requests/apiRequest';
import useLoaderStore from '../../lib/hook/store/useLoaderStore';

const HeaderRightBtn = () => {
  const { locationData, imageFile, date, content } = usePostStore();

  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoading } = useLoaderStore();
  const buttonText = getHeaderButtonText(location.pathname);
  const buttonNextText = getHeaderNextButtonText(location.pathname);

  const upload: MouseEventHandler = async (e) => {
    const routeType = getRouteType(location.pathname);

    if (routeType === 'addPost') {
      if (!imageFile || !date || !content || !locationData)
        return alert('모든 항목을 입력해주세요');

      try {
        setIsLoading(true);

        const result = await req.createGuestBook({
          datetime: date,
          image: imageFile,
          user_text: content,
        });

        if (result.data.result) {
          navigate(`/submitted/${result.data.result.book_id}`);
        }

        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);

        // API 서버가 아직 준비가 안됐으므로, 응답이 없을때 시연이 가능하도록 처리하기

        navigate(`/submitted/1`);

        // TODO : API 서버 준비됐을시, 실제 에러 발생 처리
        // alert('에러가 발생했습니다');
      }
    }
  };

  const moveCreateCard = () => {
    navigate(`/confirm`);
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
