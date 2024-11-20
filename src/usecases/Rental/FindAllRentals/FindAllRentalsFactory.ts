import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { FindAllRentalsController } from './FindAllRentalsController'
import { FindAllRentalsUseCase } from './FindAllRentalsUseCase'


export const findAllRentalsFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const findAllRentalsUseCase = new FindAllRentalsUseCase(
    prismaRentalRepository
  )
  const findAllRentalsController = new FindAllRentalsController(
    findAllRentalsUseCase
  )

  return findAllRentalsController
}