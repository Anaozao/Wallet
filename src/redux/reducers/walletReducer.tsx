import { ActionType } from "../../types"
import { GET_CURRENCIES, REMOVE_EXPENSE, SAVE_EXPENSE } from "../actions/actions"

const INITIAL_STATE = {
  currencies: [],
  expenses: []
}

const walletReducer = (state = INITIAL_STATE, action: ActionType ) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload
      }
    case SAVE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: action.payload
      }    
    default:
      return state;
  }
}

export default walletReducer;