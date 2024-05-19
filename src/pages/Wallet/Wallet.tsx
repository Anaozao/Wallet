import ExpensesTable from "../../components/ExpensesTable/ExpensesTable";
import WalletForm from "../../components/WalletForm/WalletForm";
import WalletHeader from "../../components/WalletHeader/WalletHeader";
import styles from './Wallet.module.css'

function Wallet() {
  return (
    <main className={styles.wallet}>
      <WalletHeader />
      <WalletForm />
      <ExpensesTable />
    </main>
  )
}

export default Wallet;