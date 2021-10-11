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

  useEffect(() => {
    lastUpdate.request(AQUARIUM_LAST_UPDATE_STATS(), session)
    aquariums.request(USER_AQUARIUMS(session?.id as number), session)
  }, [])

  return (
    <Base>
      {lastUpdate.data && (
        <AquariumLastUpdateCard
          isHabitable={lastUpdate.data.is_habitable}
          liters={lastUpdate.data.liters}
          name={lastUpdate.data.name}
          updateAt={lastUpdate.data.created_at}
          status={lastUpdate.data.status}
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
