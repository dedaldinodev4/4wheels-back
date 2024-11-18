import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { UpdateVehicleImageVehicleController } from './UpdateVehicleImageVehicleController'
import { UpdateVehicleImageVehicleUseCase } from './UpdateVehicleImageVehicleUseCase'


export const updateVehicleImageVehicleFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();
  const updateVehicleImageVehicleUseCase = new UpdateVehicleImageVehicleUseCase(
    prismaVehicleImageVehicleRepository
  )
  const updateVehicleImageVehicleController = new UpdateVehicleImageVehicleController(
    updateVehicleImageVehicleUseCase
  )

  return updateVehicleImageVehicleController
}