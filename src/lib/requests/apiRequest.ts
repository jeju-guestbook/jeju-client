import { apiInstanceClient } from './axiosClient';

const url = 'https://user-app.krampoline.com/k979e4226b445a/api';

const req = {
  // api/guestbook?page={page}
  getGuestBookList: (page: GetGuestBookListReq) => {
    const response = apiInstanceClient.request<GetGuestBookListRes>({
      url: `${url}/guestbook?page=${page}`,
      method: 'GET',
    });

    return response;
  },
  // /write
  createGuestBook: (data: CreateGuestBookReq) => {
    const formData = new FormData();

    formData.append('image', data.image);
    formData.append('user_text', data.user_text);
    formData.append('datetime', data.datetime);

    const response = apiInstanceClient.request<CreateGuestBookRes>({
      url: `${url}/write`,
      method: 'POST',
      data: formData,
    });

    return response;
  },
  // /write
  createPost: (data: CreatePostReq) => {
    const response = apiInstanceClient.request<CreatePostRes>({
      url: `${url}/upload`,
      method: 'POST',
      data,
    });

    return response;
  },
  // /result?gen_id={gen_id}
  getPost: (gen_id: GetPostReq) => {
    const response = apiInstanceClient.request({
      url: `${url}/result?gen_id=${gen_id}`,
      method: 'GET',
    });

    return response;
  },
};

export default req;
