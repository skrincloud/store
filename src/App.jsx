import { readMe } from '@directus/sdk';
import { useEffect, useState } from 'react';
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import { client } from './server/index.js';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    client.request(readMe())
      .then((user) => setUser(user))
      .catch(() => setUser({}));
  }, []);

  if (user === null) {
    return <div> Cargando... </div>;
  }

  if (user && user.id) {
    return <Home />;
  }

  return <Login setUser={setUser} />;
}

export default App
