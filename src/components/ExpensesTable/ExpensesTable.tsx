import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../types";
import styles from './ExpensesTable.module.css'
import { removeExpense } from "../../redux/actions/actions";

function ExpensesTable() {
  const dispatch = useDispatch()
  const { expenses } = useSelector((state: ReduxState) => state.walletReducer)



  const removeItem = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id)
    dispatch(removeExpense(newExpenses))
  }
  if (expenses.length < 1) return <h1>Nenhuma despesa na lista</h1>
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.theadTh}>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        { expenses.map(({description, category, currency, id, method, value, exchangeRates}) => (
          <tr key={id} className={styles.expenses}>
            <td>{description}</td>
            <td>{category}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{currency}</td>
            <td>{Number((exchangeRates[currency].ask)).toFixed(2)}</td>
            <td>{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
            <td>Real</td>
            <td className={styles.buttonTd}>
              <button className={styles.editBtn}>Editar</button>
              <button className={styles.removeBtn} onClick={() =>  removeItem(id) }>Excluir</button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default ExpensesTable;