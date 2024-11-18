import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { FindAllDriversController } from './FindAllDriversController'
import { FindAllDriversUseCase } from './FindAllDriversUseCase'


export const findAllDriversFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const findAllDriversUseCase = new FindAllDriversUseCase(
    prismaDriverRepository
  )
  const findAllDriversController = new FindAllDriversController(
    findAllDriversUseCase
  )

  return findAllDriversController
}