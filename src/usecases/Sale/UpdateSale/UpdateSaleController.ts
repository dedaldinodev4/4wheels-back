import { Request, Response } from 'express'
import { UpdateSaleUseCase } from './UpdateSaleUseCase'


export class UpdateSaleController {
  constructor(
    private updateSaleUseCase: UpdateSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { delivery_date, status } = request.body;

    try {
      const data = await this.updateSaleUseCase.execute(id, {
        delivery_date, status
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}