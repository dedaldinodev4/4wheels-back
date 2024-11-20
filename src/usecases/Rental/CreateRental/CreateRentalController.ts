import { Request, Response } from 'express'
import {
  CreateRentalUseCase
} from './CreateRentalUseCase'


export class CreateRentalController {
  constructor(
    private createRentalUseCase: CreateRentalUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      start_date, end_date, initial_mileage, final_mileage,
      total_price, insurance_type, id_invoice, id_client,
      id_driver, id_vehicle
    } = request.body;

    try {
      const data = await this.createRentalUseCase.execute({
        start_date, end_date, initial_mileage, final_mileage,
        total_price, insurance_type, id_invoice, id_client,
        id_driver, id_vehicle
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}