import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, router } from './router'

import './styles/main.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
