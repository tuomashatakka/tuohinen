/* eslint-disable react/no-unescaped-entities */
'use client'
import { H2, H3, Ingress, Paragraph, Spacer, Separator } from '@/components/Type'
import Segment, { SegmentVariantType } from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import LightboxItem, { LightboxImageItem } from '@/lib/components/Lightbox'
import Img from '@/lib/components/Img'

// import ContentEditor from '@/lib/components/ContentEditor'

import photoIstuu from '@/public/hero/istuu.jpg'
import photoLaituri from '@/public/tuohinen-39.jpg'
import photoLahikuva from '@/public/tuohinen-40.jpg'
import photoPhotoshopMadeMeDoIt from '@/public/hero-001.jpg'
import photoNoise from '@/public/tuohinen-hero.jpg'
import heroLukee from '@/public/hero/lukee.jpg'
import heroTunnelmoi from '@/public/hero/tunnelmoi.jpg'
import heroHakkaa from '@/public/hero/hakkaa.jpg'
import heroKyykkii from '@/public/hero/kyykkii.jpg'


export default function Home () {
  return <>
    <Segment variant={ SegmentVariantType.dark } title='Visio'>
      {(Column) => <>
        <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
          <H2>Lämpöä ja tunnelmaa</H2>
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
          <Img alt='' image={ photoLaituri } />
        </Column>
      </>}
    </Segment>

    <Segment title='Hieman menneestä'>
      {(Column) => <>
        <Column width={ 2 }>
          <Img alt='' image={ photoLahikuva } />
        </Column>
        <Column padding width={ 4 } minWidth={ ScreenSize.lg }>
          <H3>Valmistettu sydämellä</H3>
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

    <Segment variant={ SegmentVariantType.light } title='Ekologisuus'>
      {(Column) => <>
        <Column padding width={ 3 }>
          <H2>Ekologisuus</H2>
          <Ingress>
            Valaisimet on valmistettu kierrätysmateriaaleista ekologisesti ja luontoa kunnioittaen, täysin käsityönä.
          </Ingress>
          <Spacer align='right' />
          <Paragraph>
            Valaisinmateriaaleina käytämme luonnollisesti kaatuneita koivuja. Luonto ohjaa ja materiaali puhuu puolestaan.
          </Paragraph>
          <Paragraph>
            "Ajatuksia on toki paljon, mutta usein on hyvä pysähtyä ja olla läsnä."
          </Paragraph>
          <Spacer align='right' />
          <H3>Kotimaasta, kierrätettynä ja uusiokäytettynä</H3>
          <Paragraph>
            Yksilölliset tunnelmavalaisimet ovat kotimaista käsityötä. Tuohisen arvot lepäävätkin vahvasti ekologisen
            kestävyyden ja luonnon monimuotoisuuden säilyttämisessä.
          </Paragraph>
          <Paragraph>
            Tuohisen arvoihin kuuluu, että mitään ei kaadeta turhaan. Materiaalit aina maanomistajan luvalla.
          </Paragraph>
          <Paragraph>
            Jokaisella valaisimella on oma tarinansa. Ennen kaikkea materiaalissa sen kunnioitus: historia, tarina, uusiokäyttö. Ajan patina.
            Materiaalia pitää osata lukea ja ennen kaikkea kunnioittaa. Sen muoto, ja olemus - kiertokulku.
          </Paragraph>

          <Spacer align='right' />

          <Ingress>
            Koivussa minua inspiroi moni asia: sen pelkistetty kauneus.
          </Ingress>
          <Paragraph>
            Hyvälaatuisen materiaalin käyttökelpoisuuteen vaikuttaa moni asia.
          </Paragraph>
          <Paragraph>
            On käynyt monesti niinkin, että maanomistajan siunaus on, mutta laadukasta,
            kriteerit täyttävää materiaalia ei löydy.
            Vaikein osuus materiaalin suhteen on löytää laadukas tuohirulla.
          </Paragraph>
          <Paragraph>
            Kaikki valaisimissa käytetyt tuohiaihiot on tarkkaan tarkistettu ja ehjiä.
          </Paragraph>
          <Paragraph>
            Metallivarret ovat kaikki kierrätysmateriaalia. Kaikkeen liittyy tarina,
            ja näiden osalta tarina jatkuu edelleen - uudenlaisena.
          </Paragraph>

          <Spacer align='right' />
          <Paragraph>
            Valmistettu rakkaudella ja tunteella luonnon kanssa harmoniassa. Luontoäidin säännöillä, sydämellä.
          </Paragraph>
        </Column>
      </>}
    </Segment>

    <Segment variant={ SegmentVariantType.dark } title='Artisti'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H2>Artisti</H2>
          <Ingress>
            Tompuri on koulutukseltaan kirvesmies. Metallihommia telakalla ja tehtailla.
            Helsingissä varttunut taiteilijasielu.
          </Ingress>
          <Paragraph>
            Tompuri toimi tatuointiartistina vuosia. Kaiken ohella hän on aina tehnyt taidetta.
          </Paragraph>
          <Paragraph>
            Aidon käsityöläisen kädenjälki näkyy tuohisen tuotteissa.
          </Paragraph>

          <Spacer align='right' />
          <H3>Meri & luonto</H3>
          <Paragraph>

          </Paragraph>
        </Column>
        <Column width={ 2 } minWidth={ ScreenSize.sm }>
          <LightboxItem id='photoPhotoshopMadeMeDoIt' description=''>
            <Img alt='' image={ photoPhotoshopMadeMeDoIt } />
          </LightboxItem>
        </Column>
      </>}
    </Segment>

    <Segment variant={ SegmentVariantType.light } title='Taide & tunnelma'>
      {(Column) => <>
        <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
          <H2>Taide & tunnelma</H2>
          <Ingress>
            Valaisimien saatavuus on täysin kytköksissä materiaalien saatavuuteen.
          </Ingress>
        </Column>
        <Column width={ 2 } minWidth={ ScreenSize.sm }>
          <LightboxItem id='photoPhotoshopMadeMeDoIt' description=''>
            <Img alt='' image={ photoPhotoshopMadeMeDoIt } />
          </LightboxItem>
        </Column>
      </>}
    </Segment>

    <Separator />

    <Segment title='Galleria'>
      {(Column) =>
        <Column width={ 1 } padding>
          <H3>Tunnelmaa luomaan</H3>
          <div className='gallery'>
            <LightboxImageItem description='Kuva 1' image={ heroLukee } />
            <LightboxImageItem description='Kuva 2' image={ heroTunnelmoi } />
            <LightboxImageItem description='Kuva 3' image={ heroHakkaa } />
            <LightboxImageItem description='Kuva 4' image={ heroKyykkii } />
            <LightboxImageItem description='Kuva 5' image={ photoIstuu } />
            <LightboxImageItem description='Kuva 6' image={ photoLaituri } />
            <LightboxImageItem description='Kuva 7' image={ photoLahikuva } />
            <LightboxImageItem description='Kuva 8' image={ photoPhotoshopMadeMeDoIt } />
            <LightboxImageItem description='Kuva 9' image={ photoNoise } />
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
