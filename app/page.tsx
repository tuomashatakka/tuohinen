'use client'
import Card from '@/lib/components/Card'
import ContactForm from './_components/ContactForm'
import { H2, H3, Heading, Ingress, Paragraph, Spacer, Separator, Title } from '@/components/Type'
import Segment from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import Img from '@/lib/components/Img'
import { NavigationProvider } from './_components/NavigationContext'
import LightboxItem from '../lib/components/Lightbox'
import { ClassType, ElementType, ReactElement, ReactNode } from 'react'

import photoIstuu from '@/public/hero/istuu.jpg'
import photoLaituri from '@/public/tuohinen-39.jpg'
import photoLahikuva from '@/public/tuohinen-40.jpg'
import photoPhotoshopMadeMeDoIt from '@/public/hero-001.jpg'
import photoNoise from '@/public/tuohinen-hero.jpg'
import heroLukee from '@/public/hero/lukee.jpg'
import heroTunnelmoi from '@/public/hero/tunnelmoi.jpg'
import heroHakkaa from '@/public/hero/hakkaa.jpg'
import heroKyykkii from '@/public/hero/kyykkii.jpg'


function fetchContent () {
  return <>
    <Ingress>
      Taiteilija Otto-Mikael Tompuri on halunnut antaa oikeuden ja estradin kansallispuullemme Koivulle. Pohjoisen symboliikan mukaan koivu on elämän ja kuoleman yhdistäjä. Tompurin tavoitteena on liittää kaatuneiden koivujen henki tunnelmallisiin valaisimiin.
    </Ingress>
    <Paragraph>
      Tärkeintä valaisimien suunnittelussa ja valmistamisessa on ymmärrys siitä, että luonto ohjaa ja määrää tahdin. Mitä vähemmän valaisimien materiaalia muokataan - sen parempi.
    </Paragraph>
    <Paragraph>
      Tompurin visio on tuoda luonto ihmisten kotiin. Tervetuloa nauttimaan valon ja varjon maailmaan ja tutustumaan Tuohisen maailmaan!
    </Paragraph>
  </>
}

export default function Home () {
  return <>
    <Segment variant='dark' title='Visio'>
      {(Column) => <>
        <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
          <H2>Luonnollista valoa</H2>
          <Ingress>
            Taiteilija Otto-Mikael Tompuri on halunnut antaa oikeuden ja estradin
            kansallispuullemme Koivulle. Pohjoisen symboliikan mukaan koivu on
            elämän ja kuoleman yhdistäjä. Tompurin tavoitteena on liittää kaatuneiden
            koivujen henki tunnelmallisiin valaisimiin.
          </Ingress>
          <Paragraph>
            Tärkeintä valaisimien suunnittelussa ja valmistamisessa on
            ymmärrys siitä, että luonto ohjaa ja määrää tahdin.
            Mitä vähemmän valaisimien materiaalia muokataan - sen parempi.
          </Paragraph>
          <Paragraph>
            Tompurin visio on tuoda luonto ihmisten kotiin. Tervetuloa nauttimaan
            valon ja varjon maailmaan ja tutustumaan Tuohisen maailmaan!
          </Paragraph>
        </Column>
        <Column width={ 2 }>
          <Img alt='' image={photoLaituri} />
        </Column>
      </>}
    </Segment>

    <Segment title='Hieman menneestä'>
      {(Column) => <>
        <Column width={ 2 }>
          <Img alt='' image={photoLahikuva} />
        </Column>
        <Column padding width={ 4 } minWidth={ ScreenSize.lg }>
          <H3>Valmistettu sydämellä </H3>
          <Paragraph>
            Tuohisen ja Tompurin yhteinen tarina alkoi vuonna 2016 heidän kohdatessa
            hämyisem lehdon katveessa. Kevätauringon pilkahdellessa puiden latvoista
            Tuohinen tarkkaili Tompurin metsässä samoilua.
            Voimakkaan yhteenkuuluvuuden tunteen voimalla Tuohinen teki jotain mitä
            ei ollut tehnyt satoihin vuosiin — Tuohinen paljasti todellisen olomuotonsa Tompurille.
          </Paragraph>
          <Paragraph>
            Rakkaudesta luontoa kohtaan Tuohisen ja Tompurin yhteine taival alkoi Tompurin
            osaavissa käsissä. Kaatuneet koivut saavat uuden elämäntarinan kotien katseenvangitsijoina.
          </Paragraph>

          <Spacer align='right' />

          <H3>Luonnon kunniaksi</H3>
          <Paragraph>
            Luonnon monimuotoisuutta kunnioittaen Tuohinen -desingvalaisimien valmistukseen
            ei kaadeta yhtään elävää puuta, vaan materiaali kerätään kaatuneista puista
            maanomistajien suostumuksella.
          </Paragraph>
        </Column>
      </>}
    </Segment>

    <Segment variant='light' title='Luonnollista valoa'>
      {(Column) => <>
        <Column padding width={ 3 }>
          <H2>Valon ja varjon tanssi.</H2>
          <Spacer align='right' />
          <Ingress>
            ...ja Anssi (Kela)
          </Ingress>
          <Spacer align='right' />
          <Img alt='' image={photoNoise} />
        </Column>
      </>}
    </Segment>

    <Segment variant='dark' title='Luonnollista valoa, osa 2'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H3>Valmistettu sydämellä</H3>
          <Paragraph>
            lisää pian lisää pian lisää pian lisää pian lisää pian
            lisää pian lisää pian lisää pian lisää pian lisää pian
            lisää pian lisää pian lisää pian lisää pian lisää pian
          </Paragraph>
          <Spacer align='right' />
          <H3>Valo, tiennäyttäjä</H3>
          <Paragraph>
          lisää pian lisää pian lisää pian lisää pian lisää pian
            lisää pian lisää pian lisää pian lisää pian lisää pian
            lisää pian lisää pian lisää pian lisää pian lisää pian
          </Paragraph>
        </Column>
        <Column width={ 2 } minWidth={ ScreenSize.sm }>
          <Img alt='' image={photoPhotoshopMadeMeDoIt} />
        </Column>
      </>}
    </Segment>

    <Separator />

    <Segment title='Galleria'>
      {(Column) =>
        <Column width={ 1 } padding>
          <H3>Tunnelmaa luomaan</H3>
          <div className='gallery'>
            <LightboxItem id='image1' description='Kuva 3' image={heroLukee} />
            <LightboxItem id='image2' description='Kuva 5' image={heroTunnelmoi} />
            <LightboxItem id='image3' description='Kuva 4' image={heroHakkaa} />
            <LightboxItem id='image4' description='Kuva 1' image={heroKyykkii} />
            <LightboxItem id='image5' description='Kuva 2' image={photoIstuu} />
            <LightboxItem id='image6' description='Kuva 3' image={photoLaituri} />
            <LightboxItem id='image7' description='Kuva 1' image={photoLahikuva} />
            <LightboxItem id='image8' description='Kuva 2' image={photoPhotoshopMadeMeDoIt} />
            <LightboxItem id='image9' description='Kuva 3' image={photoNoise} />
          </div>
          <Separator />
        </Column>
      }
    </Segment>

    {/* <div className='cards'>
      <Card title='tuote 1' image={bannerImage}>
        Ensimmäinen tuote!
      </Card>

      <Card title='tuote 2' image={bannerImage2}>
        tokca tuote!
      </Card>

      <Card title='tuote 3' image={bannerImage3}>
        3. tuote!
      </Card>
    </div>

    <Separator />

    <div className='cards'>
      <Card title='tuote 1' image={bannerImage}>
        Ensimmäinen tuote!
      </Card>

      <Card title='tuote 2' image={bannerImage3}>
        tokca tuote!
      </Card>
    </div>

    <Separator />

    <ContactForm /> */}
  </>
}

enum SegmentVariantType {
  'dark',
  'light',
}
