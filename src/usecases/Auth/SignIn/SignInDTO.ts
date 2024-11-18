
export interface ISignInRequest {
  data: string;
  password: string;
}

export interface ICurrentUser {
  token: string;
  user: {
    email: string;
    username: string;
    id: string;
    status: boolean;
  }
}
