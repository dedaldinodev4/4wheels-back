import { Request, Response } from 'express'
import { FindByIdRentalUseCase } from './FindByIdRentalUseCase'


export class FindByIdRentalController {
  constructor(
    private findByIdRentalUseCase: FindByIdRentalUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdRentalUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}