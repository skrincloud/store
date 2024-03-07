// @ts-check

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes)

function Router() {
  return React.createElement(RouterProvider, { router })
}

export default Router
