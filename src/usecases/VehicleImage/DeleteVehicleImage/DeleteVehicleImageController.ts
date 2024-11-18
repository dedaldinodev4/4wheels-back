import { Request, Response } from 'express'
import { DeleteVehicleImageUseCase } from './DeleteVehiclImageUseCase'


export class DeleteVehicleImageController {
  constructor(
    private deleteVehicleImageUseCase: DeleteVehicleImageUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteVehicleImageUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}