import RoutePath from '../const/RoutePath';

const getHeaderNextButtonText = (path: string) => {
  // switch (path) {
  //   case RoutePath.SUBMITTED:
  //     return '다음';
  //   default:
  //     return '';
  // }
  if (path.includes(RoutePath.SUBMITTED)) return '다음';
};

export default getHeaderNextButtonText;
