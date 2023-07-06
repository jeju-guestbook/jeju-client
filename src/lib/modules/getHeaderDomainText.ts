import RoutePath from '../const/RoutePath';

const getHeaderDomainText = (path: string) => {
  switch (path) {
    case RoutePath.GUESTBOOK_ALL:
      return '방명록 모음';
    default:
      return '';
  }
};

export default getHeaderDomainText;
