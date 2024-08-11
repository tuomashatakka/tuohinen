import classNames from 'classnames'
import Image, { ImageProps, StaticImageData } from 'next/image'

import style from './Img.module.css'


export default function ImageComponent (props: ImgProps) {
  const { alt, image, width, height, className, ...attrs } = props
  const clsName = classNames(style.picture, className)

  return <Image
    src={ image.src }
    alt={ alt }
    style={{
      width:  width || '100%',
      height: height || '100%'
    }}
    width={ width || 640 }
    height={ height || width || 640 }
    className={ clsName }
    quality={ 100 }
    { ...attrs }
  />
}

export type ImgProps = Omit<ImageProps & {
  image: StaticImageData
}, 'src'>
