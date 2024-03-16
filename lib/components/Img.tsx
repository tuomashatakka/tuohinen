import classNames from 'classnames'
import Image, { ImageProps, StaticImageData } from 'next/image'


export default function ImageComponent (props: ImgProps) {
  const { alt, image, width, height, className, ...attrs } = props
  const clsName = classNames('picture', className)

  return <Image
    src={ image.src }
    alt={ alt }
    width={ width }
    height={ height }
    style={{ minHeight: height }}
    className={ clsName }
    quality={ 100 }
    {...attrs} />
}

ImageComponent.defaultProps = {
  alt:    '',
  image:  null,
  width:  640,
  height: 640,
}

type ImgProps = Omit<ImageProps & {
  image: StaticImageData
}, 'src'>
