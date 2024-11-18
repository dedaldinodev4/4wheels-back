import { config } from 'dotenv'

import { server } from './server'
import { PORT_APP } from './core';
import { prisma } from './lib/prisma';

config();

server.listen(PORT_APP || 3333, () => {
  console.clear();
  prisma.$connect()
    .then(() => {
      console.log(`Server running on port ${PORT_APP}.`)
      console.log(`Database connected.`)
    })
    .catch((err: unknown) => {
      console.error(err)
      prisma.$disconnect()
      process.exit(1)
    })

});