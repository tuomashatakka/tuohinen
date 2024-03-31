import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'
import ContactForm from './_components/ContactForm'
import { H2, H3 } from '@/components/Type'
import Segment from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import Img from '@/lib/components/Img'
import { NavigationProvider } from './_components/NavigationContext'

export default function Home () {

  return <>
    <Segment variant='dark' title='Tietoa'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H3>Kakkaa ja pissaa</H3>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
        </Column>
        <Column width={ 2 }>
          <Img alt='' image={bannerImage} />
        </Column>
      </>}
    </Segment>

    <Segment title='Kakkapissa 2'>
      {(Column) => <>
        <Column padding width={ 2 }>
          <Img alt='' image={bannerImage2} />
        </Column>
        <Column padding width={ 4 } minWidth={ ScreenSize.lg }>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          <H2>Kakkaa ja pissaa</H2>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          <H3>Kakkaa ja pissaa</H3>
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
          sfdölkldgnbkjfgdn gkjfjnskafödslfjmngbkgfjdn gfkbgfjnxcvk bgjnsfdk gbnsgfkdlg gf
        </Column>
      </>}
    </Segment>

    <Segment variant='light' title='Luonnollista valoa'>
      {(Column) => <>
        <Column padding width={ 3 }>
          <H2>Luonnollista valoa</H2>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
        </Column>
        <Column width={ 3 }>
          <Img alt='' image={bannerImage3} />
        </Column>
      </>}
    </Segment>

    <Segment variant='dark' title='Luonnollista valoa, osa 2'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H2>Luonnollista valoa</H2>
          <p>
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
            kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          </p>
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
