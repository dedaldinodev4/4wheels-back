import { Request, Response } from 'express'
import { FindByIdVehicleImageUseCase } from './FindByIdVehicleImageUseCase'


export class FindByIdVehicleImageController {
  constructor(
    private findByIdVehicleImageUseCase: FindByIdVehicleImageUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdVehicleImageUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}