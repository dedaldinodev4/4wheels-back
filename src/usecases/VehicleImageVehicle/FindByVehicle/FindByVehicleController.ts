import { Request, Response } from 'express'
import { FindByVehicleUseCase } from './FindByVehicleUseCase'


export class FindByVehicleController {
  constructor(
    private findByVehicleUseCase: FindByVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_vehicle } = request.params;

      const page = parseInt(request.query.page as string)
      const limit = parseInt(request.query.limit as string)
      const data = await this.findByVehicleUseCase.execute(id_vehicle, page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}