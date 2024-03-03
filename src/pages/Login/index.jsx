import { readMe } from '@directus/sdk'
import { useState } from 'react'
import Field from '../../components/Field/index.jsx'
import { client } from '../../server'

import './Login.css'

function Login(props) {
  const { setUser } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onLogin(event) {
    event.preventDefault()

    try {
      await client.login(email, password)
      const user = await client.request(readMe())
      setUser(user)
    } catch (error) {
      console.error(error)
    }
  }

  function buildOnChange(setter) {
    return (event) => {
      setter(event?.target?.value)
    }
  }

  return (
    <div className="Login">
      <div>
        <p className="Login-title">Iniciar sesión</p>
        <p className="Login-subtitle">
          Por favor, inicie sesión para continuar
        </p>
      </div>

      <form className="Login-form">
        <Field
          name="email"
          value={email}
          onChange={buildOnChange(setEmail)}
          label="Correo"
          type="email"
        />
        <Field
          name="password"
          value={password}
          onChange={buildOnChange(setPassword)}
          label="Contraseña"
          type="password"
        />

        <button type="submit" onClick={onLogin} className="Login-form-button">
          Ingresar
        </button>
      </form>

      <p className="Login-form-forgot" href="">
        Olvidé mi contraseña
      </p>

      <p className="Login-form-register">
        ¿No tienes cuenta?&nbsp;<span>Contáctanos</span>
      </p>
    </div>
  )
}

export default Login
