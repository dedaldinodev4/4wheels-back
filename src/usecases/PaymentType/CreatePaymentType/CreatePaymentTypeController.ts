import { Request, Response } from 'express'
import { 
  CreatePaymentTypeUseCase 
} from './CreatePaymentTypeUseCase'


export class CreatePaymentTypeController {
  constructor(
    private createPaymentTypeUseCase: CreatePaymentTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const data = await this.createPaymentTypeUseCase.execute({
        name
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}