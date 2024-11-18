import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { FindByVehicleController } from './FindByVehicleController'
import { FindByVehicleUseCase } from './FindByVehicleUseCase'


export const findByVehicleFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();
  const findByVehicleUseCase = new FindByVehicleUseCase(
    prismaVehicleImageVehicleRepository
  )
  const findByVehicleController = new FindByVehicleController(
    findByVehicleUseCase
  )

  return findByVehicleController
}