import {
  PrismaVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { CreateVehicleController } from './CreateVehicleController'
import { CreateVehicleUseCase } from './CreateVehicleUseCase'


export const createVehicleFactory = () => {
  const prismaVehicleRepository = new PrismaVehicleRepository();
  const prismaUserRepository = new PrismaUserRepository();
  
  const createVehicleUseCase = new CreateVehicleUseCase(
    prismaVehicleRepository, prismaUserRepository
  )
  const createVehicleController = new CreateVehicleController(
    createVehicleUseCase
  )

  return createVehicleController
}