export interface GuestbookResponse {
    id:number;
    createdAt:string;
    createdBy: null|string;
    image: string;
    photoCreatedAt: string;
    userText: string;
}

export interface GuestbookAddRequest {
    bookId: number;
    datetime: string;
    x: number;
    y: number;
    // image:
}
 
export interface GuestbookAddResponse {
    bookId: number;
}