import Api from '../api'
import { Device } from '../Models'

export const USER_REGISTER = (body: Device) => {
  return new Api().makePost(`/device`, body)
}
