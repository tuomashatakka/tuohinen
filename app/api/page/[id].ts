import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// eslint-disable-next-line import/prefer-default-export
export async function GET (request: Request, response: NextResponse) {
  const result = await prisma.page.findMany()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  response.json(result)
}
