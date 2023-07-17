// import Photo1 from "../../public/Test/KakaoTalk_20230707_093653895.jpg";
// import Photo2 from "../../public/Test/KakaoTalk_20230707_093653895_01.jpg";
// import Photo3 from "../../public/Test/KakaoTalk_20230707_093653895_02.jpg";
// import Photo4 from "../../public/Test/KakaoTalk_20230707_101422853.jpg";
// import Photo5 from "../../public/Test/KakaoTalk_20230707_101422853_01.jpg";
// import Photo6 from "../../public/Test/KakaoTalk_20230707_101422853_02.jpg";
// import Photo7 from "../../public/Test/KakaoTalk_20230707_101422853_03.jpg";
// import Photo8 from "../../public/Test/KakaoTalk_20230707_101422853_04.jpg";
// import Photo9 from "../../public/Test/KakaoTalk_20230707_101422853_05.jpg";

const guestbookImgDirectory = '/Guestbook/guestbook_test_';
const imgType = '.jpeg';

export const testGuestBookList: {
  createdAt: string;
  createdBy: string;
  id: number;
  image: string;
  photoCreatedAt: string;
  user_text: string;
}[] = [
  {
    createdAt: '2023/07/13',
    createdBy: '',
    id: 0,
    image: `${guestbookImgDirectory}1${imgType}`,
    photoCreatedAt: '',
    user_text: `구름톤과 함께한 붉은노을
    힘든 일정 끝에 다정함만 남았습니다~!`,
  },
  {
    createdAt: '2023/07/07',
    createdBy: '',
    id: 0,
    image: `${guestbookImgDirectory}2${imgType}`,
    photoCreatedAt: '',
    user_text: `바다에 새긴 구름톤 6기
    이 순간이 기억에 오래남습니다~!`,
  },
  {
    createdAt: '2023/07/09',
    createdBy: '',
    id: 0,
    image: `${guestbookImgDirectory}3${imgType}`,
    photoCreatedAt: '',
    user_text: `가까운 미래에 이와같은 후회하지않도록
    좀 더 미친 짓을 하자!`,
  },
  {
    createdAt: '2023/07/11',
    createdBy: '',
    id: 0,
    image: `${guestbookImgDirectory}4${imgType}`,
    photoCreatedAt: '',
    user_text: `오늘 먹은 우뭇가사리 푸딩 너무 맛있었다… 내 원픽은 우도 땅콩이랑 오트!`,
  },
  // {
  //   createdAt: '2023/07/07',
  //   createdBy: '',
  //   id: 0,
  //   image: '/Guestbook/guestbook_test_1.jpeg',
  //   photoCreatedAt: '',
  //   user_text: '아이스크림 파티~~~~~너무너무 잘먹었습니다',
  // },
  // {
  //   createdAt: '2023/07/07',
  //   createdBy: '',
  //   id: 0,
  //   image: '/Guestbook/guestbook_test_1.jpeg',
  //   photoCreatedAt: '',
  //   user_text: '제주도는 스타벅스도 뭔가 다른 느낌',
  // },
  // {
  //   createdAt: '2023/07/07',
  //   createdBy: '',
  //   id: 0,
  //   image: '/Guestbook/guestbook_test_1.jpeg',
  //   photoCreatedAt: '',
  //   user_text: '뭔데 왜  왜 또 큰데',
  // },
  // {
  //   createdAt: '2023/07/06',
  //   createdBy: '',
  //   id: 0,
  //   image: '/Guestbook/guestbook_test_1.jpeg',
  //   photoCreatedAt: '',
  //   user_text: '비어파티! 몇번이나 왔다갔다 한 지 모르겠다',
  // },
  // {
  //   createdAt: '2023/07/07',
  //   createdBy: '',
  //   id: 0,
  //   image: '/Guestbook/guestbook_test_1.jpeg',
  //   photoCreatedAt: '',
  //   user_text: '비어파티 처음 보고 엄청 놀랐었던 기억',
  // },
];

export const photoCardText = {
  title: '포토카드가 도착했어요! - 모다드렁',
};

export const postText = {
  title: '우표가 도착했어요! - 모다드렁',
};
