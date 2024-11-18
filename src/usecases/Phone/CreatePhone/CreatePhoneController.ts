import { Request, Response } from 'express'
import { CreatePhoneUseCase } from './CreatePhoneUseCase'


export class CreatePhoneController {
  constructor(
    private createPhoneUseCase: CreatePhoneUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { number, id_user } = request.body;

    try {
      const data = await this.createPhoneUseCase.execute({
        number, id_user
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}