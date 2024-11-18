import { Request, Response } from 'express'
import { CreateVehicleImageUseCase } from './CreateVehicleImageUseCase'


export class CreateVehicleImageController {
  constructor(
    private createVehicleImageUseCase: CreateVehicleImageUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title, path
    } = request.body;

    try {
      const data = await this.createVehicleImageUseCase.execute({
        title, path
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}