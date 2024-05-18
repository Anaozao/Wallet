import ExpensesTable from "../../components/ExpensesTable/ExpensesTable";
import WalletForm from "../../components/WalletForm/WalletForm";
import WalletHeader from "../../components/WalletHeader/WalletHeader";

function Wallet() {
  return (
    <main>
      <WalletHeader />
      <WalletForm />
      <ExpensesTable />
    </main>
  )
}

export default Wallet;