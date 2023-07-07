import axios from "axios";
import { API } from "../const/API";
import { GuestbookAddRequest } from "../../types/GuestBookAll";

export async function axiosAddPost(data: GuestbookAddRequest) {
  try {
    const resList = await axios.post(API + `/write`, { body: data });
    console.log(resList);

    return resList.data;
  } catch (error) {
    console.log(error);
  }
}
