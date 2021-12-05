import useFetch from 'hooks/useFetch'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { Aquarium } from 'services/api/Models'
import {
  AQUARIUM_LAST_UPDATE_STATS,
  USER_AQUARIUMS
} from 'services/api/Repository/aquarium'
import Base from 'templates/Base'
import * as S from './styles'
import AquariumLastUpdateCard from 'components/AquariumLastUpdateCard'
import Table from 'components/Table'
import { aquariumColumns } from 'components/Table/templates'

const Home = () => {
  const [session] = useSession()
  const lastUpdate = useFetch<any>()
  const aquariums = useFetch<Aquarium[]>()

  function getLastStats() {
    setInterval(() => {
      lastUpdate.request(AQUARIUM_LAST_UPDATE_STATS(), session)
    }, 5000)
  }

  useEffect(() => {
    aquariums.request(USER_AQUARIUMS(session?.id as number), session)
    lastUpdate.request(AQUARIUM_LAST_UPDATE_STATS(), session)
    getLastStats()
  }, [])

  console.log(lastUpdate.data)

  return (
    <Base>
      {lastUpdate.data && (
        <AquariumLastUpdateCard
          isHabitable={lastUpdate.data.is_habitable}
          liters={lastUpdate.data.liters}
          name={lastUpdate.data.name}
          updateAt={lastUpdate.data.createdAt}
          status={lastUpdate.data.amonia}
        />
      )}
      {aquariums.data && (
        <S.Table>
          <Table
            title="Aquários"
            columns={aquariumColumns}
            data={aquariums.data}
          />
        </S.Table>
      )}
    </Base>
  )
}

export default Home
