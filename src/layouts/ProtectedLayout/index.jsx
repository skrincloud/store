import classnames from 'classnames'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { readToken } from '../../api/storage'

function ProtectedLayout() {
  const navigate = useNavigate()
  const className = classnames('ProtectedLayout')

  useEffect(() => {
    if (!readToken()) navigate('/login')
  }, [navigate])

  return (
    <div className={className}>
      <Outlet />
    </div>
  )
}

export default ProtectedLayout
