import { PrismaClient } from '@prisma/client'

type DataType = {
  prisma: PrismaClient | null
}

const data: DataType = {
  prisma: null
}


if (process.env.NODE_ENV === 'production')
  data.prisma = new PrismaClient()

else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  data.prisma = global.prisma
}

// FIXME: Remove the type casting
export default data.prisma as PrismaClient
