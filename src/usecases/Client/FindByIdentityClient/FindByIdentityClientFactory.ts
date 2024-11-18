import {
  PrismaClientRepository
} from '../../../repositories/implementations/prisma/PrismaClientRepository'
import { FindByIdentityClientController } from './FindByIdentityClientController'
import { FindByIdentityClientUseCase } from './FindByIdentityClientUseCase'


export const findByIdentityClientFactory = () => {
  const prismaClientRepository = new PrismaClientRepository();
  const findByIdentityClientUseCase = new FindByIdentityClientUseCase(
    prismaClientRepository
  )
  const findByIdentityClientController = new FindByIdentityClientController(
    findByIdentityClientUseCase
  )

  return findByIdentityClientController
}