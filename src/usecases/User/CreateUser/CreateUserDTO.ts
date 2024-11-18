
export interface ICreateUser {
  id: string;
  status: boolean;
  username: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUserRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}