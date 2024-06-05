import toClassNames, { Value } from 'classnames'
import { Fondamento, Inter, Lobster_Two, Gluten,  Epilogue, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets:  [ 'latin' ]
})

const epilogue = Epilogue({
  subsets:  [ 'latin' ],
  weight:   [ '100', '200', '300', '400', '800' ]
})

const gluten = Gluten({
  subsets:  [ 'latin' ],
  weight:   [ '100', '300', '400', '700', '900' ],
})

const lobster = Lobster_Two({
  subsets:  [ 'latin' ],
  weight:   [ '400', '700' ]
})

const montserrat = Montserrat({
  subsets:  [ 'latin' ],
  weight:   [ '400', '700', '900' ]
})

const fondamento = Fondamento({
  subsets:  [ 'latin' ],
  weight:   [ '400' ]
})

const fonts = {
  inter,
  gluten,
  lobster,
  epilogue,
  montserrat,
  fondamento,
}

export type FontName = keyof typeof fonts

export const classNameWithFont = (font: FontName) => (...classNames: Array<Value>) =>
  toClassNames(fonts[font].className, ...classNames)

export default fonts
