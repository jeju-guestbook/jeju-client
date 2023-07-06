import RoutePath from '../const/RoutePath';

const getRouteType = (path: string) => {
  let pathRes = path;

  if (path.includes('postcard')) {
    pathRes = '/postcard';
  }

  switch (pathRes) {
    case RoutePath.ADD_POST_LOCATION: {
      return 'addPostLocation';
    }
    case RoutePath.POSTCARD: {
      return 'postcard';
    }
    case RoutePath.ADD_POST: {
      return 'addPost';
    }
    default:
      return '';
  }
};

export default getRouteType;
