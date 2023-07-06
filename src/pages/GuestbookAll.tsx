import { useEffect, useState } from "react";
import AddPostFloatBtn from "../components/AddPost/AddPostFloatBtn";
import LogCompo from "../components/LogCompo/LogCompo";
import * as Style from "./GuestbookAll.style";
import { axiosGuestList } from "../lib/utils/axiosGuestList";
import { GuestbookResponse } from "../types/GuestBookAll";

function GuestbookAll() {
  const [logList, setLogList] = useState([]);

  useEffect(() => {
    axiosGuestList(1)
      .then((res: any) => {
        setLogList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Style.Container>
      <>
        {logList.map((elem:GuestbookResponse, idx) => {
          return <LogCompo key={idx} {...elem} />
        })}
      </>
      <AddPostFloatBtn />
    </Style.Container>
  );
}

export default GuestbookAll;
