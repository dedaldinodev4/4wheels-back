import {
  PrismaPhoneRepository
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { CreatePhoneController } from './CreatePhoneController'
import { CreatePhoneUseCase } from './CreatePhoneUseCase'


export const createPhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const createPhoneUseCase = new CreatePhoneUseCase(
    prismaPhoneRepository
  )
  const createPhoneController = new CreatePhoneController(
    createPhoneUseCase
  )

  return createPhoneController
}