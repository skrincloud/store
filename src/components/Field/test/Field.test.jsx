import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Field from '..'

describe('<Field />', () => {
  it('should render with default props', () => {
    render(<Field label="Test" icon="search" value="" onChange={Function()} />)
    expect(screen.getByText('Test').textContent).toBe('Test')
  })
})
