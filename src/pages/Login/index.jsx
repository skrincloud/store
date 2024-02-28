import { useState } from 'react';
import { client } from '../../server';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLogin(event) {
    event.preventDefault();

    client.login(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
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
