import { Request, Response } from 'express'
import { FindByIdSaleUseCase } from './FindByIdSaleUseCase'


export class FindByIdSaleController {
  constructor(
    private findByIdSaleUseCase: FindByIdSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdSaleUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}