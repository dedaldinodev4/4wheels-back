

export interface ICreateDriver extends ICreateDriverRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateDriverRequest {
  name: string;
  identity: string;
  country: string;
  gender: string;
  birth: Date;
}