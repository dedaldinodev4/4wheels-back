import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { UpdateRentalController } from './UpdateRentalController'
import { UpdateRentalUseCase } from './UpdateRentalUseCase'


export const updateRentalFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const updateRentalUseCase = new UpdateRentalUseCase(
    prismaRentalRepository
  )
  const updateRentalController = new UpdateRentalController(
    updateRentalUseCase
  )

  return updateRentalController
}