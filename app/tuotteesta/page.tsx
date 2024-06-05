// import prisma from '@/lib/prisma'
import * as Segments from '../_components/Segments'

// async function getPageData () {
//   const res   = await fetch('/api/page?slug=tuotteesta')
//   const data  = await res.json()

//   return data
// }

// export async function generateStaticParams () {
//   await prisma.page.findMany({ where: { published: true }})

//   return {
//     slug: 'tuotteesta'
//   }
// }

export default async function TuotePage (/*{ params }: { params: { slug: string }}*/) {
  // const pages = await prisma.page.findFirst({ where: { published: true, slug: params.slug }})

  return <>
    <Segments.Visio />
    <Segments.Ekologisuus />
    <Segments.Tunnelma />
    <Segments.Galleria />
  </>
}
