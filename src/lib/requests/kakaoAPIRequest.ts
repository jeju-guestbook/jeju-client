import { kakaoInstanceClient } from './axiosClient';

const kakaoReq = {
  localKeywordSearch: (keyword: string) => {
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`;
    const headers = {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY as string}`,
    };

    const response = kakaoInstanceClient.request<LocalKeywordSearchResponse>({
      url,
      method: 'GET',
      headers,
    });

    return response;
  },
};

export default kakaoReq;
