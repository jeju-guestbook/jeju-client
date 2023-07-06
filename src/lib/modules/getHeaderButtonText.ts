import RoutePath from '../const/RoutePath';

const getHeaderButtonText = (path: string) => {
  switch (path) {
    case typeof RoutePath.GUESTBOOK_ALL:
      return '다음';
    case typeof RoutePath.ADD_POST_LOCATION:
      return '올리기';
    default:
      return '';
  }
};

export default getHeaderButtonText;
