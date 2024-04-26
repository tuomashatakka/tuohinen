/* eslint-disable react/no-unescaped-entities */
'use client'
import { Separator } from '@/components/Type'
import * as Segments from './_components/Segments'


export default function Home () {
  return <>
    <Segments.Visio />
    <Segments.Menneesta />
    <Segments.Ekologisuus />
    <Segments.Artisti />
    <Segments.Tunnelma />
    <Segments.Kartta />
    <Separator />
    <Segments.Galleria />
  </>
}
