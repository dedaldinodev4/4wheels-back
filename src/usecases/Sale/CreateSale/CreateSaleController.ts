import { Request, Response } from 'express'
import { 
  CreateSaleUseCase 
} from './CreateSaleUseCase'


export class CreateSaleController {
  constructor(
    private createSaleUseCase: CreateSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id_invoice, id_client, id_vehicle, delivery_date, saler_id } = request.body;

    try {
      const data = await this.createSaleUseCase.execute({
        id_invoice, id_client, id_vehicle, delivery_date, saler_id
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}