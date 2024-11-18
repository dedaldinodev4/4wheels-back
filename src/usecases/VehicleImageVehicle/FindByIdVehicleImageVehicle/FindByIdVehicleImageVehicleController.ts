import { Request, Response } from 'express'
import { FindByIdVehicleImageVehicleUseCase } from './FindByIdVehicleImageVehicleUseCase'


export class FindByIdVehicleImageVehicleController {
  constructor(
    private findByIdVehicleImageVehicleUseCase: FindByIdVehicleImageVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdVehicleImageVehicleUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}