import {
  PrismaRentalRepository
} from '../../../repositories/implementations/prisma/PrismaRentalRepository'
import { FindByStatusRentalController } from './FindByStatusRentalController'
import { FindByStatusRentalUseCase } from './FindByStatusRentalUseCase'


export const findByStatusRentalFactory = () => {
  const prismaRentalRepository = new PrismaRentalRepository();
  const findByStatusRentalUseCase = new FindByStatusRentalUseCase(
    prismaRentalRepository
  )
  const findByStatusRentalController = new FindByStatusRentalController(
    findByStatusRentalUseCase
  )

  return findByStatusRentalController
}