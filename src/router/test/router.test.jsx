import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { client } from '../../api'
import { STORAGE_KEY } from '../../api/storage'
import { routes } from '../routes'

vi.mock('../../api')

// Mock successful login
vi.mocked(client).login.mockImplementation(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ access_token: 'token' }))
  return Promise.resolve()
})

describe('<Router />', () => {
  describe('Public pages', () => {
    it('should render the login page', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] })
      render(<RouterProvider router={router} />)
      expect(router.state.location.pathname).toEqual('/login')
    })
    it('should redirect to login page if there is no token', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/settings'] })
      render(<RouterProvider router={router} />)
      expect(router.state.location.pathname).toEqual('/login')
    })
    it('should redirect to home page after login', async () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] })
      render(<RouterProvider router={router} />)
      await userEvent.click(screen.getByText('Ingresar'))
      expect(router.state.location.pathname).toEqual('/')
      localStorage.clear()
    })
  })
  describe('Protected pages', () => {
    it('should render the protected page if there is a token', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ access_token: 'token' }))
      const router = createMemoryRouter(routes, { initialEntries: ['/'] })
      render(<RouterProvider router={router} />)
      expect(router.state.location.pathname).toEqual('/')
      localStorage.clear()
    })
    it('should redirect to home page if there is a token', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ access_token: 'token' }))
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] })
      render(<RouterProvider router={router} />)
      expect(router.state.location.pathname).toEqual('/')
      localStorage.clear()
    })
    it.todo('should redirect to login page on logout', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ access_token: 'token' }))
      const router = createMemoryRouter(routes, { initialEntries: ['/'] })
      render(<RouterProvider router={router} />)
      localStorage.clear()
    })
  })
})
