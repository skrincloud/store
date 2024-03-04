import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Field from '..'

describe('<Field />', () => {
  it('should render with default props', () => {
    render(<Field label="test" />)
    expect(screen.getByRole('group')).to.exist
  })
  it('should not render label after typing and blurring', async () => {
    render(<Field label="test" icon="search" defaultValue="" onChange={Function()} />)
    expect(screen.queryByText('test')).to.exist
    const input = screen.queryByRole('textbox')
    await userEvent.type(input, 'test')
    expect(screen.queryByText('test')).to.exist
    await userEvent.click(document.body) // blur
    expect(screen.queryByText('test')).to.not.exist
  })
  it('should render the label based on focus', async () => {
    render(<Field label="test" icon="search" defaultValue="email" onChange={Function()} />)
    expect(screen.queryByText('test')).to.not.exist
    const input = screen.getByRole('textbox')
    await userEvent.click(input)
    expect(screen.queryByText('test')).to.exist
  })
  it('should render the label after clearing', async () => {
    render(<Field label="test" icon="search" defaultValue="" onChange={Function()} />)
    const input = screen.queryByRole('textbox')
    await userEvent.type(input, 'test')
    await userEvent.clear(input)
    await userEvent.click(document.body) // blur
    expect(screen.queryByText('test')).to.exist
  })
  it('should not render label when there is value', async () => {
    render(<Field label="test" icon="search" defaultValue="email" onChange={Function()} />)
    expect(screen.queryByText('test')).to.not.exist
  })
})
