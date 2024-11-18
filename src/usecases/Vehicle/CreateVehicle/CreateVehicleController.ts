import { Request, Response } from 'express'
import { CreateVehicleUseCase } from './CreateVehicleUseCase'


export class CreateVehicleController {
  constructor(
    private createVehicleUseCase: CreateVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      acquisition_date, id_vehicleDetail, mileage,
      price, condition, type, availability, year, manufacturer,
      created_by
    } = request.body;

    try {
      const data = await this.createVehicleUseCase.execute({
        acquisition_date, id_vehicleDetail, mileage,
        price, condition, type, availability, year, manufacturer,
        created_by
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}