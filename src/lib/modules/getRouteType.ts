import RoutePath from '../const/RoutePath';

const getRouteType = (path: string) => {
  let pathRes = path;

  if (path.includes('createcard')) {
    pathRes = '/createcard';
  }

  switch (pathRes) {
    case RoutePath.ADD_POST_LOCATION: {
      return 'addPostLocation';
    }
    case RoutePath.CREATE_CARD: {
      return 'createcard';
    }
    case RoutePath.SUBMITTED: {
      return 'submitted';
    }
    case RoutePath.ADD_POST: {
      return 'addPost';
    }
    case RoutePath.MAP: {
      return 'map';
    }
    case RoutePath.CONFIRM: {
      return 'confirm';
    }
    default:
      return '';
  }
};

export default getRouteType;
