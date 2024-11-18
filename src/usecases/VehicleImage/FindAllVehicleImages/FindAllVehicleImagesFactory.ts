import {
  PrismaVehicleImageRepository
} from '../../../repositories/implementations/prisma/PrismaVehicleImageRepository'
import { FindAllVehicleImagesController } from './FindAllVehicleImagesController'
import { FindAllVehicleImagesUseCase } from './FindAllVehicleImagesUseCase'


export const findAllVehicleImagesFactory = () => {
  const prismaVehicleImageRepository = new PrismaVehicleImageRepository();
  const findAllVehicleImagesUseCase = new FindAllVehicleImagesUseCase(
    prismaVehicleImageRepository
  )
  const findAllVehicleImagesController = new FindAllVehicleImagesController(
    findAllVehicleImagesUseCase
  )

  return findAllVehicleImagesController
}