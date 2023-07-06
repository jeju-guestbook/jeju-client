import getRouteType from "../modules/getRouteType"

const showCommons = (path: string) => {
    if (getRouteType(path) === 'createcard') {
        return false
    }

    return true
}

export default showCommons