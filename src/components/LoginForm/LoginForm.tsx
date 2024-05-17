import React, { useState } from "react";
import styles from './LoginForm.module.css'
import { RiLoginBoxFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { saveLogin } from "../../redux/actions/actions";

function LoginForm() {
  const [loginInfos, setLoginInfos] = useState({email: '', password: ''})
  const dispatch = useDispatch()

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

  const handleLogin = () => {
    dispatch(saveLogin(loginInfos))
  }

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <div className={styles.loginLogoDiv}>
        <RiLoginBoxFill className={styles.loginLogo}/> Login
        </div>
        <div className={styles.emailDiv}>
          <label htmlFor="email-input"></label>
          <input
            placeholder="E-mail"
            className={styles.emailInput}
            type="email"
            id="email-input"
            name="email"
            onChange={ handleChange }
            />
        </div>
        <div className={styles.passwordDiv}>
          <label htmlFor="password-input"></label>
          <input
            placeholder="Senha"
            className={styles.passwordInput}
            type="password"
            id="password-input"
            name="password"
            onChange={ handleChange }
            />
        </div>
        <div className={styles.buttonDiv}>
          <button
            className={styles.button}
            type="button"
            disabled={ validadeLogin() }
            onClick={ handleLogin }
          >
            Entrar
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm;