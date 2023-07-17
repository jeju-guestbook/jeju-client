interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_KAKAO_KEY: string;
  readonly VITE_KAKAO_SDK_KEY: string;
  readonly VITE_KAKAO_INTEGRITY: string;
}
interface Window {
  kakao: any;
  Kakao: any;
}
