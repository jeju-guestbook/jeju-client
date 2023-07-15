interface ApiRequestCommon {
  status: any;
  result: object | Array<any>;
}

type GetGuestBookListReq = number;

interface GetGuestBookListRes extends ApiRequestCommon {
  status: {
    page: number;
    next: boolean;
  };
  result: Array<GuestBookItem>;
}

interface GuestBookItem {
  book_id: number;
  img_s3_url: string;
  text: string;
}

interface CreateGuestBookReq {
  datetime: string;
  image: File;
  user_text: string;
}

interface CreateGuestBookRes extends ApiRequestCommon {
  result: CreatePostReq;
}

interface CreatePostReq {
  book_id: number;
}

interface CreatePostRes extends ApiRequestCommon {
  result: {
    gen_id: number;
  };
}

type GetPostReq = number;

interface GetPostRes extends ApiRequestCommon {
  result: {
    gen_id: number;
    img_s3_url: string;
    text: string;
  };
}
