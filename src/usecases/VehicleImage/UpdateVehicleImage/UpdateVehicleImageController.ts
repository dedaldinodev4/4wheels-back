import { Request, Response } from 'express'
import { UpdateVehicleImageUseCase } from './UpdateVehicleImageUseCase'


export class UpdateVehicleImageController {
  constructor(
    private updateVehicleImageUseCase: UpdateVehicleImageUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {   
      title, path
    } = request.body;

    try {
      const data = await this.updateVehicleImageUseCase.execute(id, {
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