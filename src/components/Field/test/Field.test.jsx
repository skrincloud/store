import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Field from '..'

describe('<Field />', () => {
  it('should render with default props', () => {
    render(<Field label="test" />)
    expect(screen.getByRole('group')).to.exist
  })
  it('should render the label based on focus', async () => {
    render(<Field label="test" icon="search" value="" onChange={Function()} />)
    const input = screen.getByRole('textbox')
    await userEvent.click(input)
    expect(screen.getByText('test')).to.exist
  })
  it('should not render label on blur', async () => {
    render(<Field label="test" icon="search" value="email" onChange={Function()} />)
    expect(screen.queryByText('test')).to.not.exist
  })
})
