import {
  PrismaVehicleImageRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageRepository'
import { FindByIdVehicleImageController } from './FindByIdVehicleImageController'
import { FindByIdVehicleImageUseCase } from './FindByIdVehicleImageUseCase'


export const findByIdVehicleImageFactory = () => {
  const prismaVehicleImageRepository = new PrismaVehicleImageRepository();
  const findByIdVehicleImageUseCase = new FindByIdVehicleImageUseCase(
    prismaVehicleImageRepository
  )
  const findByIdVehicleImageController = new FindByIdVehicleImageController(
    findByIdVehicleImageUseCase
  )

  return findByIdVehicleImageController
}