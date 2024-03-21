import classNames from 'classnames'
import Image, { ImageProps, StaticImageData } from 'next/image'

import style from './Img.module.css'


export default function ImageComponent (props: ImgProps) {
  const { alt, image, width, height, className, ...attrs } = props
  const clsName = classNames(style.picture, className)

  return <Image
    src={ image.src }
    alt={ alt }
    width={ width }
    height={ height || width }
    className={ clsName }
    quality={ 100 }
    {...attrs} />
}

ImageComponent.defaultProps = {
  alt:    '',
  image:  null,
  width:  640,
  height: null,
}

export type ImgProps = Omit<ImageProps & {
  image: StaticImageData
}, 'src'>
