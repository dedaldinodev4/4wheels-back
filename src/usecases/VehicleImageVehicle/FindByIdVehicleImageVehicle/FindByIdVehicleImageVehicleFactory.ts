import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { FindByIdVehicleImageVehicleController } from './FindByIdVehicleImageVehicleController'
import { FindByIdVehicleImageVehicleUseCase } from './FindByIdVehicleImageVehicleUseCase'


export const findByIdVehicleImageVehicleFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();
  const findByIdVehicleImageVehicleUseCase = new FindByIdVehicleImageVehicleUseCase(
    prismaVehicleImageVehicleRepository
  )
  const findByIdVehicleImageVehicleController = new FindByIdVehicleImageVehicleController(
    findByIdVehicleImageVehicleUseCase
  )

  return findByIdVehicleImageVehicleController
}