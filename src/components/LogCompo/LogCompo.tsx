import * as Style from './LogCompo.style';

import { GuestbookResponse } from '../../types/GuestBookAll';
import { useEffect } from 'react';

function LogCompo(props: GuestbookResponse) {
  const date = props.createdAt.slice(0, 10).split('-').join('/');
  // const blob = new Blob([...props.image.split('')], { type: 'image/png' });
  // const imgUrl = window.URL.createObjectURL(blob);

  // useEffect(() => {
  //   return () => {
  //     window.URL.revokeObjectURL(imgUrl);
  //   };
  // }, []);

  return (
    <Style.LogContainer>
      <img src={props.image} alt={props.user_text} />
      <Style.LogText>
        <div>{date}</div>
        <div>{props.user_text}</div>
      </Style.LogText>
    </Style.LogContainer>
  );
}

export default LogCompo;
