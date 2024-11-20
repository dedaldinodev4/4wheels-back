import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { 
  FindByIdRentalController 
} from './FindByIdRentalController'
import { 
  FindByIdRentalUseCase 
} from './FindByIdRentalUseCase'


export const findByIdRentalFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const findByIdRentalUseCase = new FindByIdRentalUseCase(
    prismaRentalRepository
  )
  const findByIdRentalController = new FindByIdRentalController(
    findByIdRentalUseCase
  )

  return findByIdRentalController
}