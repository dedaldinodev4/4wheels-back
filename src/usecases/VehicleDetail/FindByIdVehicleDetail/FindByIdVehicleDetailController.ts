import { Request, Response } from 'express'
import { FindByIdVehicleDetailUseCase } from './FindByIdVehicleDetailUseCase'


export class FindByIdVehicleDetailController {
  constructor(
    private findByIdVehicleDetailUseCase: FindByIdVehicleDetailUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdVehicleDetailUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}