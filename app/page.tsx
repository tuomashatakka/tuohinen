/* eslint-disable react/no-unescaped-entities */
'use client'
import { Separator } from '@/components/Type'
import * as Segments from './_components/Segments'


export default function Home () {
  return <>
    <Segments.Kasityo />
    <Segments.Visio />
    <Segments.Menneesta />
    <Segments.Ekologisuus />
    <Segments.Artisti />
    <Segments.Tunnelma />
    <Segments.OtaYhteytta />
    <Separator />
    <Segments.Galleria />
  </>
}
