/* eslint-disable react/no-unescaped-entities */
'use client'
import { Separator } from '@/components/Type'
import * as Segments from './_components/Segments'
import { maindisplay } from './_components/PageHeadImages'


export default function Home () {
  return <>
    <Segments.Etusivu /> 
    <section className='spacer-bg' style={{ backgroundImage: `url(${maindisplay.src})` }}></section>
    <Segments.OtaYhteytta />
    <Separator />
    <Segments.Galleria />
  </>
}
