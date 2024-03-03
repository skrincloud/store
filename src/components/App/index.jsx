import { readMe } from '@directus/sdk'
import { useEffect, useState } from 'react'
import { client } from '../../api'
import Home from '../../pages/Home'
import Login from '../../pages/Login'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    client
      .request(readMe())
      .then((user) => setUser(user))
      .catch(() => setUser({}))
  }, [])

  if (user === null) {
    return <div> Cargando... </div>
  }

  if (user && user.id) {
    return <Home />
  }

  return <Login setUser={setUser} />
}

export default App
