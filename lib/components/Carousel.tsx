'use client'

import { StaticImageData } from 'next/image'
import BackgroundImage from './Image'
import classNames from 'classnames'
import { AnimationEventHandler, createRef, useCallback, useEffect, useLayoutEffect, useState } from 'react'

import styles from './Carousel.module.css'
import { openAsBlob, readFileSync } from 'fs'
import { nextImageLoaderRegex } from 'next/dist/build/webpack-config'
import { renderToPipeableStream } from 'react-dom/server'
import { imageOptimizer } from 'next/dist/server/image-optimizer'

type SlideProps = {
  image: StaticImageData,
  className?: string,
  onAnimationEnd?: AnimationEventHandler,
  animationPlayState?: 'playing' | 'paysed'
}


const CarouselSlide = ({ image, className, onAnimationEnd }: SlideProps) => {
  const classes = classNames(styles.slide, className)
  const ref = createRef<HTMLDivElement>()

  const handleAnimationEnd: AnimationEventHandler = (e) => {
    if (!ref.current || !onAnimationEnd)
      return
    ref.current.getAnimations().forEach(a => {
      a.pause()
    })
    onAnimationEnd(e)
  }

  return <div className={ classes } ref={ ref } onAnimationIteration={ handleAnimationEnd }>
    <BackgroundImage image={image} className={ styles.slide_image } width={800} height={800} alt='kuva' />
  </div>
}

// eslint-disable-next-line max-statements
export default function CarouselComponent ({ slides = [], className }: CarouselProps) {
  const [ current, setCurrent ] = useState<number | null>(null)
  const classes                 = classNames(styles.carousel, className)
  const ref                     = createRef<HTMLDivElement>()
  const canvas                  = createRef<HTMLCanvasElement>()

  const getCurrentSlide = useCallback(() => current ? current : 0, [ current ])

  const getSlidesCount = useCallback(() =>
    slides.length, [ slides ])

  const getNextIndex = useCallback(() =>
    (getCurrentSlide() + 1) % getSlidesCount(), [ getCurrentSlide, getSlidesCount ])

  const getPreviousIndex = useCallback(() =>
    (getCurrentSlide() - 1 + getSlidesCount()) % getSlidesCount(), [ getCurrentSlide, getSlidesCount ])

  const navigateNext = () =>
    setCurrent(getNextIndex())

  const navigatePrevious = () =>
    setCurrent(getPreviousIndex())

  const handleAnimationEnd: AnimationEventHandler = ( ) => {
    navigateNext()
  }


  useLayoutEffect(() => {
    if (ref.current !== null) {
      const node = ref.current

      if (typeof current === 'number') {
        Array.from(node.children)
          .forEach(child => child.classList.remove(styles.current_slide))
        node.children[current].classList.add(styles.current_slide)
        node.children[current].getAnimations().forEach(a => {
          a.play()
        })
      }
    }
  }, [ current, ref ])

  useEffect(() => {
    if (ref.current) {
      if (current === null)
        setCurrent(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ref, current ])

  useLayoutEffect(() => {
    if (canvas.current) {
      redraw(canvas.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ canvas ])

  return <div className={ classes }>
    <div className={ styles.presentation } ref={ ref }>
      {/* <canvas ref={ canvas } /> */}
      { slides.map((slide, key) => {
        const slideClassNames = classNames(styles.slide)

        // , {
        //   [styles.previous_slide]: key === getPreviousIndex(),
        //   [styles.next_slide]: key === getNextIndex(),
        //   [styles.current_slide]: key === current,
        // })

        return <CarouselSlide
          key={ key }
          onAnimationEnd={ handleAnimationEnd }
          className={ slideClassNames }
          image={ slides[key] } />
      })}
    </div>
    <aside className={ styles.controls } style={{ display: 'none' }}>
      <button onClick={ navigateNext }>Next</button>
      <button onClick={ navigatePrevious }>Previous</button>
    </aside>
  </div>
}

type CarouselProps = {
  slides: Array<StaticImageData>,
  className?: string,
}


const redraw = async (canvas: HTMLCanvasElement) => {

  // const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  // const i = await openAsBlob(require('@/public/hero/kyykkii.jpg').default.src)
  // console.log(i.stream.toString())

  // const bmpr = new ImageBitmapRenderingContext()
  // bmpr.canvas.getContext('2d')?.

  // const b=new ImageBitmap()
  // const t = await i.text

  // const a = readFileSync('@/public/hero/kyykkii.jpg')
  // const s= renderToPipeableStream(b)
  // s.pipe(createImageBitmap())
  // bmpr.transferFromImageBitmap()

  // ctx.drawImage(new ImageData(100, 100, {
  //   "colorSpace": "srgb"
  // }), 100, 100)

  // requestAnimationFrame(redraw)
}
