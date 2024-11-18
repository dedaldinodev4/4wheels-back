import {
  PrismaVehicleDetailRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleDetailRepository'
import { FindAllVehicleDetailsController } from './FindAllVehicleDetailsController'
import { FindAllVehicleDetailsUseCase } from './FindAllVehicleDetailsUseCase'


export const findAllVehicleDetailsFactory = () => {
  const prismaVehicleDetailRepository = new PrismaVehicleDetailRepository();
  const findAllVehicleDetailsUseCase = new FindAllVehicleDetailsUseCase(
    prismaVehicleDetailRepository
  )
  const findAllVehicleDetailsController = new FindAllVehicleDetailsController(
    findAllVehicleDetailsUseCase
  )

  return findAllVehicleDetailsController
}