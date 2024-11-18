
export interface IUpdatePaymentTypeRequest {
  name: string;
  status: boolean;
}



export interface IUpdatePaymentType extends IUpdatePaymentTypeRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}