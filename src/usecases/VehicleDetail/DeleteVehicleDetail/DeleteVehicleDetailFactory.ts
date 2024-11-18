import {
  PrismaVehicleDetailRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleDetailRepository'
import { DeleteVehicleDetailController } from './DeleteVehicleDetailController'
import { DeleteVehicleDetailUseCase } from './DeleteVehicleDetailUseCase'


export const deleteVehicleDetailFactory = () => {
  const prismaVehicleDetailRepository = new PrismaVehicleDetailRepository();

  const deleteVehicleDetailUseCase = new DeleteVehicleDetailUseCase(
    prismaVehicleDetailRepository
  )
  const deleteVehicleDetailController = new DeleteVehicleDetailController(
    deleteVehicleDetailUseCase
  )

  return deleteVehicleDetailController
}