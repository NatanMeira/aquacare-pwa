import { makePost } from '../api'
import { Device } from '../Models'

export const USER_REGISTER = (body: Device) => {
  return makePost(`/device`, body)
}
