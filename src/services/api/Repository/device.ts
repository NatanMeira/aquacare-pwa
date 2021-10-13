import { makeGet, makePost } from '../api'

interface CreateDevice {
  device_id: string
  user_id: number
  aquarium_id: number
}

export const DEVICE_CREATE = (body: CreateDevice) => {
  return makePost(`/device`, body)
}

export const GET_DEVICES = (user_id: number) => {
  return makeGet(`/user/device/${user_id}`)
}
