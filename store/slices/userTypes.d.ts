export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserDetail {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface UserState {
  value: number;
  posts: Posts[];
  isLoading: boolean;
  comments: Posts[];
  userDetail: UserDetail | null;
  post: Posts | null;
  theme: string;
}
