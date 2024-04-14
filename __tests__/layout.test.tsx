import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BodyContent from '@/app/_components/BodyContent'

describe('Page layout', () => {
  it('renders successfully', () => {
    render(<BodyContent />)

    const mainContainer = screen.getByRole('main')

    expect(mainContainer).toBeInTheDocument()
  })
})
