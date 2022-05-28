type TUser = {
  id: number;
  username: string;
}

export type TPost = {
  id: number;
  text: string;
  createdAt: string;
  user: TUser
  retweetBy: TUser | null;
  replyingTo: TUser | null;
}
