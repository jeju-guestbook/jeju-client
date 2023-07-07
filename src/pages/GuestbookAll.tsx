import { useEffect, useState } from 'react';
import AddPostFloatBtn from '../components/AddPost/AddPostFloatBtn';
import LogCompo from '../components/LogCompo/LogCompo';
import * as Style from './GuestbookAll.style';
import { axiosGuestList } from '../lib/utils/axiosGuestList';
import { GuestbookResponse } from '../types/GuestBookAll';

function GuestbookAll() {
  // const [logList, setLogList] = useState<
  //   {
  //     createdAt: string;
  //     createdBy: string;
  //     id: number;
  //     image: string;
  //     photoCreatedAt: string;
  //     user_text: string;
  //   }[]
  // >([]);

  // useEffect(() => {
  //   axiosGuestList(1).then((res) => {
  //     console.log(res, 'aefhuf');
  //     if (res === undefined) return;
  //     setLogList(res);
  //   });
  // }, []);

  console.log(logList, 'logListlogList');

  return (
    <Style.Container>
      <>
        {logList.map((elem, idx) => {
          return (
            <LogCompo
              key={idx}
              id={elem.id}
              createdAt={elem.createdAt}
              createdBy={elem.createdBy}
              image={elem.image}
              photoCreatedAt={elem.photoCreatedAt}
              user_text={elem.user_text}
            />
          );
        })}
      </>
      <AddPostFloatBtn />
    </Style.Container>
  );
}

export default GuestbookAll;
