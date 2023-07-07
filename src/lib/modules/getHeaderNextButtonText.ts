import RoutePath from '../const/RoutePath';

const getHeaderNextButtonText = (path: string) => {
  switch (path) {
    case RoutePath.SUBMITTED:
      return '다음';
    default:
      return '';
  }
};

export default getHeaderNextButtonText;
