import Image, { ImageProps, StaticImageData } from 'next/image'
import { AnimationEventHandler, createRef, EventHandler, ForwardedRef, forwardRef, Ref, RefObject, UIEventHandler, useEffect } from 'react'


export function Background ({ image }: { image: string }) {
  const style = {
    backgroundImage: `url(${image})`
  }

  return <div className='background-image' style={style} />
}


function BackgroundImage ({ alt, image, ...props }: BackgroundImagePropTypes, ref?: Ref<HTMLImageElement>) {
  const { width, height, ...attrs } = props

  return <Image
    ref={ ref }
    alt={alt || ''}
    src={image.src}
    width={width || 640}
    height={height || 640}
    quality={100}
    {...attrs} />
}

type BackgroundImagePropTypes = Omit<ImageProps, 'src'> & {
  image: StaticImageData,
}

// eslint-disable-next-line react/display-name
const BackgroundImageWithRef = forwardRef(BackgroundImage)

export { BackgroundImageWithRef }

export default BackgroundImage
