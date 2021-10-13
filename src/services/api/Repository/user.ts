import { makePost } from '../api'
import { User } from '../Models'

interface SignUpUser extends User {
  password: string
  password_confirmation: string
}

export const USER_REGISTER = (body: SignUpUser) => {
  return makePost(`/register`, body)
}

export const USER_LOGOUT = () => {
  return makePost(`/logout`, {})
}
