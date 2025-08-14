export interface IDummyCommentUser {
  id: number;
  username: string;
  fullName: string;
}

export interface IDummyComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IDummyCommentUser;
}