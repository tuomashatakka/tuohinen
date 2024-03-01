import Image from 'next/image'

export function Background ({ image }) {
  const style = {
    backgroundImage: `url(${image})`
  }

  return <div className='background-image' style={style} />
}

export default function BackgroundImage ({ alt, image }) {
  return <div className='absolute -z-10'>
    <Image
      alt={alt}
      src={image}
      layout='fill'
      objectFit='cover'
      quality={100}
    />
  </div>

  //   <Image
  //     alt={alt}
  //     src={image}
  //     placeholder='blur'
  //     quality={100}
  //     fill
  //     sizes='100vw'
  //     style={{
  //       objectFit: 'cover',
  //     }}
  //   />
  // )
}
