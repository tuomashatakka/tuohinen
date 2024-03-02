import { StaticImageData } from 'next/image'
import BackgroundImage from './Image'
import { Title } from './Type'


const CarouselSlide = ({ image }: { image: StaticImageData }) =>
  <div className='slide'>
    <BackgroundImage image={image} alt='kuva' />
  </div>

export default function CarouselComponent ({ slides }: CarouselProps) {
  return <section className='banner'>
    <div className='slides'>
      { slides.map((slide, key) => <CarouselSlide key={key} image={slide} />) }
    </div>
    <Title>asd basd</Title>
  </section>
}

CarouselComponent.defaultProps = {
  slides: []
}

type CarouselProps = {
  slides: Array<StaticImageData>
}
