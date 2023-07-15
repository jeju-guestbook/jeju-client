import axios from 'axios';
import { API } from '../const/API';

export async function axiosGuestList(pageNum: number) {
  try {
    const res = await axios.get<
      {
        createdAt: string;
        createdBy: string;
        id: number;
        image: string;
        photoCreatedAt: string;
        user_text: string;
      }[]
    >(API + `/guestbook/${pageNum}`);

    const reader = new FileReader();
    // reader.readAsDataURL(resList.data.image);

    // const imageRead = () => {
    //   return new Promise<{
    //     createdAt: string;
    //     createdBy: string;
    //     id: number;
    //     image: string;
    //     photoCreatedAt: string;
    //     user_text: string;
    //   }>((resolve, reject) => {
    //     reader.onload = () => {
    //       const temp = {
    //         createdAt: res.data.createdAt,
    //         createdBy: res.data.createdBy,
    //         id: res.data.id,
    //         image: reader.result as string,
    //         photoCreatedAt: res.data.photoCreatedAt,
    //         user_text: res.data.user_text,
    //       };

    //       resolve(temp);
    //     };
    //   });
    // };

    // const imgReadResult = await imageRead();

    // resList.data.image

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// createdAt
// :
// "2023-07-06T23:03:15.358533"
// createdBy
// :
// null
// id
// :
// 1
// image
// :
// "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYG
// photoCreatedAt
// :
// "2022-04-01"
// userText
// :
// "안녕하세요. 정말 귀여우시네요. 하하하 감사합니다"
