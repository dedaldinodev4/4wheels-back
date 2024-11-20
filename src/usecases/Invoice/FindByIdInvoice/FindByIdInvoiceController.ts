import { Request, Response } from 'express'
import { FindByIdInvoiceUseCase } from './FindByIdInvoiceUseCase'


export class FindByIdInvoiceController {
  constructor(
    private findByIdInvoiceUseCase: FindByIdInvoiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdInvoiceUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}