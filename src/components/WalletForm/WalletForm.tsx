import { useDispatch, useSelector } from "react-redux"
import { ExpenseType, ReduxState } from "../../types"
import { useState } from "react"
import { saveExpense } from "../../redux/actions/actions";

function WalletForm() {
  const { currencies } = useSelector((state: ReduxState) => state.walletReducer)
  const dispatch = useDispatch();
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
    dispatch(saveExpense(expense))
    setExpense({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      category: 'Alimentação',
      description: '',
      id: expense.id + 1,
    })
  }

  return (
    <main>
      <form>
        <div>
          <label htmlFor="value-input">Valor: </label>
          <input
            type="text"
            id="value-input"
            name="value"
            onChange={ handleChange }
            value={expense.value}
          />
        </div>

        <div>
          <label htmlFor="currency-input">Moeda: </label>
          <select
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
        <div>
          <label htmlFor="method">Método de pagamento: </label>
          <select
            onChange={ handleChange }
            name="method"
            id="method"
          >
            <option value="Dinheiro">Dinehiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Categoria: </label>
          <select
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
        <div>
          <label htmlFor="description">Descrição: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={expense.description}
            onChange={ handleChange }
          />
        </div>
        <div>
          <button
            type="button"
            onClick={ handleSave }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    </main>
  )
}

export default WalletForm