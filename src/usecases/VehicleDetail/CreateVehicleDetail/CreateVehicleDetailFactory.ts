import {
  PrismaVehicleDetailRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleDetailRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { CreateVehicleDetailController } from './CreateVehicleDetailController'
import { CreateVehicleDetailUseCase } from './CreateVehicleDetailUseCase'


export const createVehicleDetailFactory = () => {
  const prismaVehicleDetailRepository = new PrismaVehicleDetailRepository();
  
  const createVehicleDetailUseCase = new CreateVehicleDetailUseCase(
    prismaVehicleDetailRepository
  )
  const createVehicleDetailController = new CreateVehicleDetailController(
    createVehicleDetailUseCase
  )

  return createVehicleDetailController
}