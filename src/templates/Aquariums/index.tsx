import * as S from './styles'
import Base from 'templates/Base'
import { aquariumColumns } from 'components/Table/templates'
import { Aquarium } from 'services/api/Models'
import { useSession } from 'next-auth/client'
import useFetch from 'hooks/useFetch'
import { useEffect } from 'react'
import { USER_AQUARIUMS } from 'services/api/Repository/aquarium'
import Table from 'components/Table'

const Aquariums = () => {
  const [session] = useSession()
  const aquariums = useFetch<Aquarium[]>()

  useEffect(() => {
    aquariums.request(USER_AQUARIUMS(session?.id as number), session)
  }, [])

  return (
    <Base>
      <S.Wrapper>
        {aquariums.data && (
          <Table
            title="Aquários"
            columns={aquariumColumns}
            data={aquariums.data}
            buttonLabel={'Adicionar um novo aquário'}
            buttonUrl={'/aquarium/create'}
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Aquariums
