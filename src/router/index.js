// @ts-check

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedLayout from '../layouts/ProtectedLayout'
import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Settings from '../pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    Component: ProtectedLayout,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: 'settings',
        Component: Settings,
      },
    ],
  },
  {
    path: '/login',
    Component: PublicLayout,
    children: [
      {
        path: '',
        Component: Login,
      },
    ],
  },
])

export { router, RouterProvider }
