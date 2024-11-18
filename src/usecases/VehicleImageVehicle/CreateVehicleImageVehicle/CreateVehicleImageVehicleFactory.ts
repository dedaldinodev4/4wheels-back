import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { CreateVehicleImageVehicleController } from './CreateVehicleImageVehicleController'
import { CreateVehicleImageVehicleUseCase } from './CreateVehicleImageVehicleUseCase'


export const createVehicleImageVehicleFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();
  
  const createVehicleImageVehicleUseCase = new CreateVehicleImageVehicleUseCase(
    prismaVehicleImageVehicleRepository
  )
  const createVehicleImageVehicleController = new CreateVehicleImageVehicleController(
    createVehicleImageVehicleUseCase
  )

  return createVehicleImageVehicleController
}