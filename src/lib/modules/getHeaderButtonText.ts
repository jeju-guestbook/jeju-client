import RoutePath from '../const/RoutePath';

const getHeaderButtonText = (path: string) => {
  switch (path) {
    case RoutePath.GUESTBOOK_ALL:
      return '';
    case RoutePath.ADD_POST:
      return '올리기';
    default:
      return '';
  }
};

export default getHeaderButtonText;
