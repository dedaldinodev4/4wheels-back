import {
  PrismaVehicleDetailRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleDetailRepository'
import { UpdateVehicleDetailController } from './UpdateVehicleDetailController'
import { UpdateVehicleDetailUseCase } from './UpdateVehicleDetailUseCase'


export const updateVehicleDetailFactory = () => {
  const prismaVehicleDetailRepository = new PrismaVehicleDetailRepository();
  const updateVehicleDetailUseCase = new UpdateVehicleDetailUseCase(
    prismaVehicleDetailRepository
  )
  const updateVehicleDetailController = new UpdateVehicleDetailController(
    updateVehicleDetailUseCase
  )

  return updateVehicleDetailController
}