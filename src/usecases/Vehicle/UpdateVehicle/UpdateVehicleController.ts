import { Request, Response } from 'express'
import { UpdateVehicleUseCase } from './UpdateVehicleUseCase'


export class UpdateVehicleController {
  constructor(
    private updateVehicleUseCase: UpdateVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {   acquisition_date, id_vehicleDetail, mileage,
      price, condition, type, availability, year, manufacturer,
      created_by
    } = request.body;

    try {
      const data = await this.updateVehicleUseCase.execute(id, {
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