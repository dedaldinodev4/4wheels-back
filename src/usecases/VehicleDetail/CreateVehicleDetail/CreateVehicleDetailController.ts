import { Request, Response } from 'express'
import { CreateVehicleDetailUseCase } from './CreateVehicleDetailUseCase'


export class CreateVehicleDetailController {
  constructor(
    private createVehicleDetailUseCase: CreateVehicleDetailUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand, model, license_plate, color,
      description, fuelType, cylinders, typeOfclass
    } = request.body;

    try {
      const data = await this.createVehicleDetailUseCase.execute({
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