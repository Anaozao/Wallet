import { IoWalletOutline } from "react-icons/io5";
import styles from './WalletHeader.module.css'
import { useSelector } from "react-redux";
import { ReduxState } from "../../types";

function WalletHeader() {
  
  const { expenses } = useSelector((state: ReduxState) => state.walletReducer)

  const total = expenses.reduce((acc, expense) => { 
    return acc + (Number(expense.value) * Number(
      expense.exchangeRates
      && expense.exchangeRates[expense.currency as unknown as number].ask
    ))
  }, 0)

  const getEmail = () => {
    return JSON.parse(localStorage.getItem('loginEmail') || '[]')
  }
  const email = getEmail()


  return (
    <header className={styles.header}>
      <h1 className={styles.title}><IoWalletOutline /> Wallet</h1>
      <div className={styles.infoDiv}>
        <p>Email: {email}</p>
        <p>Despesas totais: {Number(total).toFixed(2)}</p>
        <p>BRL</p>
      </div>

    </header>
  )
}

export default WalletHeader;