import Api from '../api'
import { Aquarium } from '../Models'

export const USER_AQUARIUMS = (user_id: number) => {
  return new Api().makeGet(`/user/aquarium/${user_id}`)
}

export const AQUARIUM_SHOW = (aquarium_id: number) => {
  return new Api().makeGet(`/aquarium/${aquarium_id}`)
}

export const AQUARIUM_STATS = (aquarium_id: number) => {
  return new Api().makeGet(`/aquarium/stats/${aquarium_id}`)
}

export const AQUARIUM_STORE = (body: Aquarium) => {
  return new Api().makePost(`/aquarium`, body)
}

export const AQUARIUM_UPDATE = (
  aquarium_id: number,
  body: Partial<Omit<Aquarium, 'user_id'>>
) => {
  return new Api().makePut(`/aquarium/${aquarium_id}`, body)
}

export const AQUARIUM_DELETE = (aquarium_id: number) => {
  return new Api().makeGet(`/aquarium/${aquarium_id}`)
}
export const AQUARIUM_LAST_UPDATE_STATS = () => {
  return new Api().makeGet(`/user/aquariums/last-stats`)
}
