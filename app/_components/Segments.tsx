/* eslint-disable react/no-unescaped-entities */
'use client'

import { H2, H3, Ingress, Paragraph, Quote, Spacer, Separator } from '@/components/Type'
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
import { ElementType } from 'react'

export const Etusivu = () => <Segment variant={ SegmentVariantType.dark } title='Visio'>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Suomalaista valaisintaidetta käsityönä</H2>
      <Paragraph>
        Muotoilija Otto-Mikael Tompuri antaa estradin kansallispuullemme koivulle ja sen
        pelkistetylle kauneudelle. Valaisimen katseenvangitsijoina toimivat käsin koverretut
        tuohirullat, joiden lovista läpäisevä valo luo ympäristöönsä valojen ja varjojen leikin.
        Tompurin arvot lepäävät vahvasti ekologisen kestävyyden ja luonnon monimuotoisuuden
        säilyttämisessä. Valaisimissa käytetyt metallivarret ovat kierrätysmateriaalia eikä valaisimiin
        ole kaadettu yhtäkään elävää puuta. Tärkeintä valaisimien suunnittelussa ja
        valmistamisessa on ymmärrys siitä, että luonto ohjaa ja määrää tahdin. Mitä vähemmän
        valaisimien materiaalia muokataan - sen parempi.
      </Paragraph>
    </Column>
  </>
  }
</Segment>


export const Tuote = () => <Segment variant={ SegmentVariantType.dark }>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Tuote</H2>
      <Ingress>
        Tuohinen -tunnelmavalaisimet valmistetaan ekologisesti kierrätysmateriaaleista ja luontoa
        kunnioittaen, täysin käsityönä. (väliotsikko)
      </Ingress>
      <Paragraph>
        Tuohisen arvoihin kuuluu, että puita ei kaadeta turhaan. Valaisinmateriaaleina käytetään
        luonnollisesti kaatuneita koivuja, joita on etsitty maanomistajien luvalla aina pohjoisen
        tuntureista etelän saaristoihin saakka. Tarkkaan valikoidut kauneimmat yksilöt sahataan
        haluttuun kokoon, jonka jälkeen puuaines koverretaan käsin säilyttäen koivun syvimmän
        olemuksen: tuohen. Tuohirullan koverruksen ja puhdistuksen yhteydessä syntyvä
        puumateriaali pyritään pitkälti päästämään takaisin luonnon kiertokulkuun.
      </Paragraph>
      <Paragraph>
        Tyhjäksi koverretut tuohirullat ovat jokainen toisistaan poikkeava yksilö, mikä täytyy
        huomioida niiden käsittelyissä. Varjostimen tukirungot täytyy valmistaa oikean koon
        saavuttamiseksi jokaiseen valaisimeen erikseen sekä asettaa rullan hauraimpia osia
        tukemaan. Puun rungosta heijastuvat valonsäikeet saadaan aikaan tekemällä rullan
        läpäiseviä lävejä mukaillen puiden ainutlaatuisia kuviointeja. Työhön on osallistunut itse
        luontoäiti luoden puihin luonnollisesti syntyneitä kolosia. Lopputuloksena valaisimet
        synnyttävät valon ja varjojen leikin hämärtyviä iltoja ilahduttamaan.
      </Paragraph>
      <Paragraph>
        Valaisimien metallijalkojen päämateriaaleina toimivat kupari ja rosteri, joita on saatu muun
        muassa elojensa päädyillä olevista purkutaloista. Metalliputkien valintaan on antauduttu yhtä
        suurella antaumuksella kuin puumateriaalienkin. Kiiltävien metallipintojen lisäksi jaloissa voi
        nähdä ajan patinoimia yksilöitä, entisiä käyttötarkoituksia sekä tehdä päätelmiä saumojen
        juotoksia tehneistä työmiehistä.
      </Paragraph>
      <Paragraph>
        Tuohinen voi seistä ylpeänä niin silkin sileiksi hioittujen koivukiekkojen että eri kokoisten,
        muotoisten ja väristen luonnonkivien päällä. Valaisimien luonnonläheisiä olemuksia
        mukaillen kytkimillä varustetut sähköjohdot ovat pääasiassa verhottu punotulla
        hamppunarulla, mutta halutessaan sähköjohdot saa myös verhoamattomina.
      </Paragraph>
      <Paragraph>
        Valaisimet ovat vuosien kehittelyn ja opettelun tulosta. Yritysten, erheiden ja onnistumisten
        kautta Tompuri on oppinut lukemaan ja korostamaan luonnon kauneimpia piirteitä oikeilla,
        mahdollisimman luonnollisilla käsittelytavoilla. Itse materiaalia on kerätty noin kymmenen
        vuoden ajan testaillen erilaisien materiaalien käytettävyyttä. Jokaiseen työvaiheeseen on
        paneuduttu aikaa säästelemättä parhaan mahdollisen lopputuloksen saavuttamiseksi. Kukin
        valaisin varustetaan sitä parhaiten korostavalla lämpimän sävyisellä ja lämpeämättömällä
        led-lampulla.
      </Paragraph>
      <Paragraph>
        Tuohinen ei ole ainoastaan tunnelmavalaisin. Tuohinen on pala historiaa, kotimaisen
        käsityön taidonnäyte ja ennen kaikkea kunnianosoitus Suomen luontoa kohtaan. Valaisin,
        joka kertoo ainutlaatuista tarinaansa.
      </Paragraph>
    </Column>
  </>
  }
