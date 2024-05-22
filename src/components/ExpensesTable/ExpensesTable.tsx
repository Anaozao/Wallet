import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../types";
import styles from './ExpensesTable.module.css'
import { removeExpense, setEdit } from "../../redux/actions/actions";
import React from "react";

function ExpensesTable() {
  const dispatch = useDispatch()
  const { expenses } = useSelector((state: ReduxState) => state.walletReducer)
  const { edit } = useSelector((state: ReduxState) => state.walletReducer.edit)


  const removeItem = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id)
    localStorage.setItem('expenses', JSON.stringify(newExpenses))
    dispatch(removeExpense(newExpenses))
  }

  const handleEdit = (id: number) => {
    dispatch(setEdit({edit: true, expenseId: id }))
  }

  if (expenses.length < 1) return <h1 className={styles.emptyMessage}>Nenhuma despesa na lista</h1>
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
        { expenses.map(({description, category, currency, id, method, value, exchangeRates}) => {
          // const curr = exchangeRates && exchangeRates[currency].ask
          return (
            <tr key={id} className={styles.expenses}>
                <td>{description}</td>
                <td>{category}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currency}</td>
                <td>{exchangeRates && Number((exchangeRates[currency].ask)).toFixed(2)}</td>
                <td>{exchangeRates && (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td>Real</td>
                <td className={styles.buttonTd}>
                  <button
                    disabled={edit}
                    className={styles.editBtn}
                    onClick={() => handleEdit(id)}
                  >
                    Editar
                  </button>
                  <button
                    disabled={edit}
                    className={styles.removeBtn}
                    onClick={() =>  removeItem(id) }
                  >
                    Excluir
                  </button>
                </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ExpensesTable;