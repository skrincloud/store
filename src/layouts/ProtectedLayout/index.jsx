import classnames from 'classnames'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { client } from '../../api'
import { readToken } from '../../api/storage'
import { getAuthenticatedUser } from '../../api/users'
import { useGlobalStore } from '../../store'

function ProtectedLayout() {
  const navigate = useNavigate()
  const { setUser } = useGlobalStore()
  const className = classnames('ProtectedLayout')

  useEffect(() => {
    try {
      if (!readToken()) throw new Error('There is no token in the storage')
      getAuthenticatedUser().then(setUser)
    } catch {
      navigate('/login')
    }
  }, [navigate, setUser])

  return (
    <div className={className}>
      <Outlet />
      <button onClick={() => client.logout()}>Logout</button>
    </div>
  )
}

export default ProtectedLayout
