import { makeGet, makePost, makePut } from '../api'
import { Aquarium } from '../Models'

export const USER_AQUARIUMS = (user_id: number) => {
  return makeGet(`/user/aquarium/${user_id}`)
}

export const AQUARIUM_SHOW = (aquarium_id: number) => {
  return makeGet(`/aquarium/${aquarium_id}`)
}

export const AQUARIUM_STATS = (aquarium_id: number) => {
  return makeGet(`/aquarium/stats/${aquarium_id}`)
}

interface AddAquarium {
  name: string
  liters: number
  user_id: number
}

export const AQUARIUM_CREATE = (body: AddAquarium) => {
  return makePost(`/aquarium`, body)
}

export const AQUARIUM_UPDATE = (
  aquarium_id: number,
  body: Partial<Omit<Aquarium, 'user_id'>>
) => {
  return makePut(`/aquarium/${aquarium_id}`, body)
}

export const AQUARIUM_DELETE = (aquarium_id: number) => {
  return makeGet(`/aquarium/${aquarium_id}`)
}
export const AQUARIUM_LAST_UPDATE_STATS = () => {
  return makeGet(`/user/aquariums/last-stats`)
}
