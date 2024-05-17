import { IoWalletOutline } from "react-icons/io5";
import styles from './WalletHeader.module.css'

function WalletHeader() {

  const getEmail = () => {
    return JSON.parse(localStorage.getItem('loginEmail') || '[]')
  }

  const email = getEmail()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}><IoWalletOutline /> Wallet</h1>
      <div className={styles.infoDiv}>
        <p>Email: {email}</p>
        <p>Despesas:</p>
        <p>BRL</p>
      </div>

    </header>
  )
}

export default WalletHeader;