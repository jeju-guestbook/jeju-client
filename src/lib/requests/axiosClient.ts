import axios from 'axios';

const kakaoInstance = axios.create();

// kakaoInstance.defaults.headers.common['Content-Type'] = 'application/json';
// kakaoInstance.defaults.headers.common.Accept = '*/*';

const apiInstance = axios.create();

export const kakaoInstanceClient = kakaoInstance;

export const apiInstanceClient = apiInstance;
