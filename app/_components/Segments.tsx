/* eslint-disable react/no-unescaped-entities */
'use client'
import { H2, H3, Ingress, Paragraph, Spacer, Separator } from '@/components/Type'
import Segment, { SegmentVariantType } from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import LightboxItem, { LightboxImageItem } from '@/lib/components/Lightbox'
import Img from '@/lib/components/Img'
import photoIstuu from '@/public/hero/istuu.jpg'
import photoLaituri from '@/public/tuohinen-39.jpg'
import photoLahikuva from '@/public/tuohinen-40.jpg'
import photoPhotoshopMadeMeDoIt from '@/public/hero/sahaa.jpg'
import photoMoottorisaha from '@/public/hero/moottorisaha.jpg'
import photoYopoyta from '@/public/hero/yopoyta.jpg'
import heroLukee from '@/public/hero/lukee.jpg'
import heroTunnelmoi from '@/public/hero/tunnelmoi.jpg'
import heroHakkaa from '@/public/hero/hakkaa.jpg'
import heroKyykkii from '@/public/hero/kyykkii.jpg'

export const Visio = () => <Segment variant={ SegmentVariantType.dark } title='Visio'>
  {(Column) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Lämpöä ja tunnelmaa</H2>
      <Ingress>
          Taiteilija Otto-Mikael Tompuri on halunnut antaa oikeuden ja estradin kansallispuullemme Koivulle.<br/>
          Pohjoisen symboliikan mukaan koivu on elämän ja kuoleman yhdistäjä.
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

export const Menneesta = () => <Segment title='Hieman menneestä'>
  {(Column) => <>
    <Column width={ 2 }>
      <Img alt='' image={ photoLahikuva } />
    </Column>
    <Column padding width={ 4 } minWidth={ ScreenSize.lg }>
      <H3>Valmistettu sydämellä</H3>
      <Paragraph>
          Tuohisen ja Tompurin yhteinen tarina alkoi vuonna 2016 heidän kohdatessa
          hämyisen lehdon katveessa. Kevätauringon pilkahdellessa puiden latvoista
          Tuohinen tarkkaili Tompurin metsässä samoilua.
          Voimakkaan yhteenkuuluvuuden tunteen voimalla Tuohinen teki jotain mitä
          ei ollut tehnyt satoihin vuosiin — Tuohinen paljasti todellisen olomuotonsa Tompurille.
      </Paragraph>
      <Paragraph>
          Rakkaudesta luontoa kohtaan Tuohisen ja Tompurin yhteinen taival alkoi Tompurin
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

export const Ekologisuus = () => <Segment variant={ SegmentVariantType.light } title='Ekologisuus'>
  {(Column) => <>
    <Column padding width={ 3 }>
      <H2>Ekologisuus</H2>
      <Ingress>
          Valaisimet on valmistettu kierrätysmateriaaleista ekologisesti ja
          luontoa kunnioittaen, täysin käsityönä.
      </Ingress>
      <Spacer align='right' />
      <Paragraph>
          Valaisinmateriaaleina käytämme luonnollisesti kaatuneita koivuja.
          Luonto ohjaa ja materiaali puhuu puolestaan.
      </Paragraph>
      <Paragraph>
          "Ajatuksia on toki paljon, mutta usein on hyvä pysähtyä ja olla läsnä."
      </Paragraph>
      <Spacer align='right' />
      <H3>Kotimaasta, kierrätettynä ja uusiokäytettynä</H3>
      <Paragraph>
          Yksilölliset tunnelmavalaisimet ovat kotimaista käsityötä.
          Tuohisen arvot lepäävätkin vahvasti ekologisen
          kestävyyden ja luonnon monimuotoisuuden säilyttämisessä.
      </Paragraph>
      <Paragraph>
          Tuohisen arvoihin kuuluu, että mitään ei kaadeta turhaan.
          Materiaalit aina maanomistajan luvalla.
      </Paragraph>
      <Paragraph>
          Jokaisella valaisimella on oma tarinansa. Ennen kaikkea
          materiaalissa sen kunnioitus: historia, tarina, uusiokäyttö.
          Ajan patina. Materiaalia pitää osata lukea ja ennen kaikkea
          kunnioittaa. Sen muoto, ja olemus - kiertokulku.
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
          Materiaalia pitää osata lukea, ja jos muokata haluaa, niin korostaen.
      </Paragraph>
    </Column>
  </>}
</Segment>

export const Artisti = () => <Segment variant={ SegmentVariantType.dark } title='Artisti'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Artistista, Tompurista</H2>
      <Ingress>
        Helsingissä varttunut Tompuri on koulutukseltaan kirvesmies.
        Hän on vuosia rehkinyt käsityöläisen hommien parissa; metallihommia telakalla ja tehtailla.
      </Ingress>
      <Ingress>
        Aidon käsityöläisen kädenjälki näkyy tuohisen tuotteissa.
      </Ingress>
      <Spacer align='right' />

      <Paragraph>
        Metallihommien ohessa Tompuri on toteuttanut itseään tatuointiartistina ja
        graafisen taiteen luojana yli vuosikymmenen ajan.
        Tatuoiminen on Tompurille yksi taiteen muoto muiden joukossa.
        Kuin maalaaminen, mutta elävällä kanvaksella.
      </Paragraph>
      <Ingress>
        Itsensä toteuttaminen taiteen keinoin on aina kulkenut elämässä mukana, tilanteessa kuin tilanteessa.
      </Ingress>
      <Spacer align='right' />

      <H3>Artisti ja artesaani</H3>
      <Paragraph>
        Taiteilija Otto Mikael Tompuri haluaa antaa estradin kansallispuullemme koivulle
        ja sen pelkistetylle kauneudelle. Valmistetut valaisimet on loihdittu yhdistämällä useamman vuosikymmenen kokemus
        toisaalta käytännön käsityöläisenä ja toisaalta luovana artistisieluna.
      </Paragraph>

      <H3>Tompuri, maailman matkaaja</H3>
      <Paragraph>
        Tompuri on kiertänyt useita kertoja ympäri Aasiaa ja saanut usein kuulla paikallisilta kommentin:
        <blockquote>Et vaikuta yhtään Suomalaiselta ihmiseltä, haha.</blockquote>
        Kyllä, tiedän, Tompuri on aina tällöin miettinyt.
      </Paragraph>
      <Paragraph>
        Tompuri rakastaa Aasialaista kulttuuria, etenkin Indonesiaa.
        Hänellä onkin rutkasti ystäviä - ja koti - sekä Suomessa että Sumatralla.
        Viime visiitillään Aasiassa hän vietti aikaa pienellä saarella Malaysiassa, <em>Tiomanissa</em>.
        Siellä paikallinen ravintolooitsijaystävä ehdotti hänelle, josko hän
        jäisi asumaan saarelle - oman studion voisi rakentaa aivan ravintolan viereen.
        Vaikka idea oli houkutteleva, Tompuri halusi palata Suomeen, juurilleen.
      </Paragraph>
    </Column>
    <Column width={ 2 } minWidth={ ScreenSize.sm }>
      <LightboxItem id='photoPhotoshopMadeMeDoIt' description=''>
        <Img alt='' image={ photoPhotoshopMadeMeDoIt } />
      </LightboxItem>
    </Column>
  </>}
</Segment>

export const Tunnelma = () => <Segment variant={ SegmentVariantType.light } title='Taide & tunnelma'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Taide & tunnelma</H2>
      <Ingress>
        On sitä huonoakin tuohta. Ja paljonkin...
      </Ingress>
      <Paragraph>
        Valaisimien saatavuus on täysin kytköksissä materiaalien saatavuuteen.
        Koko prosessi on pitkä ja kivinen. aina materiaalien hankkimisesta valaisimien viimeistelyyn asti.
        Ei ole lainkaan itsestäänselvyys, että hyvää, kaunista ja laadukasta tuohiaihiota löytyy lainkaan -
        etsiminen voi kestää päiviä, vaikka hyvä apaja olisikin tiedossa.
      </Paragraph>
      <Paragraph>
        Tompuri on vuosien ajan tutkinut luontoa, etenkin koivun tuohta ja siihen vaikuttavia tekijöitä.
        Koivun tuohta tutkiessa on valehtelematta kierretty koko Suomi:
        Lapissa varhaiskoivuja lumikengillä samoillen, Etelä-Suomessa ympäri saaristoja veneillen.
      </Paragraph>

      <H3>Luontoa pitää osata lukea</H3>
      <Paragraph>
        Kuten valaisimien saatavuus on kytköksissä materiaalien saatavuuteen,
        materiaalien saatavuus puolestaan on täysin kytköksissä siihen mitä luonto antaa.
        Esimerkiksi ulkoisesti hyvännäköinen lahopuu saattaa olla sammaleen puolelta täysin mätä;
        usean vuoden mättäillä makaaminen on tehnyt tehtävänsä, kuten luonnon kuuluukin -
        lahopuilla on tärkeä rooli luonnon monimuotoisuuden ylläpitämisessä.
      </Paragraph>
      <Paragraph>
        Pyrkimys on, että mitään ei oteta turhaan - jos edes otetaan.
        "En itsekään mene kalaan ja riistä sen henkeä jos en aio syödä", Tompuri tiivistää.
        "Luontoa ja sen herkkiä prosesseja haluan vaalia ja varjella viimeiseen asti."
      </Paragraph>
      <Paragraph>
        Kun hyvä tuohiaihio vihdoin löytyy, materiaali pestään ja puhdistetaan heti,
        alustavasti paikan päällä ja huolellisemmin sen kuljettua varastoon.
        Kaikki ylimääräinen jätetään luontoon myös tässä mielessä.
      </Paragraph>
    </Column>
    <Column width={ 2 } minWidth={ ScreenSize.sm }>
      <LightboxItem id='photoPhotoshopMadeMeDoIt' description=''>
        <Img alt='' image={ photoPhotoshopMadeMeDoIt } />
      </LightboxItem>
    </Column>
  </>}
</Segment>

export const Kartta = () => <Segment title='Ympäri suomen'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Esillä ympäri suomen</H2>
      <Ingress>
          Tuohisen valaisimet ovat esillä ympäri suomen. Ravintoloissa,
          hotelleissa ja matkailukohteissa. Nettisivuille päivittyy
          jatkossa kartta, josta voit nähdä missä valaisimet luovat tunnelmaa.
      </Ingress>
    </Column>
  </>}
</Segment>

export const Galleria = () => <Segment title='Galleria'>
  {(Column) => <Column width={ 1 } padding>
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
      <LightboxImageItem description='Kuva 9' image={ photoYopoyta } />
      <LightboxImageItem description='Kuva 9' image={ photoMoottorisaha } />
    </div>
    <Separator />
  </Column>}
</Segment>
