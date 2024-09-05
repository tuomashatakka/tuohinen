import classNames from 'classnames'
import Image, { ImageProps, StaticImageData } from 'next/image'

import styles from './Img.module.css'


export default function ImageComponent (props: ImgProps) {
  const { alt, image, width, height, className, style = {}, ...attrs } = props
  const clsName = classNames(styles.picture, className)

  return <Image
    src={ image.src }
    alt={ alt }
    style={{
      width:  width || '100%',
      height: height || '100%',
      ...style
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
