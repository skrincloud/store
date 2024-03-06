import Field from '../../components/Field'
import { useStore } from './store'

import './Login.css'

function Login() {
  const { email, password, setEmail, setPassword, onLogin } = useStore()

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
          onChange={setEmail}
        />
        <Field
          name="password"
          type="password"
          icon="lock"
          label="Contraseña"
          defaultValue={password}
          onChange={setPassword}
        />

        <button type="submit" onClick={onLogin} className="Login-form-button">
          Ingresar
        </button>
      </form>

      <a className="Login-form-forgot" href="/login">
        Olvidé mi contraseña
      </a>

      <p className="Login-form-register">
        ¿No tienes cuenta?&nbsp;<span>Contáctanos</span>
      </p>
    </div>
  )
}

export default Login
