import { Request, Response } from 'express'
import { UpdateVehicleDetailUseCase } from './UpdateVehicleDetailUseCase'


export class UpdateVehicleDetailController {
  constructor(
    private updateVehicleDetailUseCase: UpdateVehicleDetailUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {   
      brand, model, license_plate, color,
      description, fuelType, cylinders, typeOfclass
    } = request.body;

    try {
      const data = await this.updateVehicleDetailUseCase.execute(id, {
        brand, model, license_plate, color,
        description, fuelType, cylinders, typeOfclass
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}