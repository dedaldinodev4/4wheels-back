import {
  PrismaVehicleDetailRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleDetailRepository'
import { FindByIdVehicleDetailController } from './FindByIdVehicleDetailController'
import { FindByIdVehicleDetailUseCase } from './FindByIdVehicleDetailUseCase'


export const findByIdVehicleDetailFactory = () => {
  const prismaVehicleDetailRepository = new PrismaVehicleDetailRepository();
  const findByIdVehicleDetailUseCase = new FindByIdVehicleDetailUseCase(
    prismaVehicleDetailRepository
  )
  const findByIdVehicleDetailController = new FindByIdVehicleDetailController(
    findByIdVehicleDetailUseCase
  )

  return findByIdVehicleDetailController
}