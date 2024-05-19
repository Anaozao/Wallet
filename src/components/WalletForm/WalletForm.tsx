import { useDispatch, useSelector } from "react-redux"
import { Dispatch, ExpenseType, ReduxState } from "../../types"
import { useEffect, useState } from "react"
import { editExpenses, saveExpenses, setEdit, } from "../../redux/actions/actions";
import styles from './WalletForm.module.css'

function WalletForm() {
  const { currencies } = useSelector((state: ReduxState) => state.walletReducer)
  const { expenses } = useSelector((state: ReduxState) => state.walletReducer)
  const dispatch: Dispatch = useDispatch();
  const { edit } = useSelector((state: ReduxState) => state.walletReducer)
  const [formStyle, setFormStyle] = useState(styles.form)
  const [expense, setExpense] = useState<ExpenseType>({
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    category: 'Alimentação',
    description: '',
    id: 0,
  })

  const formatValue = (value: string) => {
    return value.replace(/\D/g, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpense((prev) => {
      const updateData = {
        ...prev,
        [e.target.name]: e.target.value,
      }
      if (e.target.name === 'value') {
        updateData.value = formatValue(e.target.value)
      }
      return updateData;
    })
  }

  const handleSave = () => {
    dispatch(saveExpenses(expense))
    setExpense({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      category: 'Alimentação',
      description: '',
      id: expense.id + 1,
    })
  }

  const validadeForm = () => {
    const { value, description } = expense
    return (
      value.length < 1
      || description.length < 2
    )
  }

  const confirmEdit = () => {
    const { value, category, currency, method, description} = expense
    const exchangeRates = expenses.find((expense) => expense.id === edit.expenseId)?.exchangeRates
    const newExpense = { value, currency, method , category, description, exchangeRates: exchangeRates, id: edit.expenseId }
  
    const newExpenses = expenses.map((expenseItem) => 
      expenseItem.id === edit.expenseId ? newExpense : expenseItem
    )

    setExpense({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      category: 'Alimentação',
      description: '',
      id: expense.id,
    })
    
    dispatch(editExpenses(newExpenses))
    dispatch(setEdit({edit: false, expenseId: 0}))
  }

  useEffect(() => {
    if (edit.edit) {
      setFormStyle(styles.editForm)
    } else {
      setFormStyle(styles.form)
    }
  }, [edit.edit])

  return (
      <form className={formStyle}>
        <div className={styles.inputDivs}>
          <label htmlFor="value-input">Valor: </label>
          <input
            className={styles.inputs}
            type="text"
            id="value-input"
            name="value"
            onChange={ handleChange }
            value={expense.value}
          />
        </div>

        <div className={styles.inputDivs}>
          <label htmlFor="currency-input">Moeda: </label>
          <select
            className={styles.inputs}
            onChange={ handleChange }
            name="currency"
            id="currency-input"
          >
            {currencies.map((currency) => (
              <option
                key={currency}
                value={currency}
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputDivs}>
          <label htmlFor="method">Método de pagamento: </label>
          <select
            className={styles.inputs}
            onChange={ handleChange }
            name="method"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </div>
        <div className={styles.inputDivs}>
          <label htmlFor="category">Categoria: </label>
          <select
            className={styles.inputs}
            onChange={ handleChange }
            name="category"
            id="category"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>
        <div className={styles.inputDivs}>
          <label htmlFor="description">Descrição: </label>
          <input
            className={styles.inputs}
            type="text"
            name="description"
            id="description"
            value={expense.description}
            onChange={ handleChange }
          />
        </div>
        <div className={`${styles.inputDivs} ${styles.buttonDiv}`}>
          {!edit.edit ? (
            <button
              className={styles.button}
              type="button"
              onClick={ handleSave }
              disabled={ validadeForm() }
            >
              Adicionar despesa
            </button>
          ): (
            <div className={styles.editBtnsDiv}>
              <button
                className={styles.button}
                type="button"
                onClick={ confirmEdit }
                disabled={ validadeForm() }
              >
                Editar despesa
              </button>

              <button
                className={styles.button}
                onClick={() => dispatch(setEdit({edit: false, expenseId: 0}))}
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
      </form>
  )
}

export default WalletForm