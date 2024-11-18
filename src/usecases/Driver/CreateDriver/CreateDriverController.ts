import { Request, Response } from 'express'
import { CreateDriverUseCase } from './CreateDriverUseCase'


export class CreateDriverController {
  constructor(
    private createDriverUseCase: CreateDriverUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, identity,
      country, gender, birth } = request.body;

    try {
      const data = await this.createDriverUseCase.execute({
        name, identity,
        country, gender, birth
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}