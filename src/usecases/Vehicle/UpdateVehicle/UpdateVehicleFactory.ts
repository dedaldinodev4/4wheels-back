import {
  PrismaVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleRepository'
import { UpdateVehicleController } from './UpdateVehicleController'
import { UpdateVehicleUseCase } from './UpdateVehicleUseCase'


export const updateVehicleFactory = () => {
  const prismaVehicleRepository = new PrismaVehicleRepository();
  const updateVehicleUseCase = new UpdateVehicleUseCase(
    prismaVehicleRepository
  )
  const updateVehicleController = new UpdateVehicleController(
    updateVehicleUseCase
  )

  return updateVehicleController
}