</Segment>



export const Runo = () => <Segment variant={ SegmentVariantType.dark }>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <Paragraph>
        Tirskuipa tiainen puusta:
        “Eipä nouse Osmon ohra,
        ei kasva Kalevan kaura,
        ilman maan alistamatta,
        ilman kasken kaatamatta,
        tuon tulella polttamatta.”
        Vaka vanha Väinämöinen
        teetti kirvehen terävän.
        Siitä kaatoi kasken suuren,
        mahottoman maan alisti.
        Kaikki sorti puut soreat;
        yhen jätti koivahaisen.
        Lintujen leposijaksi,
        käkösen kukuntapuuksi.
        Kalevala: toinen runo.
        Lieneekö sattumaa, että Väinämöinen jätti ainoastaan koivun kaatamatta kaskea varten?
        Koivun, jonka tummat kuvioinnit tanssivat vaalealla kanvaksellaan lumen keskeltä
        pilkistävien kivien lailla.
        Koivun, jonka kevään heleän vihreän lehdet talven synkkyyden kaikottaa.
        Koivun, jonka pehmeät lehdet yöttömänä yönä ihoon leyhähtää.
        Koivun, jonka syksy kultaan maalaa.
        Vaka vanha Väinämöinen,
        kerran tapasi Tuohisen,
        alla kaunihin koivahaisen.
        Kysyi vanha Väinämöinen:
        Ken lienehet matkalainen,
        kuis lepäät alla pesän tiaisen.
        Tuohinen siihen virkki:
        löysinpä minä puun kaunehimman,
        Luonnottaren anneista mahtavimman.
        Kuul’ kuinka sen kuiskaus soipi,
        lehtien laulun suuremmoisin,
        havinahan ihanimman.
        Ainiaaks’ tähän jäädä voisin,
        juurtununna puuhun Jumalan.
        Väinämöinen siit’ ilahtui,
        ajatus häl kirkastui.
        Ajattelee, arvelee,
        päässähänsä ynnää:
        aura miehel mainio,
        loistavahan kaksikko.
        Terävähän nuorikko,
        ja komea koivikko.
        Sanoi vanha Väinämöinen:
        sielut teiän voin yhteen liittää,
        jos mielit sa puutas hyysää.
        Koivahaisen pidellä hyvänä,
        säilyis liitto teijän pyhänä.
      </Paragraph>
    </Column>
  </>
  }
</Segment>


