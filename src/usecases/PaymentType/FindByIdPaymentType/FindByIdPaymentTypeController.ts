import { Request, Response } from 'express'
import { FindByIdPaymentTypeUseCase } from './FindByIdPaymentTypeUseCase'


export class FindByIdPaymentTypeController {
  constructor(
    private findByIdPaymentTypeUseCase: FindByIdPaymentTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdPaymentTypeUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}