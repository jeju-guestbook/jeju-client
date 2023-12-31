import getRouteType from "../modules/getRouteType";

const showCommons = (path: string) => {
  if (getRouteType(path) === "createcard" || getRouteType(path) === "confirm") {
    return false;
  }

  return true;
};

export default showCommons;
