import { Request, Response } from 'express'
import { 
  CreatePaymentUseCase 
} from './CreatePaymentUseCase'


export class CreatePaymentController {
  constructor(
    private createPaymentUseCase: CreatePaymentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { amount, currency, id_paymentType } = request.body;

    try {
      const data = await this.createPaymentUseCase.execute({
        amount, currency, id_paymentType
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}