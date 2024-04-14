import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from '@/app/layout'

describe('Page layout', () => {
  it('renders a heading', () => {
    render(<Layout />)

    const mainContainer = screen.getByRole('main')

    expect(mainContainer).toBeInTheDocument()
  })
})
