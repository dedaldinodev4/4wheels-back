import { Request, Response } from 'express'
import { CreateVehicleImageVehicleUseCase } from './CreateVehicleImageVehicleUseCase'


export class CreateVehicleImageVehicleController {
  constructor(
    private createVehicleImageVehicleUseCase: CreateVehicleImageVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id_vehicle, id_vehicleImage
    } = request.body;

    try {
      const data = await this.createVehicleImageVehicleUseCase.execute({
        id_vehicle, id_vehicleImage
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}