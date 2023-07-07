import { apiInstanceClient } from './axiosClient';

const url = 'https://user-app.krampoline.com/k979e4226b445a/api';

const req = {
  postCreate: (data: { datetime: string; image: File; user_text: string }) => {
    const formData = new FormData();

    formData.append('image', data.image);
    formData.append('user_text', data.user_text);
    formData.append('datetime', data.datetime);

    // /write
    const response = apiInstanceClient.request({
      url: `${url}/write`,
      method: 'POST',
      data: formData,
    });

    return response;
  },
  getCreate:(cardId:number) => {
    // /result?gen_id={gen_id}
    const response = apiInstanceClient.request({
      url: `${url}/result?gen_id=${cardId}`,
      method: 'GET'
    });

    return response;
  }
};

export default req;
