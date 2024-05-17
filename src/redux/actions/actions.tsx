import { Dispatch, ExpenseType, LoginType } from "../../types"
import { fetchApi } from "../../utils/API"

export const SAVE_LOGIN = 'SAVE_LOGIN'
export const GET_CURRENCIES = 'GET_CURRENCIES'
export const SAVE_EXPENSE = 'SAVE_EXPENSE'

export const saveLogin = (payload: LoginType) => {
  return {
    type: SAVE_LOGIN,
    payload,
  }
}

const getCurrencies = (payload: string[]) => {
  return {
    type: GET_CURRENCIES,
    payload,
  }
}

export function currenciesNames() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetchApi('https://economia.awesomeapi.com.br/json/all')
      const currenciesArray = Object.keys(response)
        .filter((currency) => currency !== 'USDT')
      dispatch(getCurrencies(currenciesArray))
    } catch (error) {
      console.error(error)
    }
  }
}

export const saveExpense = (payload: ExpenseType) => {
  return {
    type: SAVE_EXPENSE,
    payload,
  }
}