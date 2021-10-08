import Api from '../api'
import { User } from '../Models'

export const USER_REGISTER = (body: User) => {
  return new Api().makePost(`/register`, body)
}

export const USER_LOGOUT = () => {
  return new Api().makePost(`/logout`, {})
}
