import { readMe } from '@directus/sdk'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../api'
import Field from '../../components/Field'

import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function onLogin(event) {
    event.preventDefault()

    try {
      await client.login(email, password)
      await client.request(readMe())
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  function buildOnChange(setter) {
    return (value) => setter(value)
  }

  return (
    <div className="Login">
      <div>
        <h2 className="Login-title">Iniciar sesión</h2>
        <p className="Login-subtitle">
          Por favor, inicie sesión para continuar
        </p>
      </div>

      <form className="Login-form">
        <Field
          name="email"
          type="email"
          icon="email"
          label="Correo"
          defaultValue={email}
          onChange={buildOnChange(setEmail)}
        />
        <Field
          name="password"
          type="password"
          icon="lock"
          label="Contraseña"
          defaultValue={password}
          onChange={buildOnChange(setPassword)}
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
