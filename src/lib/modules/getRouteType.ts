import RoutePath from '../const/RoutePath';

const getRouteType = (path: string) => {
  switch (path) {
    case RoutePath.ADD_POST_LOCATION: {
      return 'addPostLocation';
    }
    default:
      return '';
  }
};

export default getRouteType;
