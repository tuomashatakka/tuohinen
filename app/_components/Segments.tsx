/* eslint-disable react/no-unescaped-entities */
'use client'

import { H2, H3, Ingress, Paragraph, Spacer, Separator, Strong } from '@/components/Type'
import Segment, { SegmentVariantType } from '@/components/Segment'
import { ScreenSize } from '@/lib/theme/ScreenSize'
import { LightboxImageItem } from '@/lib/components/Lightbox'
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
import photoTompuri from '@/public/tompuri.jpg'
import { ElementType } from 'react'
import useTranslation from '@/lib/i18n/useTranslation'

export const Etusivu = () => {
  const { t } = useTranslation()

  return <Segment padding variant={ SegmentVariantType.dark } title='Visio'>
    {(Column) => <>
      <Column
        width={ 1 }
        minWidth={ ScreenSize.lg }
        align='center'>
        <H2>{t('home.title')}</H2>
        <Paragraph>{t('home.intro.p1')}</Paragraph>
        <Paragraph>{t('home.intro.p2')}</Paragraph>
        <Paragraph>{t('home.intro.p3')}</Paragraph>
      </Column>
    </>
    }
  </Segment>
}


export const Tuote = () => {
  const { t } = useTranslation()

  return <Segment variant={ SegmentVariantType.dark }>
    {(Column: ElementType) => <>
      <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
        <H2>{t('product.title')}</H2>
        <Ingress>{t('product.intro')}</Ingress>
        <Paragraph>{t('product.description.p1')}</Paragraph>
        <Paragraph>{t('product.description.p2')}</Paragraph>
        <Spacer align='right'  />
        <Paragraph>{t('product.description.p3')}</Paragraph>
        <Paragraph>{t('product.description.p4')}</Paragraph>
        <Paragraph>{t('product.description.p5')}</Paragraph>
        <Spacer align='right'  />
        <Paragraph>{t('product.description.p6')}</Paragraph>
      </Column>
    </>
    }
  </Segment>
}

export const Muotoilija = () => {
  const { t } = useTranslation()

  return <Segment variant={ SegmentVariantType.dark } padding className='artist-section'>
    {(Column) => <>
      <Column width={ 2 } minWidth={ ScreenSize.md } className='profile-image'>
        <Img alt='' image={ photoTompuri } style={{ objectFit: 'contain' }} />
      </Column>
      <Column width={ 1 } minWidth={ ScreenSize.lg } />
      <Column width={ 5 } minWidth={ ScreenSize.lg } align='left'>
        <H2>{t('designer.title')}</H2>
        <Paragraph><Strong>Otto-Mikael Tompuri</Strong> {t('designer.intro')}</Paragraph>
        <Paragraph>{t('designer.description.p1')}</Paragraph>
        <Paragraph>{t('designer.description.p2')}</Paragraph>

        <Spacer />

        <H2>{t('nature.title')}</H2>
        <Ingress>{t('nature.intro')}</Ingress>
        <Paragraph>{t('nature.description.p1')}</Paragraph>
        <Paragraph>{t('nature.description.p2')}</Paragraph>
      </Column>
    </>
    }
  </Segment>
}


export const Tarina = () => {
  const { t } = useTranslation()

  return <Segment variant={ SegmentVariantType.dark }>
    {(Column: ElementType) => <>
      <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
        <Ingress>{t('story.intro')}</Ingress>
        <Paragraph>{t('story.description')}</Paragraph>
      </Column>
    </>
    }
  </Segment>
}

export const Visio = () => {
  const { t } = useTranslation()

  return <Segment variant={ SegmentVariantType.dark } title='Visio'>
    {(Column: ElementType) => <>
      <Column padding width={ 1 } minWidth={ ScreenSize.lg }>
        <H2>{t('vision.title')}</H2>
        <Ingress>{t('vision.intro')}</Ingress>
        <Paragraph>{t('vision.description.p1')}</Paragraph>
        <Paragraph>{t('vision.description.p2')}</Paragraph>
      </Column>
      <Column width={ 2 }>
        <Img alt='' image={ photoLaituri } />
      </Column>
    </>}
  </Segment>
}

export const OtaYhteytta = () => {
  const { t } = useTranslation()

  return <Segment title='Ota yhteyttä'>
    {(Column) => <>
      <Column padding width={ 3 } minWidth={ ScreenSize.lg }>
        <H2>{t('contact.title')}</H2>
        <Paragraph>
          {t('contact.email')} <a href='mailto:tompurintuohi@gmail.com'>tompurintuohi@gmail.com</a>
        </Paragraph>
        <Paragraph>
          {t('contact.phone')} <a href='tel.:+358465826396'>+358 46 582 6396</a>
        </Paragraph>
      </Column>
    </>}
  </Segment>
}

export const Galleria = () => {
  const { t } = useTranslation()

  return <Segment title='Galleria'>
    {(Column) => <Column width={ 1 } padding>
      <H3>{t('gallery.title')}</H3>
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
}
