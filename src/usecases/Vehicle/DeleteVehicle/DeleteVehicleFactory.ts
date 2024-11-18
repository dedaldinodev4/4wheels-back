import {
  PrismaVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteVehicleController } from './DeleteVehicleController'
import { DeleteVehicleUseCase } from './DeleteVehicleUseCase'


export const deleteVehicleFactory = () => {
  const prismaVehicleRepository = new PrismaVehicleRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteVehicleUseCase = new DeleteVehicleUseCase(
    prismaVehicleRepository,
    prismaUserRepository
  )
  const deleteVehicleController = new DeleteVehicleController(
    deleteVehicleUseCase
  )

  return deleteVehicleController
}