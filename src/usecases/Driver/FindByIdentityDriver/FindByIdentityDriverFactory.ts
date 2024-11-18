import {
  PrismaDriverRepository
} from '../../../repositories/implementations/prisma/PrismaDriverRepository'
import { FindByIdentityDriverController } from './FindByIdentityDriverController'
import { FindByIdentityDriverUseCase } from './FindByIdentityDriverUseCase'


export const findByIdentityDriverFactory = () => {
  const prismaDriverRepository = new PrismaDriverRepository();
  const findByIdentityDriverUseCase = new FindByIdentityDriverUseCase(
    prismaDriverRepository
  )
  const findByIdentityDriverController = new FindByIdentityDriverController(
    findByIdentityDriverUseCase
  )

  return findByIdentityDriverController
}