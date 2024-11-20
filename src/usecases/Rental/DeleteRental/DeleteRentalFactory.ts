import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { 
  PrismaUserRepository 
} from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { DeleteRentalController } from './DeleteRentalController'
import { DeleteRentalUseCase } from './DeleteRentalUseCase'


export const deleteRentalFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const deleteRentalUseCase = new DeleteRentalUseCase(
    prismaRentalRepository,
    prismaUserRepository
  )
  const deleteRentalController = new DeleteRentalController(
    deleteRentalUseCase
  )

  return deleteRentalController
}