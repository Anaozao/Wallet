import React, { useState } from "react";

function LoginForm() {
  const [loginInfos, setLoginInfos] = useState({email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfos((prev) => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  const validadeLogin = () => {
    const { email, password } = loginInfos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      !emailRegex.test(email)
      || password.length < 6
    )
  }

  return (
    <section>
      <form>
        <div>
          <label htmlFor="email-input">Email: </label>
          <input
            type="email"
            id="email-input"
            name="email"
            onChange={ handleChange }
            />
        </div>
        <div>
          <label htmlFor="password-input">Senha: </label>
          <input
            type="password"
            id="password-input"
            name="password"
            onChange={ handleChange }
            />
        </div>
        <div>
          <button
            type="button"
            disabled={ validadeLogin() }
          >
            Entrar
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm;