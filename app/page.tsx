'use client'
import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'
import ContactForm from './_components/ContactForm'
import { H2, H3, Ingress, Paragraph, Spacer } from '@/components/Type'
import Segment from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import Img from '@/lib/components/Img'
import { NavigationProvider } from './_components/NavigationContext'

function fetchContent () {
  return <>
    <H2>Luonnollista valoa</H2>
    <Ingress>
        We are a small team of skilled artisans who handcraft beautiful,
        one-of-a-kind lamps. Our journey began in a small workshop, where we
        started experimenting with different materials and lamp-making techniques.
    </Ingress>
    <Paragraph>
        As we honed our craft, we realized there was a need for custom,
        artisanal lighting that captures the warmth and imperfection of handmade pieces.
        That&apos;s when we decided to turn our passion into a business.
    </Paragraph>
    <Paragraph>
        Today, we pour our hearts into designing and creating lamps that bring joy,
        comfort and a touch of nature into people&apos;s homes. We source
        high-quality materials like wood, glass, ceramic, metals and textiles,
        and combine them into lamps that are functional works of art.
    </Paragraph>

    <Spacer align='right' />

    <H3>Valmistettu sydämellä </H3>
    <Paragraph>
        Our process is hands-on from start to finish.
        We work closely with each client to understand their aesthetic,
        space and lighting needs. Then, we concept designs and collaborate
        to bring their vision to life. No two lamps are exactly alike.
    </Paragraph>
    <Paragraph>
        More than a lighting company, we consider ourselves artists and craftspeople.
        We take pride in what we do. Our goal is to craft lamps that become
        cherished pieces our customers will enjoy for years to come.
    </Paragraph>
  </>
}

export default function Home () {

  return <>
    <Segment variant='dark' title='Tietoa'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          { fetchContent() }
        </Column>
        <Column width={ 2 }>
          <Img alt='' image={bannerImage} />
        </Column>
      </>}
    </Segment>

    <Segment title='Kakkapissa 2'>
      {(Column) => <>
        <Column width={ 2 }>
          <Img alt='' image={bannerImage2} />
        </Column>
        <Column padding width={ 4 } minWidth={ ScreenSize.lg }>
          { fetchContent() }
        </Column>
      </>}
    </Segment>

    <Segment variant='light' title='Luonnollista valoa'>
      {(Column) => <>
        <Column padding width={ 3 }>
          <H2>Valon ja varjon tanssi.</H2>
          <Spacer align='right' />
          <Ingress>
              Our process is hands-on from start to finish.
              We work closely with each client to understand their aesthetic,
              space and lighting needs. Then, we concept designs and collaborate
              to bring their vision to life. No two lamps are exactly alike.
          </Ingress>
          <Spacer align='right' />
        </Column>
        <Column width={ 3 }>
          <Img alt='' image={bannerImage3} />
        </Column>
      </>}
    </Segment>

    <Segment variant='dark' title='Luonnollista valoa, osa 2'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H3>Valmistettu sydämellä ja dokaamalla,,</H3>
          <Paragraph>
              Our process is hands-on from start to finish.
              We work closely with each client to understand their aesthetic,
              space and lighting needs. Then, we concept designs and collaborate
              to bring their vision to life. No two lamps are exactly alike.
          </Paragraph>
          <Spacer align='right' />
          <H3>Valo, tiennäyttäjä, liibalaba paatos, eetos...</H3>
          <Paragraph>
              More than a lighting company, we consider ourselves artists and craftspeople.
              We take pride in what we do. Our goal is to craft lamps that become
              cherished pieces our customers will enjoy for years to come.
          </Paragraph>
        </Column>
        <Column width={ 2 } minWidth={ ScreenSize.sm }>
          <Img alt='' image={bannerImage2} />
        </Column>
      </>}
    </Segment>

    <Separator />

    <div className='cards'>
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

    <ContactForm />

    <Separator />
  </>
}


const Separator = () => <div className='' style={{ margin: '260px', borderBottom: '1px solid rgba(255,255,255,0.2)' }} />
