

export interface ICreateClient extends ICreateClientRequest {
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateClientRequest {
  name: string;
  identity: string;
  walletNumber: string;
  address: string;
  gender: string;
  id_user: string;
}