import { readMe } from '@directus/sdk'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../api'
import { storage } from '../../api/storage'
import Field from '../../components/Field'
import ExpandedLayout from '../../layouts/ExpandedLayout'

import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    return (event) => {
      setter(event?.target?.value)
    }
  }

  useEffect(() => {
    const { access_token: token } = storage.get() || {}

    if (token) {
      navigate('/')
    }
  }, [navigate])

  return (
    <ExpandedLayout centered>
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
            value={email}
            type="email"
            icon="email"
            label="Correo"
            onChange={buildOnChange(setEmail)}
          />
          <Field
            name="password"
            value={password}
            type="password"
            icon="lock"
            label="Contraseña"
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
    </ExpandedLayout>
  )
}

export default Login
