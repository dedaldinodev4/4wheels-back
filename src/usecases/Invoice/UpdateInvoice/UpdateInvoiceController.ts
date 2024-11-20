import { Request, Response } from 'express'
import { UpdateInvoiceUseCase } from './UpdateInvoiceUseCase'


export class UpdateInvoiceController {
  constructor(
    private updateInvoiceUseCase: UpdateInvoiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status, type } = request.body;

    try {
      const data = await this.updateInvoiceUseCase.execute(id, {
        status, type
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}