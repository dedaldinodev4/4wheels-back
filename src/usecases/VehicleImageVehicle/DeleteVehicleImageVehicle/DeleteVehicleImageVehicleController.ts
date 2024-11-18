import { Request, Response } from 'express'
import { DeleteVehicleImageVehicleUseCase } from './DeleteVehicleImageVehicleUseCase'


export class DeleteVehicleImageVehicleController {
  constructor(
    private deleteVehicleImageVehicleUseCase: DeleteVehicleImageVehicleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteVehicleImageVehicleUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}