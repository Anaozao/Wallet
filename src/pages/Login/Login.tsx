import { IoWalletOutline } from "react-icons/io5";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}><IoWalletOutline /> Wallet</h1>
      <LoginForm />
    </main>
  )
}

export default Login;