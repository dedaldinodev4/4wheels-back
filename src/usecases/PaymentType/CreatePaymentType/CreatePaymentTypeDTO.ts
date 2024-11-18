

export interface ICreatePaymentType extends ICreatePaymentTypeRequest {
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreatePaymentTypeRequest {
  name: string;
}