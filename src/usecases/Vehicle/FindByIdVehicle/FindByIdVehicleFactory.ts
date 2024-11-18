import {
  PrismaVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleRepository'
import { FindByIdVehicleController } from './FindByIdVehicleController'
import { FindByIdVehicleUseCase } from './FindByIdVehicleUseCase'


export const findByIdVehicleFactory = () => {
  const prismaVehicleRepository = new PrismaVehicleRepository();
  const findByIdVehicleUseCase = new FindByIdVehicleUseCase(
    prismaVehicleRepository
  )
  const findByIdVehicleController = new FindByIdVehicleController(
    findByIdVehicleUseCase
  )

  return findByIdVehicleController
}