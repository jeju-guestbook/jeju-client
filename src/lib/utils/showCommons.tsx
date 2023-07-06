import getRouteType from "../modules/getRouteType"

const showCommons = (path: string) => {
    if (getRouteType(path) === 'postcard') {
        return false
    }

    return true
}

export default showCommons