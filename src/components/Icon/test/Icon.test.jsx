import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Icon from '..'

describe('<Icon />', () => {
  it('should render with default props', () => {
    render(<Icon name="search" />)
    expect(screen.getByRole('img')).to.exist
  })
  it('should change the class based on color', () => {
    render(<Icon name="search" color="primary" />)
    expect(screen.getByRole('img').className).toContain('Icon--primary')
  })
  it('should include material class', () => {
    render(<Icon name="search" />)
    expect(screen.getByText('search').className).toContain('material-symbols-rounded')
  })
})
