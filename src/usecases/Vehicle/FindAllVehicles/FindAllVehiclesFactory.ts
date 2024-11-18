import {
  PrismaVehicleRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleRepository'
import { FindAllVehiclesController } from './FindAllVehiclesController'
import { FindAllVehiclesUseCase } from './FindAllVehiclesUseCase'


export const findAllVehiclesFactory = () => {
  const prismaVehicleRepository = new PrismaVehicleRepository();
  const findAllVehiclesUseCase = new FindAllVehiclesUseCase(
    prismaVehicleRepository
  )
  const findAllVehiclesController = new FindAllVehiclesController(
    findAllVehiclesUseCase
  )

  return findAllVehiclesController
}