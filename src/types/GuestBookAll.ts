export interface GuestbookResponse {
    id:number;
    createdAt:string;
    createdBy: null|string;
    image: string;
    photoCreatedAt: string;
    userText: string;
}

export interface GuestbookAddRequest {
    datetime: string;
    image: any;
    userText:string;
}
 
export interface GuestbookAddResponse {
    bookId: number;
}