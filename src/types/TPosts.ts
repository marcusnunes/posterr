type TUser = {
  id: number;
  username: string;
  photo: string;
}

export type TPost = {
  id: number;
  text: string;
  createdAt: string;
  user: TUser;
}