export const Muotoilija = () => <Segment variant={ SegmentVariantType.dark }>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Muotoilija</H2>
      <Paragraph>
        Otto-Mikael Tompuri on helsinkiläinen kirvesmies, hitsaaja, tatuointiartisti ja ennen kaikkea
        tekijä. Tompuri on pienestä pitäen kasvanut taiteen ympäröimänä perheessä, jossa
        taiteilijoita on esiintynyt useammassa sukupolvessa. Otto-Mikaelille taide näyttäytyy
        vapautena, itse elämänä, jota Tompuri ilmaisee omalla ainutkertaisella tyylillään.
      </Paragraph>

      <Paragraph>
        Ilman luontoa ei ole elämää, ajattelee Tompuri, jolle luonto merkitsee aitoa läsnäoloa. Luonto
        rauhoittaa, innostaa ja inspiroi. Koivun upea ja monipuolinen tuohi herätti Tompurille halun
        tuoda komean kansallispuumme taiteen avulla osaksi jokapäiväistä elämäämme. Ensin tuli
        idea, ideasta syntyi hahmotelmia, hahmotelmat muuttuivat ensimmäisiksi prototyypeiksi.
        Tompuri tutki ja kokeili, miten koivua parhaiten käsitellään: miten koivukiekko kuivataan
        parhaiten ilman halkeamien syntymistä, millainen kyllästysaine tuo koivun luontaiset kuviot
        parhaiten esille, miten tuohirulla saadaan säilymään yhtenäisenä… Tompuri kokeili ja oppi,
        oppi ja kokeili. Vuosien saatossa Tuohinen kasvoi ja kehittyi yhdessä Tompurin kanssa.
      </Paragraph>

      <Paragraph>
        Yhteisiin vuosiin on mahtunut koko tunteiden kirjo: oivalluksia, turhautumista, iloa,
        epätoivoa… Monesti Tompuri on pohtinut, onko työssä mitään järkeä. Mutta Tompurin oli
        pakko jatkaa, Otto-Mikaelista oli tullut Tuohi-Tompuri.
      </Paragraph>
    </Column>
  </>
  }
</Segment>


export const Tarina = () => <Segment variant={ SegmentVariantType.dark }>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Tuohisen tarina</H2>
      <Paragraph>
        Jo vuosisatojen ajan Tuohinen on vaeltanut ympäri Suomenmaan. Kevein kosketuksin, hellin
        henkäyksin ja puuskuttavin puhurein Tuohinen on karaissut suomalaisen koivun, joka elonsa
        päättyessä saa uuden elämän Otto-Mikael Tompurin osaavissa käsissä.
      </Paragraph>
      <Paragraph>
        Tuohisen ja Tompurin yhteinen tarina alkoi vuonna 2016 heidän kohdatessa hämyisen
        lehdon katveessa. Kevätauringon ilkikuristen säteiden pilkahdellessa puiden latvoista
        Tuohinen tarkkaili Tompurin metsässä samoilua. Voimakkaan yhteenkuuluvuuden tunteen
        johdosta Tuohinen teki jotain, mitä ei ollut satoihin vuosiin tehnyt: hän paljasti todellisen
        olomuotonsa Tompurille. Rakkaudesta luontoa kohtaan Tuohinen ja Tompuri päättivät
        toteuttaa yhteistä filosofiaa luonnon ehdoilla; osaavissa käsissä kaatuneet koivut saavat
        uuden elämäntarinan kotien katseenvangitsijoina. Tuohisen johdatuksella Tompuri kaivertaa
        koivun sisustan säilyttäen koivun sielun, tuohen.
      </Paragraph>
      <Paragraph>
        Valaisimien kuviot Tompuri on suunnitellut yhteistyössä luonnon kanssa siten, että koivun
        olemus pääsee esille elementissään. Tuohinen -valaisimien avulla voitkin tuoda palan
        Pohjoisen lumoavasta luonnosta kotiisi.
      </Paragraph>
    </Column>
  </>
  }
</Segment>


