import {
  PrismaVehicleImageRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageRepository'
import { UpdateVehicleImageController } from './UpdateVehicleImageController'
import { UpdateVehicleImageUseCase } from './UpdateVehicleImageUseCase'


export const updateVehicleImageFactory = () => {
  const prismaVehicleImageRepository = new PrismaVehicleImageRepository();
  const updateVehicleImageUseCase = new UpdateVehicleImageUseCase(
    prismaVehicleImageRepository
  )
  const updateVehicleImageController = new UpdateVehicleImageController(
    updateVehicleImageUseCase
  )

  return updateVehicleImageController
}