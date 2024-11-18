

export interface IUpdateUserCredentialsRequest {
  username: string;
  password: string;
}



export interface IUpdateUserCredentials {
  id: string;
  status: boolean;
  username: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}