export const Visio = () => <Segment variant={ SegmentVariantType.dark } title='Visio'>
  {(Column: ElementType) => <>
    <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
      <H2>Pohjoisen symboliikassa koivu on elämän ja kuoleman yhdistäjä.</H2>
      <Ingress>
        Taiteilija Otto-Mikael Tompuri on halunnut antaa oikeuden ja estradin kansallispuullemme Koivulle.<br />
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

export const Kasityo = () => <Segment title='Käsityö'>
  {(Column) => <>
    <Column padding width={ 3 }>
      <H3>Suomalaista valaisintaidetta käsityönä</H3>
      <Paragraph>
        Yksilölliset tunnelmavalaisimet ovat kotimaista käsityötä.
      </Paragraph>
      <Paragraph>
        Jokaisella valaisimella on oma tarinansa. Täysin yksilöllisissä
        valaisimissa puu tyhjennetään käsin ja tuohirulla on leikkaamaton.
        Materiaalia pitää osata lukea ja ennen kaikkea
        kunnioittaa. Sen muoto, ja olemus - kiertokulku.
      </Paragraph>
      <Paragraph>
        Tuohisen arvot lepäävätkin vahvasti ekologisen
        kestävyyden ja luonnon monimuotoisuuden säilyttämisessä.
      </Paragraph>
    </Column>
  </>}
</Segment>

export const Ekologisuus = () => <Segment variant={ SegmentVariantType.light } title='Ekologisuus'>
  {(Column) => <>
    <Column padding width={ 3 }>
      <H2>Ekologisuus</H2>
      <Ingress>
        Valaisimet valmistetaan kierrätysmateriaaleista ekologisesti ja
        luontoa kunnioittaen, täysin käsityönä.
      </Ingress>
      <Paragraph>
        Tuohisen arvoihin kuuluu, että puita ei kaadeta turhaan.
        Valaisinmateriaaleina käytämme luonnollisesti kaatuneita koivuja.
      </Paragraph>
      <Paragraph>
        Luonto ohjaa ja materiaali puhuu puolestaan.
      </Paragraph>
      <Spacer align='right' />

      <Paragraph>
        Kaikki valaisimissa käytetyt tuohiaihiot on tarkkaan valikoitu. Valitsemme vain parhaan ja käsittelemme mahdollisimman vähän.
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

export const Artisti = () => <Segment variant={ SegmentVariantType.dark } title='Artisti'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Artisti ja artesaani Tompuri</H2>
      <Ingress>
        Taiteilija Otto Mikael Tompuri antaa estradin kansallispuullemme koivulle
        ja sen pelkistetylle kauneudelle.
        Aidon käsityöläisen kädenjälki näkyy Tuohisen tuotteissa.
      </Ingress>
      <Spacer align='right' />

      <Paragraph>
        Helsingissä varttunut Tompuri on koulutukseltaan kirvesmies.
        Hän on vuosia työskennellyt käsityön parissa; metallihommia telakalla ja tehtailla.
      </Paragraph>
      <Paragraph>
        Metallihommien ohessa Tompuri on toteuttanut itseään tatuointiartistina ja
        graafisen taiteen luojana yli vuosikymmenen ajan.
        Tatuoiminen on Tompurille yksi taiteen muoto muiden joukossa.
        Kuin maalaaminen, mutta elävällä kanvaksella.
      </Paragraph>
      <Paragraph>
        "Itsensä toteuttaminen taiteen keinoin on aina kulkenut elämässäni mukana, tilanteessa kuin tilanteessa."
      </Paragraph>
      <Spacer align='right' />

      <H3>Maailmanmatkaaja Tompuri</H3>
      <Paragraph>
        Tompuri on kiertänyt useita kertoja ympäri Aasiaa ja saanut usein kuulla paikallisilta kommentin:
      </Paragraph>
      <Quote>
        Et vaikuta yhtään suomalaiselta ihmiseltä, haha.
      </Quote>
      <Paragraph>
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
        "Koivussa minua inspiroi moni asia: sen pelkistetty kauneus."
      </Ingress>
      <Paragraph>
        Ei ole lainkaan itsestäänselvää että hyvää, kaunista ja laadukasta tuohiaihiota löytyy lainkaan -
        etsiminen voi kestää päiviä, vaikka hyvä apaja olisikin tiedossa.
      </Paragraph>
      <Paragraph>
        Tompuri on vuosien ajan tutkinut luontoa, etenkin koivun tuohta ja siihen vaikuttavia tekijöitä.
        Koivun tuohta tutkiessa on kierretty koko Suomi:
        Lapissa varhaiskoivuja lumikengillä samoillen, Etelä-Suomessa ympäri saaristoja veneillen.
      </Paragraph>

      <H3>Luontoa pitää osata lukea</H3>
      <Paragraph>
        Kuten valaisimien saatavuus on kytköksissä materiaalien saatavuuteen,
        materiaalien saatavuus puolestaan on täysin kytköksissä siihen mitä luonto antaa.
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

export const OtaYhteytta = () => <Segment title='Ota yhteyttä'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Kaikki valaisimet tilaustyönä</H2>
      <Paragraph>
        Ota yhteyttä <a href='mailto:ottomikaelt@gmail.com'>ottomikaelt@gmail.com</a>
      </Paragraph>
    </Column>
  </>}
</Segment>

export const Kartta = () => <Segment title='Ympäri suomen'>
  {(Column) => <>
    <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
      <H2>Esillä ympäri suomen</H2>
      <Ingress>
        Tuohisen valaisimet ovat esillä ympäri Suomen. Ravintoloissa,
        hotelleissa ja matkailukohteissa.
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
