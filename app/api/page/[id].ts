import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// eslint-disable-next-line import/prefer-default-export
export async function GET (request: Request, response: NextResponse) {
  const result = await prisma.page.findMany()
  response.json(result)
}
