import { Request, Response } from 'express'
import { UpdateDriverUseCase } from './UpdateDriverUseCase'


export class UpdateDriverController {
  constructor(
    private updateDriverUseCase: UpdateDriverUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, identity,
      country, gender, birth
    } = request.body;

    try {
      const data = await this.updateDriverUseCase.execute(id, {
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