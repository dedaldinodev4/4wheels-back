import {
  PrismaVehicleImageVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageVehicleRepository'
import { FindAllVehicleImageVehiclesController } from './FindAllVehicleImageVehiclesController'
import { FindAllVehicleImageVehiclesUseCase } from './FindAllVehicleImageVehiclesUseCase'


export const findAllVehicleImageVehiclesFactory = () => {
  const prismaVehicleImageVehicleRepository = new PrismaVehicleImageVehicleRepository();
  const findAllVehicleImageVehiclesUseCase = new FindAllVehicleImageVehiclesUseCase(
    prismaVehicleImageVehicleRepository
  )
  const findAllVehicleImageVehiclesController = new FindAllVehicleImageVehiclesController(
    findAllVehicleImageVehiclesUseCase
  )

  return findAllVehicleImageVehiclesController
}