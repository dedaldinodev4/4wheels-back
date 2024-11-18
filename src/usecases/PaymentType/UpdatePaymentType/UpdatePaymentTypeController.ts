import { Request, Response } from 'express'
import { UpdatePaymentTypeUseCase } from './UpdatePaymentTypeUseCase'


export class UpdatePaymentTypeController {
  constructor(
    private updatePaymentTypeUseCase: UpdatePaymentTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, status } = request.body;

    try {
      const data = await this.updatePaymentTypeUseCase.execute(id, {
        name, status
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}