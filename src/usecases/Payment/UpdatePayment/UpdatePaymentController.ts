import { Request, Response } from 'express'
import { UpdatePaymentUseCase } from './UpdatePaymentUseCase'


export class UpdatePaymentController {
  constructor(
    private updatePaymentUseCase: UpdatePaymentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id_paymentType, amount, currency } = request.body;

    try {
      const data = await this.updatePaymentUseCase.execute(id, {
        id_paymentType, amount, currency
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}