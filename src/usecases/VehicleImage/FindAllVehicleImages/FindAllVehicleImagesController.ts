import { Request, Response } from 'express'
import { FindAllVehicleImagesUseCase } from './FindAllVehicleImagesUseCase'


export class FindAllVehicleImagesController {
  constructor(
    private findAllVehicleImagesUseCase: FindAllVehicleImagesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page = parseInt(request.query.page as string)
      const limit = parseInt(request.query.limit as string)
      const data = await this.findAllVehicleImagesUseCase.execute(page, limit)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}