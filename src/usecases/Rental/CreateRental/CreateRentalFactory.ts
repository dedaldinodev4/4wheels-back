import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { 
  CreateRentalController 
} from './CreateRentalController'
import { 
  CreateRentalUseCase 
} from './CreateRentalUseCase'


export const createRentalFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const createRentalUseCase = new CreateRentalUseCase(
    prismaRentalRepository
  )
  const createRentalController = new CreateRentalController(
    createRentalUseCase
  )

  return createRentalController
}