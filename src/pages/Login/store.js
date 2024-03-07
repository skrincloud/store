import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../api'

export function useStore() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onLogin(event) {
    event.preventDefault()

    try {
      await client.login(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
  }
}
