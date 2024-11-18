import { Request, Response } from 'express'
import { PayPaymentUseCase } from './PayPaymentUseCase'


export class PayPaymentController {
  constructor(
    private payPaymentUseCase: PayPaymentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.payPaymentUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}