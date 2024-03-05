import classnames from 'classnames'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { readToken } from '../../api/storage'

import './PublicLayout.css'

function PublicLayout() {
  const navigate = useNavigate()
  const className = classnames('PublicLayout', {
    'PublicLayout--centered': true,
  })

  useEffect(() => {
    if (readToken()) navigate('/')
  }, [navigate])

  return (
    <div className={className}>
      <Outlet />
    </div>
  )
}

export default PublicLayout
