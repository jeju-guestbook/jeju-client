import RoutePath from '../const/RoutePath';

const getRouteType = (path: string) => {
  let pathRes = path

  if (path.includes('createcard')) {
    pathRes = '/createcard'
  }
  
  switch (pathRes) {
    case RoutePath.ADD_POST_LOCATION: {
      return 'addPostLocation';
    }
    case RoutePath.CREATE_CARD: {
      return 'createcard'
    }
    case RoutePath.SUBMITTED: {
      return 'submitted'
    }
    default:
      return '';
  }
};

export default getRouteType;
