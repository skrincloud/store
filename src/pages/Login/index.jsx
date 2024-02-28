import { useState } from 'react';
import { client } from '../../server';
import { readMe } from '@directus/sdk';

function Login(props) {
  const { setUser } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onLogin(event) {
    event.preventDefault();

    try {
      await client.login(email, password)
      const user = await client.request(readMe())
      setUser(user);
    } catch (error) {
      console.error(error)
    }
  }

  function buildOnChange(setter) {
    return (event) => {
      setter(event?.target?.value);
    }
  }

  return (
    <div>
      <form>
        <div>
          <label>Correo</label>
          <input
            type="text"
            name="username"
            onChange={buildOnChange(setEmail)}
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={buildOnChange(setPassword)}
          />
        </div>

        <button type="submit" onClick={onLogin}>Ingresar</button>
      </form>
    </div>
  )
}

export default Login
