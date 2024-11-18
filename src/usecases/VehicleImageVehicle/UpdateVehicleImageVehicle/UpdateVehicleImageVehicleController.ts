import { Request, Response } from 'express'
import { UpdateVehicleImageVehicleUseCase } from './UpdateVehicleImageVehicleUseCase'


export class UpdateVehicleImageVehicleController {
  constructor(
    private updateVehicleImageVehicleUseCase: UpdateVehicleImageVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {   
      id_vehicle, id_vehicleImage
    } = request.body;

    try {
      const data = await this.updateVehicleImageVehicleUseCase.execute(id, {
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