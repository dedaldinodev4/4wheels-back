import { Request, Response } from 'express'
import { UpdateRentalUseCase } from './UpdateRentalUseCase'


export class UpdateRentalController {
  constructor(
    private updateRentalUseCase: UpdateRentalUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { start_date, end_date,
      initial_mileage, final_mileage, insurance_type
    } = request.body;

    try {
      const data = await this.updateRentalUseCase.execute(id, {
        start_date, end_date,
        initial_mileage, final_mileage, insurance_type
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}