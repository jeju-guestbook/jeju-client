import axios from "axios";
import { API } from "../const/API";

export async function axiosGuestList(pageNum: number) {
    try {
        const resList = (await axios.get(API+`/guestbook/${pageNum}`))

        return resList.data
    } catch (error) {
        console.log(error)
    }
}