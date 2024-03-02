import Image, { ImageProps, StaticImageData } from 'next/image'


export function Background ({ image }: { image: string }) {
  const style = {
    backgroundImage: `url(${image})`
  }

  return <div className='background-image' style={style} />
}


export default function BackgroundImage ({ alt, image, ...props }: BackgroundImagePropTypes) {
  const { src, ...attrs } = props
  return <Image
    alt={alt || ''}
    src={image.src || src}
    quality={100}
    {...attrs} />
}

BackgroundImage.defaultProps = {
  alt: '',
  src: null,
}

type BackgroundImagePropTypes = ImageProps & {
  image: StaticImageData
}
