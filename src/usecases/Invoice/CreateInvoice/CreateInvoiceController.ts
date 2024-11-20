import { Request, Response } from 'express'
import {
  CreateInvoiceUseCase
} from './CreateInvoiceUseCase'


export class CreateInvoiceController {
  constructor(
    private createInvoiceUseCase: CreateInvoiceUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id_payment, number, type, year
    } = request.body;

    try {
      const data = await this.createInvoiceUseCase.execute({
        id_payment, number, type, year
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}