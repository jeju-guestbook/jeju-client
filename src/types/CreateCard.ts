export interface CreateCardBtnProps {
    context: string
}

export interface CreateCardAddRequest {
    bookId: number;
}

export interface CreateCardAddResponse {
    genId: number;
}

export interface CreateCardGetRequest {
    genId: number;
}

export interface CreateCardGetResponse {
    genId: number;
    imgS3Url: string;
    text: string;
    x: string;
    y: string;
}

export interface CreateCardListGetRequest {
    userTokenId: string;
}

export interface CreateCardListGetResponse {
    genId: number;
    imgS3Url: string;
    text: string;
}