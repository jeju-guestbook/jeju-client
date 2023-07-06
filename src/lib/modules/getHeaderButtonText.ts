import RoutePath from '../const/RoutePath';

const getHeaderButtonText = (path: string) => {
  console.log('path', path);
  switch (path) {
    case RoutePath.GUESTBOOK_ALL:
      return '올리기';
    case RoutePath.ADD_POST_LOCATION:
      return '다음';
    default:
      return '';
  }
};

export default getHeaderButtonText;
