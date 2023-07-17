import { create } from "zustand";

interface CardStore extends GuestBookItem {
    setBookId: (value:number) => void;
    setImageS3Url: (value: string) => void;
    setText: (value: string) => void;
}

const useCardStore = create<CardStore>((set) => ({
    book_id: 0,
    setBookId: (value:number) => {
        set((state) => ({
            ...state,
            book_id: value,
        }))
    },
    img_s3_url: '',
    setImageS3Url:(value:string) => {
        set((state) => ({
            ...state,
            img_s3_url: value,
        }))
    },
    text: '',
    setText:(value:string) => {
        set((state) => ({
            ...state,
            content: value,
        }))
    }
}))

export default useCardStore