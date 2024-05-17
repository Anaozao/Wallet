import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type LoginType = {
  email: string,
  password: string
}

export type ActionType = {
  type: string,
  payload: LoginType
}

export type ReduxState = {
  loginReducer: {
    email: string,
    password: string,
  }
  walletReducer: {
    currencies: string[]
  }
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type CurrencyType = {
  [key: string]: {
    code: string
    codein: string
    name: string
    high: string
    low: string
    varBid: string
    pctChange: string
    bid: string
    ask: string
    timestamp: string
    create_date: string
  }
}

export type ExpenseType = {
  value: string,
  currency: string,
  method: string,
  category: string,
  description: string,
  id: number,
}