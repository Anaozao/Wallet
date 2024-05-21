import { ActionType, ReduxState } from "../../types"
import { EDIT_EXPENSE, GET_CURRENCIES, REMOVE_EXPENSE, SAVE_EXPENSE, SET_EDIT } from "../actions/actions"

const INITIAL_STATE: ReduxState['walletReducer'] = {
  currencies: [],
  expenses: [],
  edit: {
    edit: false,
    expenseId: 0
  }
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
    case SET_EDIT:
      return {
        ...state,
        edit: action.payload
      }  
    case EDIT_EXPENSE:
      return {
        ...state,
        expenses: state.expenses
          .map((expense) => (
            expense.id === action.payload.id ? 
              {...action.payload, exchangeRates: expense.exchangeRates} : expense)
          )
      }    
    default:
      return state;
  }
}

export default walletReducer;