import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { DeleteVehicleImageVehicleController } from './DeleteVehicleImageVehicleController'
import { DeleteVehicleImageVehicleUseCase } from './DeleteVehicleImageVehicleUseCase'


export const deleteVehicleImageVehicleFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();

  const deleteVehicleImageVehicleUseCase = new DeleteVehicleImageVehicleUseCase(
    prismaVehicleImageVehicleRepository
  )
  const deleteVehicleImageVehicleController = new DeleteVehicleImageVehicleController(
    deleteVehicleImageVehicleUseCase
  )

  return deleteVehicleImageVehicleController
}