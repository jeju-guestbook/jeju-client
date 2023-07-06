export interface UserListRequest {
    user_token_id: string;
}

export interface UserListResponse {
    genId: number;
    imgS3Url: string;
    text: string;
}