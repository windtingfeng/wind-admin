import Cookies from "js-cookie"


export default {
    set: (name,data) => Cookies.set(name,data),
    get: (name) => Cookies.get(name)
}