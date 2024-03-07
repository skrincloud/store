import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'

import './main.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
