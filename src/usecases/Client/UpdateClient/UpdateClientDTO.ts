
export interface IUpdateClientRequest {
  name: string;
  identity: string;
  gender: string;
  address: string;
  walletNumber: string;
  
}



export interface IUpdateClient extends IUpdateClientRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: boolean;
  id_user: string;
}