import { CurrencyType, Dispatch, ExpenseType, LoginType, SetEditType } from "../../types"
import { fetchApi } from "../../utils/API"

export const SAVE_LOGIN = 'SAVE_LOGIN'
export const GET_CURRENCIES = 'GET_CURRENCIES'
export const SAVE_EXPENSE = 'SAVE_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'
export const EDIT_EXPENSE = 'EDIT_EXPENSE'
export const SET_EDIT = 'SET_EDIT'

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

const getExpense = (payload: ExpenseType) => {
  return {
    type: SAVE_EXPENSE,
    payload,
  }
}

export function saveExpenses(expense: ExpenseType) {
  return async (dispatch: Dispatch) => {
    try {
      const data: CurrencyType[] = await fetchApi('https://economia.awesomeapi.com.br/json/all')
      dispatch(getExpense({...expense, exchangeRates: data }))
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeExpense = (payload: ExpenseType[]) => {
  return {
    type: REMOVE_EXPENSE,
    payload,
  }
}

export const setEdit = (payload: SetEditType) => {
  return {
    type: SET_EDIT,
    payload,
  }
}

export const editExpenses = (payload: ExpenseType) => {
  return {
    type: EDIT_EXPENSE,
    payload,
  }
}