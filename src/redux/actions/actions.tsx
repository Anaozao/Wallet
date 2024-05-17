import { LoginType } from "../../types"

export const SAVE_LOGIN = 'SAVE_LOGIN'

export const saveLogin = (payload: LoginType) => {
  return {
    type: SAVE_LOGIN,
    payload,
  }
} 