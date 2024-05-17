export type LoginType = {
  email: string,
  password: string
}

export type SaveLogin = {
  type: string,
  payload: LoginType
}