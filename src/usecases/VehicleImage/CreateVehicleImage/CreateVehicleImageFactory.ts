import {
  PrismaVehicleImageRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageRepository'
import { CreateVehicleImageController } from './CreateVehicleImageController'
import { CreateVehicleImageUseCase } from './CreateVehicleImageUseCase'


export const createVehicleImageFactory = () => {
  const prismaVehicleImageRepository = new PrismaVehicleImageRepository();
  
  const createVehicleImageUseCase = new CreateVehicleImageUseCase(
    prismaVehicleImageRepository
  )
  const createVehicleImageController = new CreateVehicleImageController(
    createVehicleImageUseCase
  )

  return createVehicleImageController
}