import { AnyAction } from "redux"
import { SAVE_LOGIN } from "../actions/actions"


const INITIAL_STATE = {
  email: '',
  password: ''
}

const loginReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        email: action.payload.email
    }
    default:
      return state
  }
}

export default loginReducer