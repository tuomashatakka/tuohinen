import toClassNames, { Value } from 'classnames'
import { Inter, Lobster_Two, Gluten,  Epilogue } from 'next/font/google'

const inter = Inter({
  subsets:  [ 'latin' ]
})

const epilogue = Epilogue({
  subsets:  [ 'latin' ]
})

const antonio = Gluten({
  subsets:  [ 'latin' ],
  weight:   [ '100', '400', '800' ]
})

const lobster = Lobster_Two({
  subsets:  [ 'latin' ],
  weight:   [ '400', '700' ]
})

const fonts = {
  inter,
  antonio,
  lobster,
  epilogue,
}

export type FontName = keyof typeof fonts

export const classNameWithFont = (font: FontName) => (...classNames: Array<Value>) =>
  toClassNames(fonts[font].className, ...classNames)

export default fonts
