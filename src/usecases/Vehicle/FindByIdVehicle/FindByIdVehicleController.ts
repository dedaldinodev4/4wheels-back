import { Request, Response } from 'express'
import { FindByIdVehicleUseCase } from './FindByIdVehicleUseCase'


export class FindByIdVehicleController {
  constructor(
    private findByIdVehicleUseCase: FindByIdVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdVehicleUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}