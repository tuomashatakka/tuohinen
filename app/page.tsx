import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'
import ContactForm from './_components/ContactForm'
import { Fragment } from 'react'
import { Subheading, Title } from '@/components/Type'
import Segment, { ScreenSize } from '@/components/Segment'
import Img from '@/lib/components/Img'
import { NavigationProvider } from './_components/NavigationContext'

export default function Home () {

  return <>
    <Segment variant='dark' title='Tietoa'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <Title>Kakkaa ja pissaa</Title>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
        </Column>
        <Column width={ 2 }>
          <Img image={bannerImage} />
        </Column>
      </>}
    </Segment>

    <Segment title='Kakkapissa 2'>
      {(Column) => <>
        <Column padding width={ 2 }>
          <Img image={bannerImage2} />
        </Column>
        <Column width={ 4 } minWidth={ ScreenSize.lg }>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          <Title>Kakkaa ja pissaa</Title>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          <Subheading>Kakkaa ja pissaa</Subheading>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
        </Column>
      </>}
    </Segment>

    <Segment variant='light' title='Luonnollista valoa'>
      {(Column) => <>
        <Column padding width={ 3 }>
          <Title>Luonnollista valoa</Title>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
        </Column>
        <Column width={ 3 }>
          <Img image={bannerImage3} />
        </Column>
      </>}
    </Segment>

    <Segment variant='dark' title='Luonnollista valoa, osa 2'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <Title>Luonnollista valoa</Title>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
        </Column>
        <Column width={ 2 } minWidth={ ScreenSize.sm }>
          <Img image={bannerImage2} />
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
