import { Request, Response } from 'express'
import { FindByIdPaymentUseCase } from './FindByIdPaymentUseCase'


export class FindByIdPaymentController {
  constructor(
    private findByIdPaymentUseCase: FindByIdPaymentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdPaymentUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}