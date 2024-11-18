
export interface IUpdateUserRequest {
  status: boolean;
  email: string;
}



export interface IUpdateUser extends IUpdateUserRequest {
  id: string;
  created_at: Date;
  username: string;
  role: string;
}