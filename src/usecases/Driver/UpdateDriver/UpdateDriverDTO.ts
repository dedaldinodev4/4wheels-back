
export interface IUpdateDriverRequest {
  name: string;
  identity: string;
  gender: string;
  country: string;
  birth: Date;
  
}



export interface IUpdateDriver extends IUpdateDriverRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}