export interface GuestbookListResponse {
    bookId:number;
    imgS3Url: string;
    text: string;
    userId: string;
    userProfileImg:string;
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