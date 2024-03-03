// @ts-check

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
  },
])

export { RouterProvider, router }
