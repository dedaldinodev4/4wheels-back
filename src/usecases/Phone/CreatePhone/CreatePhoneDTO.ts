

export interface ICreatePhone extends ICreatePhoneRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreatePhoneRequest {
  number: string;
  id_user: string;
}