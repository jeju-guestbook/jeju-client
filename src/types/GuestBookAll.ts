export interface GuestbookResponse {
  id: number;
  createdAt: string;
  createdBy: null | string;
  image: string;
  photoCreatedAt: string;
  user_text: string;
}

export interface GuestbookAddRequest {
  datetime: string;
  image: File;
  userText: string;
}

export interface GuestbookAddResponse {
  bookId: number;
}
