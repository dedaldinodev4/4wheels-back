import {
  PrismaVehicleImageRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageRepository'
import { DeleteVehicleImageController } from './DeleteVehicleImageController'
import { DeleteVehicleImageUseCase } from './DeleteVehiclImageUseCase'


export const deleteVehicleImageFactory = () => {
  const prismaVehicleImageRepository = new PrismaVehicleImageRepository();

  const deleteVehicleImageUseCase = new DeleteVehicleImageUseCase(
    prismaVehicleImageRepository
  )
  const deleteVehicleImageController = new DeleteVehicleImageController(
    deleteVehicleImageUseCase
  )

  return deleteVehicleImageController
}